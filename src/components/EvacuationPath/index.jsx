import * as BABYLON from "babylonjs";
import { CONFIG_DATA } from "../BuildingLayoutConfig";
import React, { useEffect } from "react";

// Parametry
const CLEARANCE = 0.12; // bezpečný odstup od zdí a děr (m)
const SAMPLE_STEP = 0.05; // krok vzorkování LOS (m)
const DEFAULT_WALL_THICKNESS = 0.15; // default tloušťka stěny, když chybí partitionWidth

// Partitions, jejichž spodní hrana (yLevel) je >= této výšky, se berou jako "nad hlavou" => průchozí
// Nastav dle svého (typicky 2.0–2.1 m). Můžeš případně vzít z configu.
const PASSABLE_UNDER_Y = 2.0;

// ================== Pomocné funkce a pathfinding ==================

class VGNode {
  constructor(position, id) {
    this.position = position; // {x,y,z}
    this.id = id;
    this.neighbors = []; // {id, cost}
  }
}

const getDistance = (a, b) =>
  Math.hypot(a.x - b.x, (a.y || 0) - (b.y || 0), a.z - b.z);

// Obdélník (AABB)
const pointInsideOrOnRect = (p, r, eps = 1e-6) =>
  p.x >= r.minX - eps &&
  p.x <= r.maxX + eps &&
  p.z >= r.minZ - eps &&
  p.z <= r.maxZ + eps;

// Přísný vnitřek obdélníku (bez hran)
const pointStrictInsideRect = (p, r, eps = 1e-4) =>
  p.x > r.minX + eps &&
  p.x < r.maxX - eps &&
  p.z > r.minZ + eps &&
  p.z < r.maxZ - eps;

// Z layoutu vytáhneme všechny "partition" a převedeme je na nafouknuté obdélníky,
// přičemž ignorujeme příčky, které začínají nad hlavou (yLevel >= PASSABLE_UNDER_Y).
const collectObstacleRects = (
  floorData,
  clearance = CLEARANCE,
  passableUnderY = PASSABLE_UNDER_Y
) => {
  const walls = floorData?.layout?.walls || [];
  const parts = walls.filter((w) => w.type === "partition" && w.start && w.end);

  const rects = [];
  const eps = 1e-6;

  for (const p of parts) {
    // spodní hrana příčky (pokud není, bereme 0 = od podlahy)
    const bottomY =
      typeof p.yLevel === "number"
        ? p.yLevel
        : typeof p.y === "number"
        ? p.y
        : 0;

    // Pokud je příčka nad hlavou, je průchozí -> ignorujeme ji jako překážku
    if (bottomY >= passableUnderY - 1e-6) continue;

    const x1 = p.start.x,
      z1 = p.start.z;
    const x2 = p.end.x,
      z2 = p.end.z;

    const w =
      typeof p.partitionWidth === "number"
        ? p.partitionWidth
        : DEFAULT_WALL_THICKNESS;
    const half = w / 2 + clearance;

    // Axis-aligned?
    if (Math.abs(z1 - z2) < eps) {
      // horizontální segment
      const minX = Math.min(x1, x2) - clearance;
      const maxX = Math.max(x1, x2) + clearance;
      const minZ = z1 - half;
      const maxZ = z1 + half;
      rects.push({ minX, maxX, minZ, maxZ });
    } else if (Math.abs(x1 - x2) < eps) {
      // vertikální segment
      const minZ = Math.min(z1, z2) - clearance;
      const maxZ = Math.max(z1, z2) + clearance;
      const minX = x1 - half;
      const maxX = x1 + half;
      rects.push({ minX, maxX, minZ, maxZ });
    } else {
      // diagonála (vzácné): použijeme konzervativní obdélník (bbox) nafouknutý o half
      const minX = Math.min(x1, x2) - half;
      const maxX = Math.max(x1, x2) + half;
      const minZ = Math.min(z1, z2) - half;
      const maxZ = Math.max(z1, z2) + half;
      rects.push({ minX, maxX, minZ, maxZ });
    }
  }
  return rects;
};

