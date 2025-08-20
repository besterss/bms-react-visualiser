import * as BABYLON from "babylonjs";
import { CONFIG_DATA } from "../BuildingLayoutConfig";
import React, { useEffect } from "react";

const DEFAULT_CLEARANCE = 0.5; // globální výchozí clearance (můžeš nechat)
const SAMPLE_STEP = 0.05;
const PASSABLE_UNDER_Y = 2.0;

const ARROW_SPACING = 1.2;
const ARROW_SHAFT_LEN = 0.55;
const ARROW_HEAD_LEN = 0.28;
const ARROW_SHAFT_THICK = 0.1;
const ARROW_HEAD_DIAM = 0.3;
const ARROW_START_OFFSET = 0.3;

const DEFAULT_WALL_THICKNESS = 0.2;

// ---------- Helpers ----------
class VGNode {
  constructor(position, id) {
    this.position = position;
    this.id = id;
    this.neighbors = [];
  }
}
const getDistance = (a, b) =>
  Math.hypot(a.x - b.x, (a.y || 0) - (b.y || 0), a.z - b.z);

const pointInsideOrOnRect = (p, r, eps = 1e-6) =>
  p.x >= r.minX - eps &&
  p.x <= r.maxX + eps &&
  p.z >= r.minZ - eps &&
  p.z <= r.maxZ + eps;

const pointStrictInsideRect = (p, r, eps = 1e-4) =>
  p.x > r.minX + eps &&
  p.x < r.maxX - eps &&
  p.z > r.minZ + eps &&
  p.z < r.maxZ - eps;

// ---------- Obstacles ----------
const collectObstacleRects = (
  floorData,
  clearance,
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

    // Překážkami děláme jen nízké příčky (pod 2.0 m), „překlady/dveře“ (~2.1 m) neblokují
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
      // horizontální
      rects.push({
        minX: Math.min(x1, x2) - clearance,
        maxX: Math.max(x1, x2) + clearance,
        minZ: z1 - half,
        maxZ: z1 + half,
      });
    } else if (Math.abs(x1 - x2) < eps) {
      // vertikální
      rects.push({
        minX: x1 - half,
        maxX: x1 + half,
        minZ: Math.min(z1, z2) - clearance,
        maxZ: Math.max(z1, z2) + clearance,
      });
    } else {
      // šikmá/náhradní AABB
      rects.push({
        minX: Math.min(x1, x2) - half,
        maxX: Math.max(x1, x2) + half,
        minZ: Math.min(z1, z2) - half,
        maxZ: Math.max(z1, z2) + half,
      });
    }
  }
  return rects;
};

const collectHoleRects = (floorData, clearance) => {
  const holes = floorData?.holes || [];
  const rects = [];
  for (const h of holes) {
    if ([h.x, h.z, h.width, h.depth].some((v) => typeof v !== "number"))
      continue;
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

const collectPinkGlassRects = (scene, yLevel, clearance) => {
  const rects = [];
  if (!scene) return rects;
  const walkBandMin = yLevel - 0.1;
  const walkBandMax = yLevel + PASSABLE_UNDER_Y + 0.3;

  for (const m of scene.meshes) {
    if (!m || !m.material) continue;
    if (!isPinkGlassMaterial(m.material)) continue;
    if (!(typeof m.isEnabled === "function" ? m.isEnabled() : m.isEnabled))
      continue;
    if (m.isVisible === false) continue;

    m.computeWorldMatrix(true);
    const bb = m.getBoundingInfo?.().boundingBox;
    if (!bb) continue;
    const min = bb.minimumWorld;
    const max = bb.maximumWorld;

    if (max.y < walkBandMin || min.y > walkBandMax) continue;

    rects.push({
      minX: min.x - clearance,
      maxX: max.x + clearance,
      minZ: min.z - clearance,
      maxZ: max.z + clearance,
    });
  }
  return rects;
};

// NOVÉ: Obdélníky z meshů podle názvu (curved/circular walls, railing)
const collectNamedMeshRects = (scene, yLevel, clearance, nameIncludes = []) => {
  const rects = [];
  if (!scene || !Array.isArray(scene.meshes)) return rects;

  const walkBandMin = yLevel - 0.1;
  const walkBandMax = yLevel + PASSABLE_UNDER_Y + 0.3;

  const includesAny = (name, arr) =>
    arr.some((token) => name.includes(token.toLowerCase()));

  for (const m of scene.meshes) {
    if (!m) continue;
    const enabled =
      typeof m.isEnabled === "function" ? m.isEnabled() : m.isEnabled;
    if (!enabled || m.isVisible === false) continue;

    const name = (m.name || "").toLowerCase();
    if (!includesAny(name, nameIncludes)) continue;

    m.computeWorldMatrix(true);
    const bb = m.getBoundingInfo?.().boundingBox;
    if (!bb) continue;
    const min = bb.minimumWorld;
    const max = bb.maximumWorld;

    if (max.y < walkBandMin || min.y > walkBandMax) continue;

    rects.push({
      minX: min.x - clearance,
      maxX: max.x + clearance,
      minZ: min.z - clearance,
      maxZ: max.z + clearance,
    });
  }
  return rects;
};

// ---------- Visibility + path ----------
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
    // AABB rychlý test
    if (
      segBB.maxX < r.minX ||
      segBB.minX > r.maxX ||
      segBB.maxZ < r.minZ ||
      segBB.minZ > r.maxZ
    )
      continue;

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
  push(start, "start");
  push(end, "end");

  for (const r of obstacleRects) {
    [
      { x: r.minX, z: r.minZ },
      { x: r.maxX, z: r.minZ },
      { x: r.maxX, z: r.maxZ },
      { x: r.minX, z: r.maxZ },
    ].forEach((c, i) => push(c, `corner_${i}`));
  }

  return nodes;
};

const buildVisibilityGraph = (nodes, obstacleRects) => {
  const idToNode = new Map(nodes.map((n) => [n.id, n]));
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i].position,
        b = nodes[j].position;
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
    while (j > i + 1 && !lineOfSight(path[i], path[j], obstacleRects)) j--;
    i = j;
  }
  return result;
};

