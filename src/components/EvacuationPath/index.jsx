import * as BABYLON from "babylonjs";
import { CONFIG_DATA } from "../BuildingLayoutConfig";
import React, { useEffect } from "react";
const DEFAULT_CLEARANCE = 0.5;
let SAMPLE_STEP = 0.08;
const PASSABLE_UNDER_Y = 2.0;
const ARROW_SPACING = 1.2;
const ARROW_SHAFT_LEN = 0.55;
const ARROW_HEAD_LEN = 0.28;
const ARROW_SHAFT_THICK = 0.1;
const ARROW_HEAD_DIAM = 0.3;
const ARROW_START_OFFSET = 0.3;
const DEFAULT_WALL_THICKNESS = 0.2;
const BASE_GRAPH_MARGIN = 18;
// strip viz defaults
const PATH_STRIP_WIDTH = 0.75;
const PATH_STRIP_THICKNESS = 0.04;
const PATH_STRIP_Y_OFFSET = 0.08; // nad úrovní patra (yLevel + offset)
const RIBBON_SAMPLING_STEP = 0.15; // vzdálenost mezi vzorky pro hladký sampling
const PATCH_EXTRA_LEN = 0.2; // přidaná délka patchi ke šířce šipky (pro lepší vizuál)

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
const rectIntersectsBBox = (r, bbox) =>
  !(
    r.maxX < bbox.minX ||
    r.minX > bbox.maxX ||
    r.maxZ < bbox.minZ ||
    r.minZ > bbox.maxZ
  );
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
      rects.push({
        minX: Math.min(x1, x2) - clearance,
        maxX: Math.max(x1, x2) + clearance,
        minZ: z1 - half,
        maxZ: z1 + half,
      });
    } else if (Math.abs(x1 - x2) < eps) {
      rects.push({
        minX: x1 - half,
        maxX: x1 + half,
        minZ: Math.min(z1, z2) - clearance,
        maxZ: Math.max(z1, z2) + clearance,
      });
    } else {
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
const buildVisibilityNodes_multi = (start, candidates, obstacleRects) => {
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
  for (let i = 0; i < candidates.length; i++) {
    const c = candidates[i];
    push(c, `cand_${i}`);
  }
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
  const nodes = buildVisibilityNodes_multi(s, [e], obstacleRects);
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
// ---------- Scene cache & base graph builder ----------
const ensureSceneCache = (scene) => {
  if (!scene.__evacCache) {
    scene.__evacCache = {
      obstacleByFloor: new Map(),
      meshRectsKey: null,
      pinkGlassRects: null,
      namedMeshRects: null,
      arrowTemplate: null,
      labelCache: new Map(),
      arrowInstanceCounter: 0,
      baseVG: null,
      pathStripMat: null,
    };
  }
  return scene.__evacCache;
};
const getOrBuildBaseVisibilityGraphForFloor = (
  scene,
  floorId,
  obstacles,
  candidates,
  clearance,
  yLevel,
  extraPoints = []
) => {
  const cache = ensureSceneCache(scene);
  const bbox = {
    minX: Infinity,
    maxX: -Infinity,
    minZ: Infinity,
    maxZ: -Infinity,
  };
  for (const c of candidates.concat(extraPoints || [])) {
    bbox.minX = Math.min(bbox.minX, c.x);
    bbox.maxX = Math.max(bbox.maxX, c.x);
    bbox.minZ = Math.min(bbox.minZ, c.z);
    bbox.maxZ = Math.max(bbox.maxZ, c.z);
  }
  if (bbox.minX === Infinity) {
    bbox.minX = bbox.minZ = -BASE_GRAPH_MARGIN;
    bbox.maxX = bbox.maxZ = BASE_GRAPH_MARGIN;
  }
  bbox.minX -= BASE_GRAPH_MARGIN;
  bbox.maxX += BASE_GRAPH_MARGIN;
  bbox.minZ -= BASE_GRAPH_MARGIN;
  bbox.maxZ += BASE_GRAPH_MARGIN;
  const regionKey = `${Math.floor(bbox.minX / BASE_GRAPH_MARGIN)}_${Math.floor(
    bbox.minZ / BASE_GRAPH_MARGIN
  )}_${Math.floor(bbox.maxX / BASE_GRAPH_MARGIN)}_${Math.floor(
    bbox.maxZ / BASE_GRAPH_MARGIN
  )}`;
  const key = `baseVG_${floorId}_${candidates.length}_${clearance}_${yLevel}_${regionKey}`;
  if (cache.baseVG && cache.baseVG.key === key) return cache.baseVG.value;
  const nodes = [];
  const seen = new Set();
  const push = (pt, label) => {
    const id = `${pt.x.toFixed(4)}_${pt.z.toFixed(4)}_${label || ""}`;
    if (!seen.has(id)) {
      seen.add(id);
      nodes.push(new VGNode({ x: pt.x, y: 0, z: pt.z }, id));
    }
  };
  for (let i = 0; i < candidates.length; i++) push(candidates[i], `cand_${i}`);
  for (const r of obstacles) {
    if (!rectIntersectsBBox(r, bbox)) continue;
    push({ x: r.minX, z: r.minZ }, "corner");
    push({ x: r.maxX, z: r.minZ }, "corner");
    push({ x: r.maxX, z: r.maxZ }, "corner");
    push({ x: r.minX, z: r.maxZ }, "corner");
  }
  if (nodes.length === candidates.length) {
    push({ x: bbox.minX, z: bbox.minZ }, "bbox");
    push({ x: bbox.maxX, z: bbox.minZ }, "bbox");
    push({ x: bbox.maxX, z: bbox.maxZ }, "bbox");
    push({ x: bbox.minX, z: bbox.maxZ }, "bbox");
  }
  const idToNode = buildVisibilityGraph(nodes, obstacles);
  const candidateNodeIds = new Set();
  const mapNodeIdToCandidateIdx = new Map();
  for (let i = 0; i < candidates.length; i++) {
    const c = candidates[i];
    const found = nodes.find(
      (n) => n.position.x === c.x && n.position.z === c.z
    );
    if (found) {
      candidateNodeIds.add(found.id);
      mapNodeIdToCandidateIdx.set(found.id, i);
    }
  }
  const value = { nodes, idToNode, candidateNodeIds, mapNodeIdToCandidateIdx };
  cache.baseVG = { key, value };
  return value;
};
// Dijkstra ...
const dijkstraToAnyTarget = (nodes, idToNode, startId, targetIds) => {
  const dist = new Map(nodes.map((n) => [n.id, Infinity]));
  const prev = new Map();
  dist.set(startId, 0);
  const visited = new Set();
  const pq = new Set([startId]);
  while (pq.size) {
    let cur = null;
    let best = Infinity;
    for (const id of pq) {
      const v = dist.get(id) ?? Infinity;
      if (v < best) {
        best = v;
        cur = id;
      }
    }
    if (cur === null) break;
    pq.delete(cur);
    if (targetIds.has(cur)) {
      const path = [];
      for (let u = cur; u; u = prev.get(u)) {
        const node = idToNode.get(u);
        path.push(node.position);
      }
      return path.reverse();
    }
    visited.add(cur);
    const node = idToNode.get(cur);
    for (const nb of node.neighbors) {
      if (visited.has(nb.id)) continue;
      const alt = (dist.get(cur) ?? Infinity) + nb.cost;
      if (alt < (dist.get(nb.id) ?? Infinity)) {
        dist.set(nb.id, alt);
        prev.set(nb.id, cur);
        pq.add(nb.id);
      }
    }
  }
  return [];
};
// ---------- Best-of-candidates (optimized multi-target) ----------
const getFloorEndCandidates = (floorData) => {
  const list =
    floorData?.endPoints || floorData?.EndPoints || floorData?.endpoints || [];
  return (Array.isArray(list) ? list : []).filter(
    (p) => p && typeof p.x === "number" && typeof p.z === "number"
  );
};
const getNavClearance = (floorData) => {
  const floorNav = floorData?.nav || floorData?.navigation;
  if (floorNav && typeof floorNav.clearance === "number")
    return floorNav.clearance;
  const globalNav = CONFIG_DATA?.navigation;
  if (globalNav && typeof globalNav.clearance === "number")
    return globalNav.clearance;
  return DEFAULT_CLEARANCE;
};
const getCachedObstacleRectsForFloor = (
  scene,
  floorData,
  clearance,
  yLevel
) => {
  const cache = ensureSceneCache(scene);
  const key = `${floorData?.id ?? "nofloor"}_${clearance}`;
  if (cache.obstacleByFloor.has(key)) return cache.obstacleByFloor.get(key);
  const wallRects = collectObstacleRects(
    floorData,
    clearance,
    PASSABLE_UNDER_Y
  );
  const holeRects = collectHoleRects(floorData, clearance);
  const meshKey = `${scene.meshes.length}_${yLevel}_${clearance}`;
  let pinkRects = cache.pinkGlassRects;
  let namedRects = cache.namedMeshRects;
  if (cache.meshRectsKey !== meshKey) {
    pinkRects = collectPinkGlassRects(scene, yLevel, clearance);
    namedRects = [
      ...collectNamedMeshRects(scene, yLevel, clearance, [
        "_curved_",
        "curved",
        "_circular_",
        "circular",
      ]),
      ...collectNamedMeshRects(scene, yLevel, clearance, [
        "_railing_",
        "railing",
      ]),
    ];
    cache.meshRectsKey = meshKey;
    cache.pinkGlassRects = pinkRects;
    cache.namedMeshRects = namedRects;
  }
  const all = [
    ...wallRects,
    ...holeRects,
    ...(pinkRects || []),
    ...(namedRects || []),
  ];
  cache.obstacleByFloor.set(key, all);
  return all;
};
const bestPathToCandidates = (
  start,
  candidates,
  obstacles,
  scene,
  floorId,
  clearance,
  yLevel
) => {
  const validCands = (Array.isArray(candidates) ? candidates : []).filter(
    (p) => p && typeof p.x === "number" && typeof p.z === "number"
  );
  if (!validCands.length) return { path: [], target: null, length: Infinity };
  const s = nudgeOutOfRects(start, obstacles);
  const nudgedCands = validCands.map((c) => nudgeOutOfRects(c, obstacles));
  let bestDirect = null;
  for (let i = 0; i < nudgedCands.length; i++) {
    const c = nudgedCands[i];
    if (lineOfSight(s, c, obstacles)) {
      const L = getDistance(s, c);
      if (!bestDirect || L < bestDirect.length)
        bestDirect = { path: [s, c], target: validCands[i], length: L };
    }
  }
  if (bestDirect) return bestDirect;
  let base = null;
  try {
    if (scene && typeof floorId !== "undefined" && floorId !== null) {
      base = getOrBuildBaseVisibilityGraphForFloor(
        scene,
        floorId,
        obstacles,
        nudgedCands,
        clearance,
        yLevel,
        [s]
      );
    }
  } catch (e) {
    base = null;
  }
  if (!base) {
    const nodes = buildVisibilityNodes_multi(s, nudgedCands, obstacles);
    const idToNode = buildVisibilityGraph(nodes, obstacles);
    const startNode = nodes.find(
      (n) => n.position.x === s.x && n.position.z === s.z
    );
    if (!startNode) return { path: [], target: null, length: Infinity };
    const candidateNodeIds = new Set();
    for (let i = 0; i < nudgedCands.length; i++) {
      const c = nudgedCands[i];
      const n = nodes.find(
        (nn) => nn.position.x === c.x && nn.position.z === c.z
      );
      if (n) candidateNodeIds.add(n.id);
    }
    let raw = dijkstraToAnyTarget(
      nodes,
      idToNode,
      startNode.id,
      candidateNodeIds
    );
    if (!raw.length) return { path: [], target: null, length: Infinity };
    raw = smoothPath(raw, obstacles);
    if (raw.length >= 1) {
      raw[0] = s;
      const last = raw[raw.length - 1];
      const foundIdx = nudgedCands.findIndex(
        (c) => c.x === last.x && c.z === last.z
      );
      const target = foundIdx >= 0 ? validCands[foundIdx] : validCands[0];
      return { path: raw, target, length: pathLength(raw) };
    }
    return { path: [], target: null, length: Infinity };
  }
  const nodesCopy = base.nodes.slice();
  const idToNodeCopy = new Map(base.idToNode);
  const startId = `start_${s.x.toFixed(4)}_${s.z.toFixed(4)}`;
  const startNode = new VGNode({ x: s.x, y: 0, z: s.z }, startId);
  startNode.neighbors = [];
  for (const n of nodesCopy) {
    if (lineOfSight(startNode.position, n.position, obstacles)) {
      const d = getDistance(startNode.position, n.position);
      startNode.neighbors.push({ id: n.id, cost: d });
    }
  }
  if (startNode.neighbors.length === 0) {
    const nodes = buildVisibilityNodes_multi(s, nudgedCands, obstacles);
    const idToNode = buildVisibilityGraph(nodes, obstacles);
    const startNode2 = nodes.find(
      (n) => n.position.x === s.x && n.position.z === s.z
    );
    if (!startNode2) return { path: [], target: null, length: Infinity };
    const candidateNodeIds = new Set();
    for (let i = 0; i < nudgedCands.length; i++) {
      const c = nudgedCands[i];
      const n = nodes.find(
        (nn) => nn.position.x === c.x && nn.position.z === c.z
      );
      if (n) candidateNodeIds.add(n.id);
    }
    let raw = dijkstraToAnyTarget(
      nodes,
      idToNode,
      startNode2.id,
      candidateNodeIds
    );
    if (!raw.length) return { path: [], target: null, length: Infinity };
    raw = smoothPath(raw, obstacles);
    if (raw.length >= 1) {
      raw[0] = s;
      const last = raw[raw.length - 1];
      const foundIdx = nudgedCands.findIndex(
        (c) => c.x === last.x && c.z === last.z
      );
      const target = foundIdx >= 0 ? validCands[foundIdx] : validCands[0];
      return { path: raw, target, length: pathLength(raw) };
    }
    return { path: [], target: null, length: Infinity };
  }
  nodesCopy.push(startNode);
  idToNodeCopy.set(startId, startNode);
  const candidateNodeIds = new Set(base.candidateNodeIds);
  if (candidateNodeIds.size === 0)
    return { path: [], target: null, length: Infinity };
  const raw = dijkstraToAnyTarget(
    nodesCopy,
    idToNodeCopy,
    startId,
    candidateNodeIds
  );
  if (!raw || !raw.length) return { path: [], target: null, length: Infinity };
  const smoothed = smoothPath(raw, obstacles);
  if (smoothed.length >= 1) {
    smoothed[0] = s;
    const last = smoothed[smoothed.length - 1];
    const foundIdx = nudgedCands.findIndex(
      (c) => c.x === last.x && c.z === last.z
    );
    const target = foundIdx >= 0 ? validCands[foundIdx] : validCands[0];
    return { path: smoothed, target, length: pathLength(smoothed) };
  }
  return { path: [], target: null, length: Infinity };
};
// ---------- Arrow template caching ----------
const createArrowTemplate = (scene) => {
  if (!scene) return null;
  const cache = ensureSceneCache(scene);
  if (cache.arrowTemplate && !cache.arrowTemplate.isDisposed())
    return cache.arrowTemplate;
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
  // šipky červené
  mat.diffuseColor = new BABYLON.Color3(1, 0, 0);
  mat.emissiveColor = mat.diffuseColor;
  mat.specularColor = new BABYLON.Color3(0, 0, 0);
  arrow.material = mat;
  arrow.setEnabled(false);
  cache.arrowTemplate = arrow;
  return arrow;
};
// ---------- Helper: sample path densely ----------
const densifyPath = (path, step = RIBBON_SAMPLING_STEP) => {
  if (!path || path.length < 2) return path ? [...path] : [];
  const out = [];
  for (let i = 0; i < path.length - 1; i++) {
    const a = path[i];
    const b = path[i + 1];
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const segLen = Math.sqrt(dx * dx + dz * dz);
    if (segLen < 1e-6) continue;
    const steps = Math.max(1, Math.ceil(segLen / step));
    for (let s = 0; s < steps; s++) {
      const t = s / steps;
      out.push({ x: a.x + dx * t, z: a.z + dz * t });
    }
  }
  // push last
  out.push({ x: path[path.length - 1].x, z: path[path.length - 1].z });
  return out;
};
// ---------- Visualize arrow path (uses cached template) ----------
// Vytváří žluté patchy pouze pod šipkami a šipky jsou nad nimi (embedded look).
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
  const cache = ensureSceneCache(scene);
  // ensure path strip material cached
  if (!cache.pathStripMat) {
    const m = new BABYLON.StandardMaterial("path_strip_mat", scene);
    m.diffuseColor = new BABYLON.Color3(1, 1, 0); // yellow
    m.emissiveColor = new BABYLON.Color3(1, 1, 0);
    m.disableLighting = true;
    m.backFaceCulling = false;
    cache.pathStripMat = m;
  }
  const stripMat = cache.pathStripMat;
  // arrow Y (stále nad páskem, pro lepší viditelnost)
  const stripY = yLevel + PATH_STRIP_Y_OFFSET;
  const arrowY = stripY + PATH_STRIP_THICKNESS / 2 + 0.02; // malé odsazení nad páskem

  // densify centerline for stable sampling
  const center = densifyPath(path, RIBBON_SAMPLING_STEP);
  if (center.length < 2) return parent;

  // Prepare to create small patch meshes under each arrow and then merge
  const patches = [];
  let remaining = Math.max(0, startOffset);
  for (let i = 0; i < center.length - 1; i++) {
    const a = center[i];
    const b = center[i + 1];
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const segLen = Math.sqrt(dx * dx + dz * dz);
    if (segLen < 1e-6) {
      remaining = Math.max(0, remaining - segLen);
      continue;
    }
    const ux = dx / segLen;
    const uz = dz / segLen;
    const yaw = Math.atan2(ux, uz);
    let d = remaining;
    while (d <= segLen) {
      const px = a.x + ux * d;
      const pz = a.z + uz * d;

      // create small patch (box) under the arrow: width x patchLen x thickness
      const patchLen = Math.max(ARROW_SHAFT_LEN, spacing) + PATCH_EXTRA_LEN;
      try {
        const patch = BABYLON.MeshBuilder.CreateBox(
          `path_patch_${i}_${d}_${Date.now()}`,
          {
            width: PATH_STRIP_WIDTH,
            height: PATH_STRIP_THICKNESS,
            depth: patchLen,
          },
          scene
        );
        patch.rotationQuaternion = BABYLON.Quaternion.FromEulerAngles(
          0,
          yaw,
          0
        );
        patch.position = new BABYLON.Vector3(px, stripY, pz);
        patch.material = stripMat;
        patches.push(patch);
      } catch (e) {
        // ignore patch creation failure for this instance
      }

      // create arrow instance
      const instName = `arrow_inst_${cache.arrowInstanceCounter++}_${Date.now()}`;
      let inst = null;
      try {
        inst = template.createInstance(instName);
      } catch (e) {
        try {
          inst = template.clone(instName, parent, true);
        } catch (ee) {
          inst = null;
        }
      }
      if (inst) {
        inst.parent = parent;
        inst.position = new BABYLON.Vector3(px, arrowY, pz);
        inst.rotationQuaternion = BABYLON.Quaternion.FromEulerAngles(0, yaw, 0);
      }

      d += spacing;
    }
    remaining = d - segLen;
  }

  // sloučení všech patch do jednoho mesh (pokud existují)
  let mergedStrip = null;
  if (patches.length === 1) {
    mergedStrip = patches[0];
    mergedStrip.parent = parent;
    mergedStrip.material = stripMat;
  } else if (patches.length > 1) {
    try {
      // MergeMeshes(disposeSource=true) => vytvoří nový mesh a zruší zdrojové patche
      mergedStrip = BABYLON.Mesh.MergeMeshes(
        patches,
        true,
        true,
        undefined,
        false,
        true
      );
      if (mergedStrip) {
        mergedStrip.name = `merged_path_strip_${Date.now()}`;
        mergedStrip.parent = parent;
        mergedStrip.material = stripMat;
      }
    } catch (e) {
      // Pokud merge selže, parentujeme jednotlivé patche
      for (const p of patches) {
        try {
          p.parent = parent;
        } catch {}
      }
    }
  }

  return parent;
};
// ---------- Endpoints viz and label caching ----------
const makeLabel = (scene, text, pos, y) => {
  const cache = ensureSceneCache(scene);
  const key = `label_${text}`;
  let cached = cache.labelCache.get(key);
  if (!cached) {
    const dt = new BABYLON.DynamicTexture(
      key,
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
    const mat = new BABYLON.StandardMaterial(`label_mat_${text}`, scene);
    mat.diffuseTexture = dt;
    mat.opacityTexture = dt;
    mat.emissiveTexture = dt;
    mat.disableLighting = true;
    mat.backFaceCulling = false;
    cached = { mat, dt };
    cache.labelCache.set(key, cached);
  }
  const plane = BABYLON.MeshBuilder.CreatePlane(
    `label_${text}_${Date.now()}`,
    { size: 0.6 },
    scene
  );
  plane.position = new BABYLON.Vector3(pos.x, y, pos.z);
  plane.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
  plane.material = cached.mat;
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
      const navClearance = getNavClearance(floorData);
      const obstacles = getCachedObstacleRectsForFloor(
        scene,
        floorData,
        navClearance,
        yLevel
      );
      const candidates = getFloorEndCandidates(floorData);
      if (!candidates.length) return;
      const { path, target } = bestPathToCandidates(
        { x: startPoint.x, z: startPoint.z },
        candidates,
        obstacles,
        scene,
        floorId,
        navClearance,
        yLevel
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