// DÍRY v podlaze -> nafouknuté obdélníky (AABB), vždy neprůchodné
const collectHoleRects = (floorData, clearance = CLEARANCE) => {
  const holes = floorData?.holes || [];
  const rects = [];
  for (const h of holes) {
    if (
      typeof h.x !== "number" ||
      typeof h.z !== "number" ||
      typeof h.width !== "number" ||
      typeof h.depth !== "number"
    ) {
      continue;
    }
    const halfW = h.width / 2 + clearance;
    const halfD = h.depth / 2 + clearance;
    rects.push({
      minX: h.x - halfW,
      maxX: h.x + halfW,
      minZ: h.z - halfD,
      maxZ: h.z + halfD,
    });
  }
  return rects;
};

// Robustní line-of-sight: vzorkování podél úsečky proti obdélníkům
// - nevyhodnocuje koncové body (abychom povolili dotyk v uzlech)
// - kolize jen pokud bod leží ve STRICT vnitřku obdélníku
const lineOfSight = (a, b, obstacleRects, step = SAMPLE_STEP) => {
  const dx = b.x - a.x;
  const dz = b.z - a.z;
  const dist = Math.sqrt(dx * dx + dz * dz);
  if (dist === 0) return true;

  const steps = Math.max(2, Math.ceil(dist / step));

  const segBB = {
    minX: Math.min(a.x, b.x),
    maxX: Math.max(a.x, b.x),
    minZ: Math.min(a.z, b.z),
    maxZ: Math.max(a.z, b.z),
  };

  for (const r of obstacleRects) {
    // bbox quick reject
    if (
      segBB.maxX < r.minX ||
      segBB.minX > r.maxX ||
      segBB.maxZ < r.minZ ||
      segBB.minZ > r.maxZ
    ) {
      continue;
    }
    // sampling – vynecháme i=0 a i=steps (endpoints)
    for (let i = 1; i < steps; i++) {
      const t = i / steps;
      const x = a.x + dx * t;
      const z = a.z + dz * t;
      if (pointStrictInsideRect({ x, z }, r)) return false;
    }
  }
  return true;
};

const buildVisibilityNodes = (start, end, obstacleRects) => {
  const nodes = [];
  const seen = new Set();

  const push = (pt, label) => {
    const id = `${pt.x.toFixed(4)}_${pt.z.toFixed(4)}_${label || ""}`;
    if (!seen.has(id)) {
      seen.add(id);
      nodes.push(new VGNode({ x: pt.x, y: 0, z: pt.z }, id));
    }
  };

  // start + cíl
  push(start, "start");
  push(end, "end");

  // rohy všech obdélníků (nafouknutých) jako kandidátní uzly
  for (const r of obstacleRects) {
    const corners = [
      { x: r.minX, z: r.minZ },
      { x: r.maxX, z: r.minZ },
      { x: r.maxX, z: r.maxZ },
      { x: r.minX, z: r.maxZ },
    ];
    corners.forEach((c, i) => push(c, `corner_${i}`));
  }

  return nodes;
};

const buildVisibilityGraph = (nodes, obstacleRects) => {
  const idToNode = new Map(nodes.map((n) => [n.id, n]));
  // let edgeCount = 0; // Debug
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i].position;
      const b = nodes[j].position;
      if (a.x === b.x && a.z === b.z) continue;
      if (lineOfSight(a, b, obstacleRects)) {
        const d = getDistance(a, b);
        nodes[i].neighbors.push({ id: nodes[j].id, cost: d });
        nodes[j].neighbors.push({ id: nodes[i].id, cost: d });
        // edgeCount++;
      }
    }
  }
  // console.log('[Evac] VG nodes:', nodes.length, 'edges:', edgeCount);
  return idToNode;
};

