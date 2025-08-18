import * as BABYLON from "babylonjs";
import { CONFIG_DATA } from "../BuildingLayoutConfig";
import React, { useEffect } from "react";

// Parametry
const CLEARANCE = 0.5; // bezpečný odstup od zdí a děr (m)
const SAMPLE_STEP = 0.05; // krok vzorkování LOS (m)
const DEFAULT_WALL_THICKNESS = 0.15; // default tloušťka stěny, když chybí partitionWidth
const PASSABLE_UNDER_Y = 2.0; // příčky od této výšky bereme jako "nad hlavou" -> průchozí

// ŠIPKY – vizuál
const ARROW_SPACING = 1.2; // rozestup šipek podél cesty (m)
const ARROW_SHAFT_LEN = 0.55; // délka těla
const ARROW_HEAD_LEN = 0.28; // délka hlavy
const ARROW_SHAFT_THICK = 0.1; // tloušťka těla
const ARROW_HEAD_DIAM = 0.3; // průměr hlavy
const ARROW_START_OFFSET = 0.3; // jak brzy po startu začít pokládat šipky (m)

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
    const bottomY =
      typeof p.yLevel === "number"
        ? p.yLevel
        : typeof p.y === "number"
        ? p.y
        : 0;

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
      // diagonála (vzácné): konzervativní bbox nafouknutý o half
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

// ===== PinkGlass: detekce materiálu a sběr AABB obdélníků =====
// Detekce pinkGlass materiálu (funguje i pro MultiMaterial)
const isPinkGlassMaterial = (mat) => {
  if (!mat) return false;
  const nameOrId = (mat.name || mat.id || "").toLowerCase();
  if (nameOrId.includes("pinkglass")) return true;
  if (Array.isArray(mat.subMaterials)) {
    return mat.subMaterials.some((sm) =>
      ((sm?.name || sm?.id || "") + "").toLowerCase().includes("pinkglass")
    );
  }
  return false;
};