const nudgeOutOfRects = (p, rects, pad = 1e-2, maxIter = 10) => {
  const out = { ...p };
  let iter = 0;
  while (iter++ < maxIter) {
    let moved = false;
    for (const r of rects) {
      if (pointInsideOrOnRect(out, r, 0)) {
        const dxL = out.x - r.minX,
          dxR = r.maxX - out.x,
          dzD = out.z - r.minZ,
          dzU = r.maxZ - out.z;
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
  const s = nudgeOutOfRects(start, obstacleRects);
  const e = nudgeOutOfRects(end, obstacleRects);
  if (lineOfSight(s, e, obstacleRects)) return [s, e];

  const nodes = buildVisibilityNodes(s, e, obstacleRects);
  const idToNode = buildVisibilityGraph(nodes, obstacleRects);
  const raw = aStar(nodes, idToNode, s, e);
  if (!raw.length) return [];

  const smoothed = smoothPath(raw, obstacleRects);
  if (smoothed.length >= 1) {
    smoothed[0] = s;
    smoothed[smoothed.length - 1] = e;
  }
  return smoothed;
};

const pathLength = (path) => {
  if (!path || path.length < 2) return Infinity;
  let L = 0;
  for (let i = 0; i < path.length - 1; i++)
    L += getDistance(path[i], path[i + 1]);
  return L;
};

// ---------- Šipky viz ----------
const createArrowTemplate = (scene) => {
  const shaft = BABYLON.MeshBuilder.CreateBox(
    "arrow_shaft",
    {
      width: ARROW_SHAFT_THICK,
      height: ARROW_SHAFT_THICK,
      depth: ARROW_SHAFT_LEN,
    },
    scene
  );
  shaft.position.z = -ARROW_HEAD_LEN / 2;

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
  head.rotation.x = Math.PI / 2;
  head.position.z = ARROW_SHAFT_LEN / 2;

  const arrow = BABYLON.Mesh.MergeMeshes(
    [shaft, head],
    true,
    true,
    undefined,
    false,
    true
  );
  arrow.name = "arrow_template";

  const mat = new BABYLON.StandardMaterial("arrow_mat", scene);
  mat.diffuseColor = new BABYLON.Color3(0, 0, 0);
  mat.emissiveColor = mat.diffuseColor;
  mat.specularColor = new BABYLON.Color3(0, 0, 0);
  arrow.material = mat;

  return arrow;
};

const visualizeArrowPath = (
  scene,
  path,
  yLevel,
  spacing = ARROW_SPACING,
  startOffset = ARROW_START_OFFSET
) => {
  if (!path || path.length < 2) return null;

  const parent = new BABYLON.TransformNode(`arrow_path_${Date.now()}`, scene);
  const template = createArrowTemplate(scene);
  template.setEnabled(false);
  template.parent = parent;

  const y = yLevel + 1;

  let remainingToNext = Math.max(0, startOffset);
  for (let i = 0; i < path.length - 1; i++) {
    const a = path[i],
      b = path[i + 1];
    const dx = b.x - a.x,
      dz = b.z - a.z;
    const segLen = Math.sqrt(dx * dx + dz * dz);

    if (segLen < 1e-6) {
      remainingToNext = Math.max(0, remainingToNext - segLen);
      continue;
    }

    const ux = dx / segLen,
      uz = dz / segLen;
    const yaw = Math.atan2(ux, uz);

    let d = remainingToNext;
    while (d <= segLen) {
      const px = a.x + ux * d,
        pz = a.z + uz * d;
      const inst = template.createInstance(`arrow_inst_${i}_${d.toFixed(3)}`);
      inst.parent = parent;
      inst.position = new BABYLON.Vector3(px, y, pz);
      inst.rotationQuaternion = BABYLON.Quaternion.FromEulerAngles(0, yaw, 0);
      d += spacing;
    }
    remainingToNext = d - segLen;
  }

  return parent;
};

// ---------- Endpoints viz ----------
const makeLabel = (scene, text, pos, y) => {
  const plane = BABYLON.MeshBuilder.CreatePlane(
    `label_${text}_${Date.now()}`,
    { size: 0.6 },
    scene
  );
  plane.position = new BABYLON.Vector3(pos.x, y, pos.z);
  plane.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;

  const dt = new BABYLON.DynamicTexture(
    `dt_${text}_${Date.now()}`,
    { width: 256, height: 256 },
    scene,
    false
  );
  const ctx = dt.getContext();
  dt.hasAlpha = true;
  ctx.clearRect(0, 0, 256, 256);
  dt.drawText(
    text,
    null,
    190,
    "bold 180px Arial",
    "#ffffff",
    "transparent",
    true,
    true
  );

  const mat = new BABYLON.StandardMaterial(
    `label_mat_${text}_${Date.now()}`,
    scene
  );
  mat.diffuseTexture = dt;
  mat.opacityTexture = dt;
  mat.emissiveTexture = dt;
  mat.disableLighting = true;
  mat.backFaceCulling = false;

  plane.material = mat;
  return plane;
};

const visualizeEndpoints = (scene, start, end, yLevel, endLabelText = "B") => {
  const mkSphere = (p, color, name) => {
    const s = BABYLON.MeshBuilder.CreateSphere(name, { diameter: 0.45 }, scene);
    s.position = new BABYLON.Vector3(p.x, yLevel + 1, p.z);
    const m = new BABYLON.StandardMaterial(`${name}_mat`, scene);
    m.diffuseColor = color;
    m.emissiveColor = color;
    m.specularColor = new BABYLON.Color3(0, 0, 0);
    s.material = m;
    return s;
  };

  const startSphere = mkSphere(
    start,
    new BABYLON.Color3(0.1, 0.8, 0.2),
    `evac_start_${Date.now()}`
  );
  const endSphere = mkSphere(
    end,
    new BABYLON.Color3(0.9, 0.1, 0.1),
    `evac_end_${Date.now()}`
  );

  const startLabel = makeLabel(scene, "A", start, yLevel + 1.5);
  const endLabel = makeLabel(scene, endLabelText, end, yLevel + 1.5);

  return [startSphere, endSphere, startLabel, endLabel];
};

// ---------- Best-of-candidates ----------
const bestPathToCandidates = (start, candidates, obstacles) => {
  let best = { path: [], target: null, length: Infinity };
  for (const c of candidates) {
    if (!c || typeof c.x !== "number" || typeof c.z !== "number") continue;
    const path = straightPathfinding(
      { x: start.x, y: 0, z: start.z },
      { x: c.x, y: 0, z: c.z },
      obstacles
    );
    if (path.length >= 2) {
      const L = pathLength(path);
      if (L < best.length) best = { path, target: c, length: L };
    }
  }
  // fallback: eukleidovsky nejbližší
  if (!best.path.length && candidates.length) {
    let nearest = null;
    let bestD = Infinity;
    for (const c of candidates) {
      const d = Math.hypot(start.x - c.x, start.z - c.z);
      if (d < bestD) (bestD = d), (nearest = c);
    }
    if (nearest) {
      const path = straightPathfinding(
        { x: start.x, y: 0, z: start.z },
        { x: nearest.x, y: 0, z: nearest.z },
        obstacles
      );
      if (path.length >= 2)
        best = { path, target: nearest, length: pathLength(path) };
    }
  }
  return best;
};

// ---------- Config helpers ----------
const getFloorEndCandidates = (floorData) => {
  const list =
    floorData?.endPoints || floorData?.EndPoints || floorData?.endpoints || [];
  return (Array.isArray(list) ? list : []).filter(
    (p) => p && typeof p.x === "number" && typeof p.z === "number"
  );
};

const getNavClearance = (floorData) => {
  // priorita: floor.nav.clearance -> CONFIG_DATA.navigation.clearance -> DEFAULT_CLEARANCE
  const floorNav = floorData?.nav || floorData?.navigation;
  if (floorNav && typeof floorNav.clearance === "number")
    return floorNav.clearance;
  const globalNav = CONFIG_DATA?.navigation;
  if (globalNav && typeof globalNav.clearance === "number")
    return globalNav.clearance;
  return DEFAULT_CLEARANCE;
};

// ---------- Component ----------
const EvacuationPath = ({ scene, floorId, startPoint, enabled }) => {
  useEffect(() => {
    let arrowParent = null;
    let endpointMeshes = [];

    try {
      if (
        !scene ||
        !enabled ||
        !startPoint ||
        floorId === undefined ||
        floorId === null
      )
        return;

      const disposed =
        typeof scene.isDisposed === "function" ? scene.isDisposed() : false;
      if (disposed) return;

      const floorData = CONFIG_DATA.floors.find((f) => f.id === floorId);
      if (!floorData) return;

      // yLevel pro toto patro
      let yLevel = 0;
      for (let i = 0; i < CONFIG_DATA.floors.length; i++) {
        if (CONFIG_DATA.floors[i].id === floorId) break;
        const isFirst = CONFIG_DATA.floors[i].id === 0;
        const wallHeight = isFirst
          ? CONFIG_DATA.visualization.wall_height_1NP
          : CONFIG_DATA.visualization.wall_height;
        yLevel +=
          wallHeight +
          CONFIG_DATA.visualization.floor_thickness +
          CONFIG_DATA.visualization.floor_spacing;
      }

      // Per-floor clearance
      const navClearance = getNavClearance(floorData);

      // Překážky
      const wallRects = collectObstacleRects(
        floorData,
        navClearance,
        PASSABLE_UNDER_Y
      );
      const holeRects = collectHoleRects(floorData, navClearance);
      const glassRects = collectPinkGlassRects(scene, yLevel, navClearance);

      // NOVÉ: curved/circular stěny a railing podle názvů meshů
      const curvedRects = collectNamedMeshRects(scene, yLevel, navClearance, [
        "_curved_",
        "curved",
        "_circular_",
        "circular",
      ]);
      const railingRects = collectNamedMeshRects(scene, yLevel, navClearance, [
        "_railing_",
        "railing",
      ]);

      const obstacles = [
        ...wallRects,
        ...holeRects,
        ...glassRects,
        ...curvedRects,
        ...railingRects,
      ];

      // Kandidáti B z CONFIG_DATA
      const candidates = getFloorEndCandidates(floorData);
      if (!candidates.length) return;

      const { path, target } = bestPathToCandidates(
        { x: startPoint.x, z: startPoint.z },
        candidates,
        obstacles
      );

      if (path.length >= 2) {
        const endLabelText = target?.id ? String(target.id) : "B";

        endpointMeshes =
          visualizeEndpoints(
            scene,
            { x: startPoint.x, z: startPoint.z },
            path[path.length - 1],
            yLevel,
            endLabelText
          ) || [];

        arrowParent = visualizeArrowPath(
          scene,
          path,
          yLevel,
          ARROW_SPACING,
          ARROW_START_OFFSET
        );
      }
    } catch (e) {
      console.error("[EvacFromRoom] Error:", e);
    }

    return () => {
      try {
        if (arrowParent && !arrowParent.isDisposed()) arrowParent.dispose();
      } catch {}
      try {
        for (const m of endpointMeshes) if (m && !m.isDisposed()) m.dispose();
      } catch {}
    };
  }, [scene, floorId, enabled, startPoint?.x, startPoint?.z]);

  return null;
};

export default EvacuationPath;