const aStar = (nodes, idToNode, startPos, endPos) => {
  const s = nodes.find(
    (n) => n.position.x === startPos.x && n.position.z === startPos.z
  );
  const e = nodes.find(
    (n) => n.position.x === endPos.x && n.position.z === endPos.z
  );
  if (!s || !e) return [];

  const open = new Set([s.id]);
  const came = new Map();
  const g = new Map(nodes.map((n) => [n.id, Infinity]));
  const f = new Map(nodes.map((n) => [n.id, Infinity]));

  g.set(s.id, 0);
  f.set(s.id, getDistance(startPos, endPos));

  while (open.size) {
    let cur = null,
      best = Infinity;
    for (const id of open) {
      const val = f.get(id) ?? Infinity;
      if (val < best) {
        best = val;
        cur = id;
      }
    }
    if (cur === e.id) {
      const path = [];
      for (let cid = cur; cid; cid = came.get(cid))
        path.push(idToNode.get(cid).position);
      return path.reverse();
    }
    open.delete(cur);
    const node = idToNode.get(cur);
    for (const nb of node.neighbors) {
      const tentative = (g.get(cur) ?? Infinity) + nb.cost;
      if (tentative < (g.get(nb.id) ?? Infinity)) {
        came.set(nb.id, cur);
        g.set(nb.id, tentative);
        const pos = idToNode.get(nb.id).position;
        f.set(nb.id, tentative + getDistance(pos, endPos));
        open.add(nb.id);
      }
    }
  }
  return [];
};

const smoothPath = (path, obstacleRects) => {
  if (path.length <= 2) return path;
  const result = [];
  let i = 0;
  while (i < path.length) {
    result.push(path[i]);
    if (i === path.length - 1) break;
    let j = path.length - 1;
    while (j > i + 1 && !lineOfSight(path[i], path[j], obstacleRects)) {
      j--;
    }
    i = j;
  }
  return result;
};

// Posune bod mimo obdélníky, pokud je uvnitř nebo na hraně
const nudgeOutOfRects = (p, rects, pad = 1e-3, maxIter = 10) => {
  const out = { ...p };
  let iter = 0;
  while (iter++ < maxIter) {
    let moved = false;
    for (const r of rects) {
      if (pointInsideOrOnRect(out, r, 0)) {
        const dxL = out.x - r.minX;
        const dxR = r.maxX - out.x;
        const dzD = out.z - r.minZ;
        const dzU = r.maxZ - out.z;
        const m = Math.min(dxL, dxR, dzD, dzU);
        if (m === dxL) out.x = r.minX - pad;
        else if (m === dxR) out.x = r.maxX + pad;
        else if (m === dzD) out.z = r.minZ - pad;
        else out.z = r.maxZ + pad;
        moved = true;
      }
    }
    if (!moved) break;
  }
  return out;
};

const straightPathfinding = (start, end, obstacleRects) => {
  // posuň start/end mimo překážky (kvůli clearance)
  const s = nudgeOutOfRects(start, obstacleRects);
  const e = nudgeOutOfRects(end, obstacleRects);

  // Rychlá výhra
  if (lineOfSight(s, e, obstacleRects)) {
    return [start, end]; // vykreslíme původní body
  }

  const nodes = buildVisibilityNodes(s, e, obstacleRects);
  const idToNode = buildVisibilityGraph(nodes, obstacleRects);
  const raw = aStar(nodes, idToNode, s, e);
  if (!raw.length) return [];

  const smoothed = smoothPath(raw, obstacleRects);
  // nahradíme první/poslední bod původním start/end pro hezké vykreslení
  if (smoothed.length >= 1) {
    smoothed[0] = start;
    smoothed[smoothed.length - 1] = end;
  }
  return smoothed;
};

// ================== Vizualizace ==================