// PinkGlass mesh-e -> nafouknuté AABB obdélníky v XZ
// Bere pouze ty, které nejsou "nad hlavou" na daném patře (viz PASSABLE_UNDER_Y)
const collectPinkGlassRects = (
  scene,
  yLevel, // absolutní Y patra (viz výpočet níže)
  clearance = CLEARANCE,
  passableUnderY = PASSABLE_UNDER_Y
) => {
  const rects = [];
  if (!scene) return rects;
  const eps = 1e-6;

  for (const m of scene.meshes) {
    if (!m || !m.material) continue;
    if (!isPinkGlassMaterial(m.material)) continue;
    if (!(typeof m.isEnabled === "function" ? m.isEnabled() : m.isEnabled))
      continue;
    if (m.isVisible === false) continue;

    // Ujisti se, že world matrix/bounding info je aktuální
    m.computeWorldMatrix(true);
    const bi = m.getBoundingInfo?.();
    const bb = bi?.boundingBox;
    if (!bb) continue;

    const min = bb.minimumWorld;
    const max = bb.maximumWorld;

    // Spodní hrana vůči tomuto patru
    const bottomLocalY = min.y - yLevel;
    // Pokud je celé "nad hlavou", ignoruj
    if (bottomLocalY >= passableUnderY - eps) continue;

    // AABB v XZ, rozšířený o clearance
    rects.push({
      minX: min.x - clearance,
      maxX: max.x + clearance,
      minZ: min.z - clearance,
      maxZ: max.z + clearance,
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
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i].position;
      const b = nodes[j].position;
      if (a.x === b.x && a.z === b.z) continue;
      if (lineOfSight(a, b, obstacleRects)) {
        const d = getDistance(a, b);
        nodes[i].neighbors.push({ id: nodes[j].id, cost: d });
        nodes[j].neighbors.push({ id: nodes[i].id, cost: d });
      }
    }
  }
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

// ================== Vizualizace – šipky ==================

// Udělá šablonu šipky (míří lokálně do +Z)
const createArrowTemplate = (scene, color) => {
  // Tělo
  const shaft = BABYLON.MeshBuilder.CreateBox(
    "arrow_shaft",
    {
      width: ARROW_SHAFT_THICK,
      height: ARROW_SHAFT_THICK,
      depth: ARROW_SHAFT_LEN,
    },
    scene
  );
  // posuň tělo trochu dozadu, aby celek byl kolem lokálního středu
  shaft.position.z = -ARROW_HEAD_LEN / 2;

  // Hlava (kužel)
  const head = BABYLON.MeshBuilder.CreateCylinder(
    "arrow_head",
    {
      height: ARROW_HEAD_LEN,
      diameterTop: 0,
      diameterBottom: ARROW_HEAD_DIAM,
      tessellation: 12,
    },
    scene
  );
  // Natočit kužel, aby mířil po +Z
  head.rotation.x = Math.PI / 2;
  head.position.z = ARROW_SHAFT_LEN / 2;

  // Sloučit do jedné mesh
  const arrow = BABYLON.Mesh.MergeMeshes(
    [shaft, head],
    true,
    true,
    undefined,
    false,
    true
  );
  arrow.name = "arrow_template";

  // Materiál
  const mat = new BABYLON.StandardMaterial("arrow_mat", scene);
  mat.diffuseColor = color || new BABYLON.Color3(1.0, 1.0, 1.0);
  mat.emissiveColor = mat.diffuseColor;
  mat.specularColor = new BABYLON.Color3(0, 0, 0);
  arrow.material = mat;

  return arrow;
};

// Vykreslí šipky podél cesty; vrátí rodičovský TransformNode pro případný úklid
const visualizeArrowPath = (
  scene,
  path,
  yLevel,
  color = BABYLON.Color3.Black(),
  spacing = ARROW_SPACING,
  startOffset = ARROW_START_OFFSET
) => {
  if (!path || path.length < 2) return null;

  // Rodič pro snadný úklid
  const parent = new BABYLON.TransformNode(`arrow_path_${Date.now()}`, scene);

  // Šablona šipky (+Z)
  const template = createArrowTemplate(scene, color);
  template.setEnabled(false);
  template.parent = parent;

  const y = yLevel + 1;

  // Umístění šipek s jednotným rozestupem přes více segmentů
  let remainingToNext = Math.max(0, startOffset);

  for (let i = 0; i < path.length - 1; i++) {
    const a = path[i];
    const b = path[i + 1];
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const segLen = Math.sqrt(dx * dx + dz * dz);
    if (segLen < 1e-6) {
      // Když je segment prakticky nulový
      remainingToNext = Math.max(0, remainingToNext - segLen);
      continue;
    }

    // Jednotkový směr a yaw vůči +Z
    const ux = dx / segLen;
    const uz = dz / segLen;
    const yaw = Math.atan2(ux, uz);

    // Vzdálenost od začátku segmentu k první šipce
    let d = remainingToNext;
    while (d <= segLen) {
      const px = a.x + ux * d;
      const pz = a.z + uz * d;

      const inst = template.createInstance(`arrow_inst_${i}_${d.toFixed(3)}`);
      inst.parent = parent;
      inst.position = new BABYLON.Vector3(px, y, pz);
      inst.rotationQuaternion = BABYLON.Quaternion.FromEulerAngles(0, yaw, 0);

      d += spacing;
    }

    // Kolik “chybí” do další šipky na dalším segmentu
    remainingToNext = d - segLen;
  }

  return parent;
};

const visualizeEndpoints = (scene, start, end, yLevel) => {
  const mk = (p, color, name) => {
    const s = BABYLON.MeshBuilder.CreateSphere(name, { diameter: 0.4 }, scene);
    s.position = new BABYLON.Vector3(p.x, yLevel + 1, p.z);
    const m = new BABYLON.StandardMaterial(`${name}_mat`, scene);
    m.diffuseColor = color;
    m.emissiveColor = color;
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
    let arrowGroups = [];
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

      // Překážky = partitions (pod PASSABLE_UNDER_Y) + díry v podlaze + pinkGlass mesh-e
      const wallRects = collectObstacleRects(
        floorData,
        CLEARANCE,
        PASSABLE_UNDER_Y
      );
      const holeRects = collectHoleRects(floorData, CLEARANCE);
      const glassRects = collectPinkGlassRects(
        scene,
        yLevel,
        CLEARANCE,
        PASSABLE_UNDER_Y
      );
      const obstacleRects = [...wallRects, ...holeRects, ...glassRects];

      floorData.evacuation.forEach((route, idx) => {
        const start = { x: route.start.x, y: 0, z: route.start.z };
        const end = { x: route.end.x, y: 0, z: route.end.z };

        // vždy zobraz start/cíl
        visualizeEndpoints(scene, start, end, yLevel);

        // Trasa s vyhnutím překážkám
        const path = straightPathfinding(start, end, obstacleRects);

        if (path.length >= 2) {
          // ŠIPKY místo jedné čáry
          const group = visualizeArrowPath(
            scene,
            path,
            yLevel,
            BABYLON.Color3.Black(),
            ARROW_SPACING,
            ARROW_START_OFFSET
          );
          if (group) arrowGroups.push(group);
        }
      });
    } catch (e) {
      console.error("[Evac] Chyba v EvacuationPath:", e);
    }

    // Úklid: zlikviduj všechny šipkové skupiny při změně scene/floorId
    return () => {
      try {
        for (const g of arrowGroups) {
          if (g && !g.isDisposed()) {
            g.dispose(true, true);
          }
        }
        arrowGroups = [];
      } catch {}
    };
  }, [scene, floorId]);

  return null;
};

export default EvacuationPath;