const visualizePathLines = (
  scene,
  path,
  yLevel,
  color = BABYLON.Color3.Green(),
  namePrefix = "evacuation_path"
) => {
  if (!path || path.length < 2) return null;

  const name = `${namePrefix}_${Date.now()}`;
  const points = path.map((p) => new BABYLON.Vector3(p.x, yLevel + 0.7, p.z));
  const lines = BABYLON.MeshBuilder.CreateLines(name, { points }, scene);

  const mat = new BABYLON.StandardMaterial(`${name}_mat`, scene);
  mat.emissiveColor = color;
  mat.diffuseColor = color;
  mat.specularColor = new BABYLON.Color3(0, 0, 0);
  mat.alpha = 0.95;

  lines.color = color;
  lines.material = mat;
  return lines;
};

const visualizeEndpoints = (scene, start, end, yLevel) => {
  const mk = (p, color, name) => {
    const s = BABYLON.MeshBuilder.CreateSphere(name, { diameter: 0.4 }, scene);
    s.position = new BABYLON.Vector3(p.x, yLevel + 0.7, p.z);
    const m = new BABYLON.StandardMaterial(`${name}_mat`, scene);
    m.diffuseColor = color;
    m.specularColor = new BABYLON.Color3(0, 0, 0);
    s.material = m;
    return s;
  };
  mk(start, BABYLON.Color3.Yellow(), `start_bubble_${Date.now()}`);
  mk(end, BABYLON.Color3.Red(), `end_bubble_${Date.now()}`);
};

// ================== Komponenta ==================

const EvacuationPath = ({ scene, floorId }) => {
  useEffect(() => {
    try {
      if (!scene) return;

      // Bezpečný check disposed
      const disposed =
        typeof scene.isDisposed === "function"
          ? scene.isDisposed()
          : typeof scene.isDisposed === "boolean"
          ? scene.isDisposed
          : false;
      if (disposed) return;

      const floorData = CONFIG_DATA.floors.find(
        (floor) => floor.id === floorId
      );
      if (!floorData || !floorData.evacuation) return;

      // Výpočet Y pozice patra
      let yLevel = 0;
      for (let i = 0; i < CONFIG_DATA.floors.length; i++) {
        if (CONFIG_DATA.floors[i].id === floorId) break;
        const isCurrent1NP = CONFIG_DATA.floors[i].id === 0;
        const wallHeight = isCurrent1NP
          ? CONFIG_DATA.visualization.wall_height_1NP
          : CONFIG_DATA.visualization.wall_height;
        yLevel +=
          wallHeight +
          CONFIG_DATA.visualization.floor_thickness +
          CONFIG_DATA.visualization.floor_spacing;
      }

      // Překážky = partitions (pod PASSABLE_UNDER_Y) + díry v podlaze
      const wallRects = collectObstacleRects(
        floorData,
        CLEARANCE,
        PASSABLE_UNDER_Y
      );
      const holeRects = collectHoleRects(floorData, CLEARANCE);
      const obstacleRects = [...wallRects, ...holeRects];

      floorData.evacuation.forEach((route, idx) => {
        const start = { x: route.start.x, y: 0, z: route.start.z };
        const end = { x: route.end.x, y: 0, z: route.end.z };

        // vždy zobraz start/cíl
        visualizeEndpoints(scene, start, end, yLevel);

        // Strategická trasa s vyhnutím "partition" a "holes"
        const path = straightPathfinding(start, end, obstacleRects);

        if (path.length >= 2) {
          visualizePathLines(
            scene,
            path,
            yLevel,
            BABYLON.Color3.Green(),
            `evacuation_path_${floorId}_${idx}`
          );

          // Předpokládáme, že tato funkce existuje v projektu
          visualizePathBubbles(
            scene,
            path,
            yLevel,
            BABYLON.Color3.Green(),
            0.32,
            `path_${floorId}_${idx}`
          );
        } else if (path.length === 1) {
          // Předpokládáme, že tato funkce existuje v projektu
          visualizePathBubbles(
            scene,
            path,
            yLevel,
            BABYLON.Color3.Green(),
            0.32,
            `single_${floorId}_${idx}`
          );
        }
      });
    } catch (e) {
      console.error("[Evac] Chyba v EvacuationPath:", e);
    }
  }, [scene, floorId]);

  return null;
};

export default EvacuationPath;
