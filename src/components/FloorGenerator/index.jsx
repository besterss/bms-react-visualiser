import * as BABYLON from "babylonjs";
import { setupSceneLighting } from "../LightingUtils";
export class FloorGenerator {
  constructor(scene, engine, configData) {
    this.scene = scene;
    this.engine = engine;
    this.config = configData;
    this.allFloorMeshes = [];
    this.floorData = [];
    this.materials = {};
    // initialize centralized materials (creates this.materials.glass, pinkGlass, ...)
    this.initializeMaterials();
    // additional materials and defaults
    this.materials.grass = this.initializeGrassMaterial();
    this.materials.water = this.initializeWaterMaterial();
    // create a dark variant specifically for railings (used only in dark mode)
    this.materials.railingDark = this.initializeRailingMaterial();
    // default "railing" reference: in normal mode we want railings to be the same as glass
    this.materials.railing = this.materials.glass;
    // Track created railing meshes so we can swap their material when toggling dark mode
    this._railingMeshes = [];
    // Store original glass/pinkGlass props so we can revert later
    this._originalGlassProps = {};
    if (this.materials.glass) {
      this._originalGlassProps.glass = {
        diffuseColor: this.materials.glass.diffuseColor.clone(),
        alpha: this.materials.glass.alpha,
        transparencyMode: this.materials.glass.transparencyMode,
        specularColor: this.materials.glass.specularColor.clone(),
        backFaceCulling: this.materials.glass.backFaceCulling,
        needDepthPrePass: this.materials.glass.needDepthPrePass,
        specularPower: this.materials.glass.specularPower,
      };
    }
    if (this.materials.pinkGlass) {
      this._originalGlassProps.pinkGlass = {
        diffuseColor: this.materials.pinkGlass.diffuseColor.clone(),
        alpha: this.materials.pinkGlass.alpha,
        transparencyMode: this.materials.pinkGlass.transparencyMode,
        specularColor: this.materials.pinkGlass.specularColor.clone(),
        backFaceCulling: this.materials.pinkGlass.backFaceCulling,
        needDepthPrePass: this.materials.pinkGlass.needDepthPrePass,
        specularPower: this.materials.pinkGlass.specularPower,
      };
    }
    this.darkMode = false;
    const { shadowGenerator } = setupSceneLighting(this.scene);
    this.shadowGenerator = shadowGenerator;
    // ensure furniture material exists
    this.initializeFurnitureMaterial();
  }
  // ----------------- MATERIALS -----------------
  initializeGrassMaterial() {
    const grassMaterial = new BABYLON.StandardMaterial("grassMat", this.scene);
    grassMaterial.diffuseColor = new BABYLON.Color3(0.0, 0.55, 0.0);
    grassMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    grassMaterial.alpha = 0.7;
    grassMaterial.backFaceCulling = false;
    return grassMaterial;
  }
  initializeRailingMaterial() {
    const railingMaterial = new BABYLON.StandardMaterial(
      "railingMatDark",
      this.scene
    );
    railingMaterial.diffuseColor = new BABYLON.Color3(
      203 / 255,
      211 / 255,
      225 / 255
    );
    railingMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    railingMaterial.alpha = 0.5;
    railingMaterial.backFaceCulling = false;
    return railingMaterial;
  }
  initializeWaterMaterial() {
    const waterMaterial = new BABYLON.StandardMaterial("waterMat", this.scene);
    waterMaterial.diffuseColor = new BABYLON.Color3(0.0, 0.3, 1.0);
    waterMaterial.specularColor = new BABYLON.Color3(0.8, 0.8, 0.8);
    waterMaterial.backFaceCulling = false;
    return waterMaterial;
  }
  initializeMaterials() {
    this.materials.wallOpaque = new BABYLON.StandardMaterial(
      "wallOpaqueMat",
      this.scene
    );
    this.materials.wallOpaque.diffuseColor = new BABYLON.Color3(1, 1, 1);
    this.materials.wallOpaque.specularColor = new BABYLON.Color3(0, 0, 0);
    this.materials.floorDefault = new BABYLON.StandardMaterial(
      "floorDefaultMat",
      this.scene
    );
    this.materials.floorDefault.diffuseColor = new BABYLON.Color3(
      0.73,
      0.73,
      0.73
    );
    this.materials.floorDefault.specularColor = new BABYLON.Color3(0, 0, 0);
    this.materials.floorDefault.backFaceCulling = false;
    this.materials.floorDefault.alpha = 1;
    this.materials.aboveGroundTransparent = new BABYLON.StandardMaterial(
      "aboveGroundTransparentMat",
      this.scene
    );
    this.materials.aboveGroundTransparent.diffuseColor = new BABYLON.Color3(
      0.3,
      0.3,
      0.3
    );
    this.materials.aboveGroundTransparent.backFaceCulling = false;
    this.materials.aboveGroundTransparent.alpha = 0.7;
    this.materials.aboveGroundTransparent.transparencyMode =
      BABYLON.Material.MATERIAL_ALPHABLEND;
    this.materials.aboveGroundTransparent.needDepthPrePass = true;
    this.materials.aboveGroundTransparent.specularColor = new BABYLON.Color3(
      0,
      0,
      0
    );
    this.materials.undergroundTransparent = new BABYLON.StandardMaterial(
      "undergroundTransparentMat",
      this.scene
    );
    this.materials.undergroundTransparent.diffuseColor = new BABYLON.Color3(
      0.6,
      0.8,
      1
    );
    this.materials.undergroundTransparent.backFaceCulling = false;
    this.materials.undergroundTransparent.alpha = 0.7;
    this.materials.undergroundTransparent.transparencyMode =
      BABYLON.Material.MATERIAL_ALPHABLEND;
    this.materials.undergroundTransparent.needDepthPrePass = true;
    this.materials.undergroundTransparent.specularColor = new BABYLON.Color3(
      0,
      0,
      0
    );
    const grass1NP = new BABYLON.StandardMaterial("grass1NP", this.scene);
    grass1NP.diffuseColor = new BABYLON.Color3(0.44, 0.44, 0.44);
    grass1NP.specularColor = new BABYLON.Color3(0, 0, 0);
    grass1NP.alpha = 0.95;
    grass1NP.backFaceCulling = false;
    grass1NP.transparencyMode = BABYLON.Material.MATERIAL_ALPHABLEND;
    grass1NP.needDepthPrePass = true;
    this.materials.grass1NP = grass1NP;
    this.materials.ground = new BABYLON.StandardMaterial(
      "groundMat",
      this.scene
    );
    this.materials.ground.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    this.materials.ground.backFaceCulling = false;
    this.materials.ground.alpha = 1;
    this.materials.ground.transparencyMode =
      BABYLON.Material.MATERIAL_ALPHABLEND;
    this.materials.ground.needDepthPrePass = true;
    this.materials.ground.specularColor = new BABYLON.Color3(0, 0, 0);
    this.materials.glass = new BABYLON.StandardMaterial("glassMat", this.scene);
    this.materials.glass.diffuseColor = new BABYLON.Color3(
      203 / 255,
      211 / 255,
      225 / 255
    );
    this.materials.glass.alpha = 0.5;
    this.materials.glass.backFaceCulling = true;
    this.materials.glass.specularColor = new BABYLON.Color3(0, 0, 0);
    this.materials.glass.transparencyMode =
      BABYLON.Material.MATERIAL_ALPHABLEND;
    this.materials.glass.needDepthPrePass = true;
    const pinkGlass = new BABYLON.StandardMaterial("pinkGlass", this.scene);
    pinkGlass.diffuseColor = new BABYLON.Color3(1, 0.75, 0.8);
    pinkGlass.specularColor = new BABYLON.Color3(0, 0, 0);
    pinkGlass.alpha = 0.5;
    pinkGlass.transparencyMode = BABYLON.Material.MATERIAL_ALPHABLEND;
    pinkGlass.needDepthPrePass = true;
    this.materials.pinkGlass = pinkGlass;
    this.materials.wallOpaque = new BABYLON.StandardMaterial(
      "wallOpaqueMat",
      this.scene
    );
    this.materials.wallOpaque.specularColor = new BABYLON.Color3(0, 0, 0);
    this.materials.wallOpaque.diffuseColor = new BABYLON.Color3(1, 1, 1);
    // also create furniture material here
    this.initializeFurnitureMaterial();
  }
  initializeFurnitureMaterial() {
    if (!this.materials.furniture) {
      const mat = new BABYLON.StandardMaterial("furnitureMat", this.scene);
      // restored to original appearance as requested
      mat.diffuseColor = new BABYLON.Color3(1, 1, 1);
      mat.specularColor = new BABYLON.Color3(0, 0, 0);
      mat.backFaceCulling = true;
      this.materials.furniture = mat;
    }
  }
  // ----------------- DARK MODE -----------------
  setDarkMode(enabled) {
    this.darkMode = !!enabled;
    const lightGray = new BABYLON.Color3(0.35, 0.36, 0.37);
    // --- GLASS ---
    if (this.materials && this.materials.glass) {
      if (this.darkMode) {
        this.materials.glass.diffuseColor = lightGray.clone();
        this.materials.glass.alpha = 0.6; // semi-transparent
        this.materials.glass.specularColor = new BABYLON.Color3(0, 0, 0);
        this.materials.glass.specularPower = 4; // nízký lesk
        this.materials.glass.backFaceCulling = false; // vidět i zevnitř
        this.materials.glass.transparencyMode =
          BABYLON.Material.MATERIAL_ALPHABLEND;
        this.materials.glass.needDepthPrePass = true;
      } else {
        const orig = this._originalGlassProps && this._originalGlassProps.glass;
        if (orig) {
          this.materials.glass.diffuseColor = orig.diffuseColor.clone();
          this.materials.glass.alpha = orig.alpha;
          this.materials.glass.specularColor = orig.specularColor.clone();
          this.materials.glass.specularPower = orig.specularPower;
          this.materials.glass.backFaceCulling = orig.backFaceCulling;
          this.materials.glass.transparencyMode = orig.transparencyMode;
          this.materials.glass.needDepthPrePass = orig.needDepthPrePass;
        }
      }
    }
    // --- RAILING ---
    if (this.darkMode) {
      if (!this.materials.railingDark) {
        this.materials.railingDark = this.initializeRailingMaterial();
      }
      this.materials.railingDark.diffuseColor = lightGray.clone();
      this.materials.railingDark.alpha = 0.55;
      this.materials.railingDark.specularColor = new BABYLON.Color3(0, 0, 0);
      this.materials.railingDark.specularPower = 4;
      this.materials.railingDark.backFaceCulling = false;
      this.materials.railingDark.transparencyMode =
        BABYLON.Material.MATERIAL_ALPHABLEND;
      this.materials.railingDark.needDepthPrePass = true;
      this.materials.railing = this.materials.railingDark;
    } else {
      this.materials.railing = this.materials.glass;
    }
    // Update already created railing meshes to use the newly selected material
    if (Array.isArray(this._railingMeshes)) {
      const newMat = this.darkMode
        ? this.materials.railingDark
        : this.materials.glass;
      this._railingMeshes.forEach((m) => {
        try {
          if (m && !m.isDisposed()) {
            m.material = newMat;
          }
        } catch (e) {
          // ignore disposed meshes
        }
      });
    }
    // PINK GLASS restore
    if (
      !this.darkMode &&
      this.materials &&
      this.materials.pinkGlass &&
      this._originalGlassProps &&
      this._originalGlassProps.pinkGlass
    ) {
      const origPink = this._originalGlassProps.pinkGlass;
      this.materials.pinkGlass.diffuseColor = origPink.diffuseColor.clone();
      this.materials.pinkGlass.alpha = origPink.alpha;
      this.materials.pinkGlass.specularColor = origPink.specularColor.clone();
      this.materials.pinkGlass.specularPower = origPink.specularPower;
      this.materials.pinkGlass.backFaceCulling = origPink.backFaceCulling;
      this.materials.pinkGlass.transparencyMode = origPink.transparencyMode;
      this.materials.pinkGlass.needDepthPrePass = origPink.needDepthPrePass;
    }
  }
  // ----------------- UTIL COLOR HELPERS -----------------
  getColorFromTemperature(temp, alpha = 1.0) {
    let r, g, b;
    if (temp <= 0) {
      r = 1.0;
      g = 1.0;
      b = 1.0;
    } else if (temp <= 10) {
      const t = temp / 10.0;
      r = BABYLON.Scalar.Lerp(1.0, 0.0, t);
      g = BABYLON.Scalar.Lerp(1.0, 0.0, t);
      b = BABYLON.Scalar.Lerp(1.0, 1.0, t);
    } else if (temp <= 20) {
      const t = (temp - 10.0) / 10.0;
      r = BABYLON.Scalar.Lerp(0.0, 1.0, t);
      g = BABYLON.Scalar.Lerp(0.0, 1.0, t);
      b = BABYLON.Scalar.Lerp(1.0, 0.0, t);
    } else if (temp <= 30) {
      const t = (temp - 20.0) / 10.0;
      r = BABYLON.Scalar.Lerp(1.0, 1.0, t);
      g = BABYLON.Scalar.Lerp(1.0, 0.5, t);
      b = BABYLON.Scalar.Lerp(0.0, 0.0, t);
    } else if (temp <= 50) {
      const t = (temp - 30.0) / 20.0;
      r = BABYLON.Scalar.Lerp(1.0, 1.0, t);
      g = BABYLON.Scalar.Lerp(0.5, 0.0, t);
      b = BABYLON.Scalar.Lerp(0.0, 0.0, t);
    } else {
      r = 1.0;
      g = 0.0;
      b = 0.0;
    }
    return new BABYLON.Color4(r, g, b, alpha);
  }
  getColorFromWifiSignal(signal, alpha = 1.0) {
    let r, g, b;
    switch (signal) {
      case 0:
        r = 1.0;
        g = 0.0;
        b = 0.0;
        break;
      case 1:
        r = 1.0;
        g = 1.0;
        b = 0.0;
        break;
      case 2:
        r = 0.6;
        g = 1.0;
        b = 0.0;
        break;
      case 3:
        r = 0.0;
        g = 1.0;
        b = 0.0;
        break;
      default:
        r = 1.0;
        g = 1.0;
        b = 1.0;
        break;
    }
    return new BABYLON.Color4(r, g, b, alpha);
  }
  // ----------------- FURNITURE: SIMPLE PRIMITIVES -----------------
  // jednoduchý materiál pro nábytek je vytvořen v initializeFurnitureMaterial()
  // createTable: supports optional single central leg (default: single leg) with visible base slightly raised
  createTable(
    name,
    width = 1.2, // diameter
    depth = 0.8,
    height = 0.75,
    position = { x: 0, y: 0, z: 0 },
    rotationY = 0,
    material,
    singleLeg = true,
    baseDiameter = null
  ) {
    this.initializeFurnitureMaterial();
    material = material || this.materials.furniture;
    const parts = [];
    // top (cylinder) centered at local origin
    const top = BABYLON.MeshBuilder.CreateCylinder(
      `${name}_top`,
      {
        diameter: width,
        height: 0.05,
        tessellation: 48,
      },
      this.scene
    );
    // top sits so that its bottom is at y = height - 0.05
    top.position.set(0, height - 0.05 / 2, 0);
    top.material = material;
    top.isPickable = false;
    parts.push(top);

    if (singleLeg) {
      // central leg + base that is slightly raised to avoid intersecting ground
      const legDiameter = Math.max(0.05, width * 0.09); // robustnější centrální noha

      // small base dimensions
      const baseH = 0.05; // thickness of base
      const baseDia =
        baseDiameter || Math.max(legDiameter * 2.8, width * 0.45, 0.35); // larger so it's visible

      // small vertical raise so base isn't sunk into floor
      const baseRaise = 0.02; // "trošičku nahoru"

      // Compute leg height so its top sits exactly at the bottom of the tabletop
      // tabletop bottom y = height - 0.05
      // base top y = baseH + baseRaise
      // desired leg top y = tabletop bottom y
      // so legHeight = tabletopBottomY - baseTopY
      const tabletopBottomY = height - 0.05;
      let legHeight = tabletopBottomY - (baseH + baseRaise);
      // enforce a minimum leg height
      legHeight = Math.max(0.2, legHeight);

      // If computed legHeight is unexpectedly large (fallback), clamp reasonably
      // (not strictly necessary, but keeps proportions sane)
      legHeight = Math.min(legHeight, Math.max(0.4, height - 0.05));

      // create base using same material as the table (as requested)
      const base = BABYLON.MeshBuilder.CreateCylinder(
        `${name}_base`,
        {
          diameter: baseDia,
          height: baseH,
          tessellation: 32,
        },
        this.scene
      );
      base.material = material; // use same material as table
      base.isPickable = false;
      // place base so its bottom is slightly above local y=0 (raised by baseRaise)
      base.position.set(0, baseH / 2 + baseRaise, 0);
      parts.push(base);

      // leg: placed on top of base
      const leg = BABYLON.MeshBuilder.CreateCylinder(
        `${name}_leg_center`,
        {
          diameter: legDiameter,
          height: legHeight,
          tessellation: 24,
        },
        this.scene
      );
      // leg center should be at base top + legHeight/2
      // base top = base.position.y + baseH/2 = baseH + baseRaise
      leg.position.set(0, baseH + baseRaise + legHeight / 2, 0);
      leg.material = material;
      leg.isPickable = false;
      parts.push(leg);
    } else {
      // four corner legs as fallback
      const legDiameter = Math.max(0.03, width * 0.04);
      // ensure leg top is flush with tabletop bottom
      let legHeight = height - 0.05;
      legHeight = Math.max(0.2, legHeight);
      const legOffset = Math.max(0.01, width / 3 - legDiameter / 2 - 0.02);
      const legPositions = [
        { x: legOffset, z: legOffset },
        { x: -legOffset, z: legOffset },
        { x: legOffset, z: -legOffset },
        { x: -legOffset, z: -legOffset },
      ];
      legPositions.forEach((off, i) => {
        const leg = BABYLON.MeshBuilder.CreateCylinder(
          `${name}_leg${i}`,
          {
            diameterTop: legDiameter,
            diameterBottom: legDiameter,
            height: legHeight,
            tessellation: 12,
          },
          this.scene
        );
        // center at legHeight/2 so top is at legHeight (which equals tabletop bottom)
        leg.position.set(off.x, legHeight / 2, off.z);
        leg.material = material;
        leg.isPickable = false;
        parts.push(leg);
      });
    }

    const merged = BABYLON.Mesh.MergeMeshes(
      parts,
      true,
      true,
      undefined,
      false,
      true
    );
    if (merged) {
      merged.name = name;
      if (rotationY) merged.rotation.y = rotationY;
      merged.position = new BABYLON.Vector3(position.x, position.y, position.z);
      try {
        this.shadowGenerator.addShadowCaster(merged);
      } catch {}
      merged.isPickable = false;
    }
    return merged;
  }
  // createChair: local geometry; forward +Z; position is local relative to root
  createChair(
    name,
    seatWidth = 0.45,
    seatDepth = 0.45,
    seatHeight = 0.45,
    position = { x: 0, y: 0, z: 0 }, // local position
    rotationY = 0,
    material
  ) {
    this.initializeFurnitureMaterial();
    material = material || this.materials.furniture;
    const parts = [];
    const seat = BABYLON.MeshBuilder.CreateBox(
      `${name}_seat`,
      { width: seatWidth, height: 0.04, depth: seatDepth },
      this.scene
    );
    seat.position.set(0, seatHeight, 0);
    seat.material = material;
    seat.isPickable = false;
    parts.push(seat);
    const back = BABYLON.MeshBuilder.CreateBox(
      `${name}_back`,
      { width: seatWidth, height: seatHeight, depth: 0.04 },
      this.scene
    );
    back.position.set(0, seatHeight + seatHeight / 2, -seatDepth / 2 + 0.02);
    back.material = material;
    back.isPickable = false;
    parts.push(back);
    const legW = 0.03;
    const legH = seatHeight;
    const offsets = [
      { x: seatWidth / 2 - legW / 2, z: seatDepth / 2 - legW / 2 },
      { x: -seatWidth / 2 + legW / 2, z: seatDepth / 2 - legW / 2 },
      { x: seatWidth / 2 - legW / 2, z: -seatDepth / 2 + legW / 2 },
      { x: -seatWidth / 2 + legW / 2, z: -seatDepth / 2 + legW / 2 },
    ];
    offsets.forEach((off, i) => {
      const leg = BABYLON.MeshBuilder.CreateBox(
        `${name}_leg${i}`,
        { width: legW, height: legH, depth: legW },
        this.scene
      );
      leg.position.set(off.x, legH / 2, off.z);
      leg.material = material;
      leg.isPickable = false;
      parts.push(leg);
    });
    const merged = BABYLON.Mesh.MergeMeshes(
      parts,
      true,
      true,
      undefined,
      false,
      true
    );
    if (merged) {
      merged.name = name;
      if (rotationY) merged.rotation.y = rotationY;
      merged.position = new BABYLON.Vector3(position.x, position.y, position.z);
      try {
        this.shadowGenerator.addShadowCaster(merged);
      } catch {}
      merged.isPickable = false;
    }
    return merged;
  }
  // createTableWithChairs: now with chairAngleOffset and closer chairs by default
  createTableWithChairs(
    name,
    tableOpts = { width: 1.2, depth: 0.8, height: 0.75 }, // width is diameter
    chairsCount = 4,
    chairOffsetRadius = null,
    position = { x: 0, y: 0, z: 0 }, // world
    rotationY = 0,
    material,
    chairAngleOffset = undefined // optional: rotates all chairs by this offset (radians)
  ) {
    const diameter = tableOpts.width || 1.2;
    const height = tableOpts.height || 0.75;
    // default radius: half diameter + smaller gap (closer chairs)
    const defaultRadius = diameter / 2 + 0.25; // was 0.35 before
    const radius = chairOffsetRadius || defaultRadius;
    // default angle offset: shift so chairs are not at exact clock positions
    const angleOffsetDefault = Math.PI / (chairsCount * 2); // e.g. for 4 chairs -> 45deg offset
    const angleOffset =
      typeof chairAngleOffset === "number"
        ? chairAngleOffset
        : angleOffsetDefault;
    const root = new BABYLON.TransformNode(name, this.scene);
    // create table with default singleLeg = true (visible base slightly raised)
    const tableMesh = this.createTable(
      `${name}_table`,
      diameter,
      diameter,
      height,
      { x: 0, y: 0, z: 0 },
      rotationY,
      material
    );
    if (tableMesh) {
      tableMesh.parent = root;
      tableMesh.rotation.y = rotationY || 0;
      tableMesh.position = new BABYLON.Vector3(0, 0, 0);
    }
    const chairMeshes = [];
    for (let i = 0; i < chairsCount; i++) {
      const ang =
        (i / chairsCount) * Math.PI * 2 + (rotationY || 0) + angleOffset;
      const cxLocal = Math.cos(ang) * radius;
      const czLocal = Math.sin(ang) * radius;
      // yaw so +Z points to center (0,0)
      const yaw = Math.atan2(0 - cxLocal, 0 - czLocal);
      const chair = this.createChair(
        `${name}_chair${i}`,
        0.45,
        0.45,
        0.45,
        { x: cxLocal, y: 0, z: czLocal },
        yaw,
        material
      );
      if (chair) {
        chair.parent = root;
        chairMeshes.push(chair);
      }
    }
    // place root in world at requested yLevel
    root.position = new BABYLON.Vector3(position.x, position.y, position.z);
    try {
      if (tableMesh) this.shadowGenerator.addShadowCaster(tableMesh);
      chairMeshes.forEach((c) => {
        try {
          this.shadowGenerator.addShadowCaster(c);
        } catch {}
      });
    } catch {}
    return root;
  }
  // ----------------- OPTIONAL: model loading (glTF) -----------------
  async loadModelToScene(
    url,
    position = { x: 0, y: 0, z: 0 },
    rotationY = 0,
    scale = 1,
    name = "gltfRoot"
  ) {
    try {
      const result = await BABYLON.SceneLoader.ImportMeshAsync(
        "",
        url,
        "",
        this.scene
      );
      const root = new BABYLON.TransformNode(name, this.scene);
      result.meshes.forEach((m) => {
        if (m !== this.scene && m !== null) {
          m.parent = root;
        }
      });
      root.position = new BABYLON.Vector3(position.x, position.y, position.z);
      root.rotation = new BABYLON.Vector3(0, rotationY, 0);
      root.scaling = new BABYLON.Vector3(scale, scale, scale);
      root.isPickable = false;
      try {
        this.shadowGenerator.addShadowCaster(root);
      } catch {}
      return root;
    } catch (e) {
      console.warn("loadModelToScene error", e);
      return null;
    }
  }
  // ----------------- COMMON CREATION HELPERS -----------------
  createGrassArea(dimensions, yLevel) {
    const grassMesh = BABYLON.MeshBuilder.CreateGround(
      "grassArea",
      { width: dimensions.width, height: dimensions.depth },
      this.scene
    );
    grassMesh.position.y = yLevel;
    grassMesh.material = this.materials.grass;
    return grassMesh;
  }
  applyGrassHolesMask(grassMesh, holes, dimensions, textureSize = 1024) {
    if (!grassMesh || !holes || holes.length === 0) return;
    const width = dimensions.width;
    const depth = dimensions.depth;
    const dt = new BABYLON.DynamicTexture(
      "grassMaskTexture",
      { width: textureSize, height: textureSize },
      this.scene,
      false
    );
    const ctx = dt.getContext();
    ctx.clearRect(0, 0, textureSize, textureSize);
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.fillRect(0, 0, textureSize, textureSize);
    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "rgba(0,0,0,1)";
    holes.forEach((hole) => {
      const uMin = Math.max(
        0,
        Math.min(1, (hole.x - hole.width / 2 + width / 2) / width)
      );
      const uMax = Math.max(
        0,
        Math.min(1, (hole.x + hole.width / 2 + width / 2) / width)
      );
      const vMin = Math.max(
        0,
        Math.min(1, (hole.z - hole.depth / 2 + depth / 2) / depth)
      );
      const vMax = Math.max(
        0,
        Math.min(1, (hole.z + hole.depth / 2 + depth / 2) / depth)
      );
      const x = Math.round(uMin * textureSize);
      const w = Math.round((uMax - uMin) * textureSize);
      const y = Math.round((1 - vMax) * textureSize);
      const h = Math.round((vMax - vMin) * textureSize);
      if (w > 0 && h > 0) {
        ctx.fillRect(x, y, w, h);
      }
    });
    ctx.restore();
    dt.update();
    grassMesh.material.opacityTexture = dt;
    grassMesh.material.transparencyMode = BABYLON.Material.MATERIAL_ALPHABLEND;
    grassMesh.material.needDepthPrePass = true;
  }
  createHoleBox(hole, yLevel) {
    const thickness = this.config.visualization.room_floor_height + 0.02;
    const holeMesh = BABYLON.MeshBuilder.CreateBox(
      `hole_${hole.x}_${hole.z}`,
      { width: hole.width, height: thickness, depth: hole.depth },
      this.scene
    );
    holeMesh.position.set(hole.x, yLevel + thickness / 2, hole.z);
    holeMesh.isPickable = false;
    return holeMesh;
  }
  // ----------------- FLOOR GENERATION -----------------
  generateFloors() {
    this.config.floors.forEach((floorConfig, index) => {
      if (!this.allFloorMeshes[index]) {
        this.allFloorMeshes[index] = [];
      }
      const is1NP = floorConfig.id === 0;
      const wallHeight = is1NP
        ? this.config.visualization.wall_height_1NP
        : this.config.visualization.wall_height;
      let yLevel = 0;
      for (let i = 0; i < index; i++) {
        const isPrevious1NP = this.config.floors[i].id === 0;
        const prevWallHeight = isPrevious1NP
          ? this.config.visualization.wall_height_1NP
          : this.config.visualization.wall_height;
        yLevel +=
          prevWallHeight +
          this.config.visualization.floor_thickness +
          this.config.visualization.floor_spacing;
      }
      const isUnderground = floorConfig.type === "underground";
      const floorResult = this.createFloorFromConfig(
        floorConfig,
        yLevel,
        isUnderground,
        is1NP
      );
      if (floorConfig.layout && floorConfig.layout.trees) {
        floorConfig.layout.trees.forEach((treeConfig) => {
          // treeConfig may contain: position {x,z}, scale, type: "tree" | "bush"
          const scale =
            typeof treeConfig.scale === "number" ? treeConfig.scale : 1;
          const pos = {
            x:
              typeof treeConfig.position?.x === "number"
                ? treeConfig.position.x
                : 0,
            z:
              typeof treeConfig.position?.z === "number"
                ? treeConfig.position.z
                : 0,
          };
          let planted = null;
          if (treeConfig.type === "bush") {
            planted = this.createBushInPot(pos, scale);
          } else {
            planted = this.createTree(pos, scale);
          }
          if (planted) {
            // raise to correct floor yLevel (createTree/createBushInPot place object at ground-level)
            planted.position.y = yLevel + planted.position.y;
            this.allFloorMeshes[index].push(planted);
          }
        });
      }
      floorResult.meshes.forEach((mesh) => {
        if (mesh.name && mesh.name.includes("floor")) {
          try {
            mesh.receiveShadows = true;
          } catch {}
        }
      });
      this.allFloorMeshes[index].push(...floorResult.meshes);
      this.floorData.push({
        floorNumber: floorConfig.id,
        name: floorConfig.name,
        area: floorResult.area,
        type: floorConfig.type,
        isUnderground,
      });
    });
    // Grass on 1NP
    const firstAboveGroundIndex = this.config.floors.findIndex(
      (floorConfig) => floorConfig.id === 0
    );
    if (firstAboveGroundIndex !== -1) {
      const firstAboveGroundLevel =
        firstAboveGroundIndex *
        (this.config.visualization.wall_height +
          this.config.visualization.floor_thickness +
          this.config.visualization.floor_spacing);
      const grassDimensions = { width: 120, depth: 120 };
      const grassMesh = this.createGrassArea(
        grassDimensions,
        firstAboveGroundLevel + 0.01
      );
      const firstAboveGroundFloor = this.config.floors[firstAboveGroundIndex];
      if (
        firstAboveGroundFloor &&
        Array.isArray(firstAboveGroundFloor.holes) &&
        firstAboveGroundFloor.holes.length > 0
      ) {
        this.applyGrassHolesMask(
          grassMesh,
          firstAboveGroundFloor.holes,
          grassDimensions
        );
      }
      this.allFloorMeshes[firstAboveGroundIndex].push(grassMesh);
    }
    return {
      allFloorMeshes: this.allFloorMeshes,
      floorData: this.floorData,
    };
  }
  createFloorFromConfig(floorConfig, yLevel, isUnderground, is1NP) {
    const floorMeshes = [];
    const floorName = `floor_${floorConfig.id}`;
    const layout = floorConfig.layout;
    const wallHeight = is1NP
      ? this.config.visualization.wall_height_1NP
      : this.config.visualization.wall_height;
    const wallThickness = this.config.visualization.wall_thickness;
    const roomFloorHeight = this.config.visualization.room_floor_height;
    if (floorConfig.segments) {
      floorConfig.segments.forEach((segmentConfig) => {
        const { width, depth, position } = segmentConfig;
        const segmentMesh = BABYLON.MeshBuilder.CreateBox(
          `${floorName}_segment`,
          { width: width - 0.1, height: roomFloorHeight, depth: depth - 0.1 },
          this.scene
        );
        segmentMesh.position.x = position.x;
        segmentMesh.position.y = yLevel + roomFloorHeight / 2;
        segmentMesh.position.z = position.z;
        segmentMesh.isPickable = true;
        segmentMesh.metadata = {
          floorNumber: floorConfig.id,
        };
        if (
          segmentConfig.position &&
          ((segmentConfig.position.x === -41.4 &&
            segmentConfig.position.z === 40.3) ||
            (segmentConfig.position.x === -41.85 &&
              segmentConfig.position.z === -3.2))
        ) {
          segmentMesh.material = this.materials.water;
        }
        try {
          this.shadowGenerator.addShadowCaster(segmentMesh);
        } catch {}
        floorMeshes.push(segmentMesh);
      });
    } else if (floorConfig.dimensions && layout) {
      const dimensions = floorConfig.dimensions;
      const roomsGrid = layout.rooms_grid;
      const roomWidth = dimensions.width / roomsGrid.columns;
      const roomDepth = dimensions.depth / roomsGrid.rows;
      const startX = -dimensions.width / 2 + roomWidth / 2;
      const startZ = -dimensions.depth / 2 + roomDepth / 2;
      let roomIdx = 0;
      for (let row = 0; row < roomsGrid.rows; row++) {
        for (let col = 0; col < roomsGrid.columns; col++) {
          const centerX = startX + col * roomWidth;
          const centerZ = startZ + row * roomDepth;
          const roomFloorMesh = BABYLON.MeshBuilder.CreateBox(
            `${floorName}_room${roomIdx}_floor`,
            {
              width: roomWidth - 0.1,
              height: roomFloorHeight,
              depth: roomDepth - 0.1,
            },
            this.scene
          );
          roomFloorMesh.position.x = centerX;
          roomFloorMesh.position.z = centerZ;
          roomFloorMesh.position.y = yLevel + roomFloorHeight / 2;
          roomFloorMesh.isPickable = true;
          roomFloorMesh.material = this.materials.floorDefault;
          try {
            this.shadowGenerator.addShadowCaster(roomFloorMesh);
          } catch {}
          roomFloorMesh.metadata = {
            floorNumber: floorConfig.id,
          };
          floorMeshes.push(roomFloorMesh);
          roomIdx++;
        }
      }
      // --- FURNITURE ---
      if (layout.furniture && Array.isArray(layout.furniture)) {
        layout.furniture.forEach((furn, idx) => {
          const pos = {
            x: typeof furn.x === "number" ? furn.x : 0,
            y: yLevel,
            z: typeof furn.z === "number" ? furn.z : 0,
          };
          const rot = furn.rotation || 0;
          const mat =
            furn.materialType === "pink"
              ? this.materials.pinkGlass
              : this.materials.furniture;
          if (furn.type === "table") {
            const tableOpts = furn.tableOptions || {
              width: 1.2,
              depth: 0.8,
              height: 0.75,
            };
            const chairs = typeof furn.chairs === "number" ? furn.chairs : 4;
            const chairRadius =
              typeof furn.chairRadius === "number"
                ? furn.chairRadius
                : Math.max(tableOpts.width, tableOpts.depth) / 2 + 0.25; // closer default
            // optional angle offset from config
            const chairAngleOffset =
              typeof furn.chairAngleOffset === "number"
                ? furn.chairAngleOffset
                : undefined;
            const tbl = this.createTableWithChairs(
              `furn_${floorConfig.id}_${idx}`,
              tableOpts,
              chairs,
              chairRadius,
              pos,
              rot,
              mat,
              chairAngleOffset
            );
            if (tbl) floorMeshes.push(tbl);
          } else if (furn.type === "chair") {
            const ch = this.createChair(
              `furn_${floorConfig.id}_${idx}`,
              furn.width || 0.45,
              furn.depth || 0.45,
              furn.seatHeight || 0.45,
              pos,
              rot,
              mat
            );
            if (ch) floorMeshes.push(ch);
          } else if (furn.type === "model" && furn.url) {
            this.loadModelToScene(
              furn.url,
              pos,
              rot,
              furn.scale || 1,
              `furn_model_${floorConfig.id}_${idx}`
            )
              .then((node) => {
                if (node) floorMeshes.push(node);
              })
              .catch(() => {});
          }
        });
      }
    }
    // holes
    if (Array.isArray(floorConfig.holes)) {
      floorConfig.holes.forEach((hole) => {
        const holeBox = this.createHoleBox(hole, yLevel);
        floorMeshes.forEach((mesh, i) => {
          if (
            mesh.name &&
            (mesh.name.includes("_floor") || mesh.name.includes("_segment"))
          ) {
            const cut = BABYLON.CSG.FromMesh(mesh)
              .subtract(BABYLON.CSG.FromMesh(holeBox))
              .toMesh(mesh.name, mesh.material, this.scene);
            cut.receiveShadows = mesh.receiveShadows;
            cut.metadata = mesh.metadata;
            try {
              this.shadowGenerator.addShadowCaster(cut);
            } catch {}
            mesh.dispose();
            floorMeshes[i] = cut;
          }
        });
        holeBox.dispose();
      });
    }
    // walls and other geometry unchanged...
    if (layout && layout.walls) {
      layout.walls.forEach((wall, index) => {
        let wallMesh;
        if (wall.type === "outline") {
          for (let i = 0; i < wall.points.length; i++) {
            const p1 = new BABYLON.Vector3(
              wall.points[i].x,
              0,
              wall.points[i].z
            );
            const p2 = new BABYLON.Vector3(
              wall.points[(i + 1) % wall.points.length].x,
              0,
              wall.points[(i + 1) % wall.points.length].z
            );
            wallMesh = this.createWallSegment(
              p1,
              p2,
              `${floorName}_outline_${i}`,
              yLevel,
              wallHeight,
              0.05,
              isUnderground,
              "glass"
            );
            floorMeshes.push(wallMesh);
          }
        } else if (wall.type === "partition") {
          const p1 = new BABYLON.Vector3(wall.start.x, 0, wall.start.z);
          const p2 = new BABYLON.Vector3(wall.end.x, 0, wall.end.z);
          const partitionThickness = wall.partitionWidth || wallThickness;
          const baseYLevel = yLevel;
          let partitionYLevel = baseYLevel;
          let partitionHeight = wall.partitionHeight || wallHeight;
          if (wall.yLevel) {
            partitionYLevel = baseYLevel + wall.yLevel;
            partitionHeight = wallHeight - wall.yLevel;
          }
          const materialType = wall.materialType || "opaque";
          wallMesh = this.createWallSegment(
            p1,
            p2,
            `${floorName}_partition_${index}_${materialType}`,
            partitionYLevel,
            partitionHeight,
            partitionThickness,
            isUnderground,
            materialType
          );
          floorMeshes.push(wallMesh);
        } else if (wall.type === "circular") {
          const center = new BABYLON.Vector3(wall.center.x, 0, wall.center.z);
          const radius = wall.radius;
          const circularThickness = wall.circularWidth || wallThickness;
          wallMesh = this.createCircularWall(
            center,
            radius,
            wallHeight,
            circularThickness,
            `${floorName}_circular_${index}`,
            yLevel,
            isUnderground
          );
          floorMeshes.push(wallMesh);
        } else if (wall.type === "curved") {
          const center = new BABYLON.Vector3(wall.center.x, 0, wall.center.z);
          const start = new BABYLON.Vector3(wall.start.x, 0, wall.start.z);
          const end = new BABYLON.Vector3(wall.end.x, 0, wall.end.z);
          const radius = wall.radius;
          const width = wall.width;
          wallMesh = this.createCurvedWall(
            center,
            radius,
            start,
            end,
            wallHeight,
            wallThickness,
            width,
            `${floorName}_curved_${index}`,
            yLevel,
            isUnderground
          );
          floorMeshes.push(wallMesh);
        } else if (wall.type === "pinkglass") {
          const p1 = new BABYLON.Vector3(wall.start.x, 0, wall.start.z);
          const p2 = new BABYLON.Vector3(wall.end.x, 0, wall.end.z);
          const partitionThickness = wall.partitionWidth || wallThickness;
          const baseYLevel = yLevel;
          let partitionYLevel = baseYLevel;
          let partitionHeight = wall.partitionHeight || wallHeight;
          if (wall.yLevel) {
            partitionYLevel = baseYLevel + wall.yLevel;
            partitionHeight = wall.partitionHeight || wallHeight - wall.yLevel;
          }
          const pinkGlassPartition = this.createPinkGlassPartition(
            p1,
            p2,
            partitionThickness,
            partitionYLevel,
            partitionHeight
          );
          floorMeshes.push(pinkGlassPartition);
        } else if (wall.type === "railing") {
          const p1 = new BABYLON.Vector3(wall.start.x, 0, wall.start.z);
          const p2 = new BABYLON.Vector3(wall.end.x, 0, wall.end.z);
          const railingHeight = wall.railingHeight || 1.2;
          const railingThickness = wall.thickness || 0.1;
          const railingYOffset = wall.yLevel || 0;
          wallMesh = this.createRailingSegment(
            p1,
            p2,
            `${floorName}_railing_${index}`,
            yLevel + railingYOffset,
            railingHeight,
            isUnderground
          );
          floorMeshes.push(wallMesh);
        } else if (wall.type === "stairs") {
          const stairs = this.createStairs(
            wall.position,
            wall.stepWidth,
            wall.stepDepth,
            yLevel,
            `${floorName}_stairs_${index}`,
            wallHeight,
            wall.partPosition,
            wall.numSteps,
            wall.totalSteps,
            wall.floorP1,
            wall.floorP2,
            wall.direction,
            wall.railing
          );
          floorMeshes.push(stairs);
        } else if (wall.type === "spiralStairs") {
          const spiral = this.createSpiralStairs(
            wall.center,
            wall.radius,
            wall.numSteps,
            yLevel,
            wallHeight,
            wall.stepWidth,
            wall.stepDepth,
            wall.start
          );
          floorMeshes.push(spiral);
        }
        if (wallMesh) {
          try {
            this.shadowGenerator.addShadowCaster(wallMesh);
          } catch {}
        }
      });
    }
    const area = floorConfig.segments
      ? floorConfig.segments.reduce(
          (total, segment) => total + segment.width * segment.depth,
          0
        )
      : 0;
    return {
      meshes: floorMeshes,
      area: area,
    };
  }
  createWallSegment(
    p1,
    p2,
    name,
    yLevel,
    wallHeight,
    wallThickness,
    isUnderground,
    materialType
  ) {
    const wallLength = BABYLON.Vector3.Distance(p1, p2);
    const wall = BABYLON.MeshBuilder.CreateBox(
      name,
      { width: wallThickness, height: wallHeight, depth: wallLength },
      this.scene
    );
    const midPoint = BABYLON.Vector3.Center(p1, p2);
    wall.position.x = midPoint.x;
    wall.position.z = midPoint.z;
    wall.position.y = yLevel + wallHeight / 2;
    const direction = p2.subtract(p1).normalize();
    const angle = Math.atan2(direction.x, direction.z);
    wall.rotation.y = angle;
    switch (materialType) {
      case "glass":
        wall.material = this.materials.glass;
        break;
      case "opaque":
        wall.material = this.materials.wallOpaque;
        break;
      default:
        wall.material = this.materials.wallOpaque;
        break;
    }
    wall.isPickable = false;
    this.shadowGenerator.addShadowCaster(wall);
    return wall;
  }
  createCurvedWall(
    center,
    radius,
    start,
    end,
    wallHeight,
    wallThickness,
    width,
    name,
    yLevel,
    isUnderground
  ) {
    let startAngle = Math.atan2(start.z - center.z, start.x - center.x);
    let endAngle = Math.atan2(end.z - center.z, end.x - center.x);
    if (endAngle < startAngle) {
      endAngle += 2 * Math.PI;
    }
    if (endAngle - startAngle > Math.PI) {
      [startAngle, endAngle] = [endAngle, startAngle];
      endAngle += 2 * Math.PI;
    }
    const arcPath = [];
    const numSegments = 72;
    for (let i = 0; i <= numSegments; i++) {
      const angle = startAngle + (i * (endAngle - startAngle)) / numSegments;
      const x = center.x + radius * Math.cos(angle);
      const z = center.z + radius * Math.sin(angle);
      arcPath.push(new BABYLON.Vector3(x, yLevel, z));
    }
    const shape = [
      new BABYLON.Vector3(width / 2, 0, 0),
      new BABYLON.Vector3(width / 2, wallHeight, 0),
      new BABYLON.Vector3(-width / 2, wallHeight, 0),
      new BABYLON.Vector3(-width / 2, 0, 0),
    ];
    const extrusionPath = arcPath.map(
      (point) => new BABYLON.Vector3(point.x, point.y, point.z)
    );
    const curvedWall = BABYLON.MeshBuilder.ExtrudeShape(
      name,
      {
        shape,
        path: extrusionPath,
        sideOrientation: BABYLON.Mesh.DOUBLESIDE,
        cap: BABYLON.Mesh.CAP_END,
      },
      this.scene
    );
    curvedWall.material = this.materials.wallOpaque;
    curvedWall.convertToFlatShadedMesh();
    curvedWall.isPickable = false;
    this.shadowGenerator.addShadowCaster(curvedWall);
    return curvedWall;
  }
  createCircularWall(
    center,
    radius,
    wallHeight,
    wallThickness,
    name,
    yLevel,
    isUnderground
  ) {
    let circularWall;
    if (radius === 0) {
      circularWall = BABYLON.MeshBuilder.CreateCylinder(
        name,
        { height: wallHeight, diameter: wallThickness },
        this.scene
      );
    } else {
      const outerCylinder = BABYLON.MeshBuilder.CreateCylinder(
        `${name}_outer`,
        { height: wallHeight, diameter: 2 * (radius + wallThickness / 2) },
        this.scene
      );
      const innerCylinder = BABYLON.MeshBuilder.CreateCylinder(
        `${name}_inner`,
        {
          height: wallHeight + 1,
          diameter: 2 * radius,
          updatable: false,
          sideOrientation: BABYLON.Mesh.DOUBLESIDE,
        },
        this.scene
      );
      circularWall = BABYLON.CSG.FromMesh(outerCylinder)
        .subtract(BABYLON.CSG.FromMesh(innerCylinder))
        .toMesh(name, this.materials.wallOpaque, this.scene);
      outerCylinder.dispose();
      innerCylinder.dispose();
    }
    circularWall.position.set(center.x, yLevel + wallHeight / 2, center.z);
    circularWall.material = this.materials.wallOpaque;
    circularWall.convertToFlatShadedMesh();
    circularWall.isPickable = false;
    this.shadowGenerator.addShadowCaster(circularWall);
    return circularWall;
  }
  createRailingSegment(p1, p2, name, yLevel, railingHeight, isUnderground) {
    const railingLength = BABYLON.Vector3.Distance(p1, p2);
    const railing = BABYLON.MeshBuilder.CreateBox(
      name,
      { width: 0.1, height: railingHeight, depth: railingLength },
      this.scene
    );
    const midPoint = BABYLON.Vector3.Center(p1, p2);
    railing.position.x = midPoint.x;
    railing.position.z = midPoint.z;
    railing.position.y = yLevel + railingHeight / 2;
    const direction = p2.subtract(p1).normalize();
    const angle = Math.atan2(direction.x, direction.z);
    railing.rotation.y = angle;
    // Use either the dark railing material (in dark mode) or glass (in normal mode)
    const mat = this.darkMode
      ? this.materials.railingDark || this.materials.glass
      : this.materials.glass;
    railing.material = mat;
    // track for future toggles
    this._railingMeshes.push(railing);
    railing.isPickable = false;
    this.shadowGenerator.addShadowCaster(railing);
    return railing;
  }
  createStairs(
    position,
    stepWidth,
    stepDepth,
    yLevel,
    name,
    wallHeight,
    partPosition,
    numSteps,
    totalSteps,
    floorP1,
    floorP2,
    direction,
    railing
  ) {
    const stairMeshes = [];
    const stepHeight = wallHeight / Math.max(1, totalSteps);
    const stepDirection = direction === "top" ? 1 : -1;
    const parts = Math.max(1, Math.ceil(totalSteps / Math.max(1, numSteps)));
    const stepsBeforeThisPart = (partPosition - 1) * numSteps;
    const remainingSteps = Math.max(0, totalSteps - stepsBeforeThisPart);
    const stepsThisPart = Math.min(numSteps, remainingSteps);
    const isLastPart =
      partPosition >= parts ||
      stepsBeforeThisPart + stepsThisPart >= totalSteps;
    for (let i = 0; i < stepsThisPart; i++) {
      const globalIndex = stepsBeforeThisPart + i;
      const centerY = yLevel + (globalIndex + 0.5) * stepHeight;
      const stepMesh = BABYLON.MeshBuilder.CreateBox(
        `stair_step_${name}_${partPosition}_${i}`,
        {
          width: stepWidth,
          height: stepHeight,
          depth: stepDepth,
        },
        this.scene
      );
      stepMesh.position.x = position.x;
      stepMesh.position.y = centerY;
      stepMesh.position.z = position.z + i * stepDepth * stepDirection;
      stepMesh.material = this.materials.wallOpaque;
      stepMesh.isPickable = false;
      this.shadowGenerator.addShadowCaster(stepMesh);
      stairMeshes.push(stepMesh);
    }
    let floorMesh;
    let floorWidth = 0;
    let floorDepth = 0;
    if (!isLastPart && stepsThisPart > 0) {
      const landingHeight = stepHeight;
      floorWidth = Math.abs(floorP2.x - floorP1.x);
      floorDepth = Math.abs(floorP2.z - floorP1.z);
      const surfaceY =
        yLevel + (stepsBeforeThisPart + stepsThisPart) * stepHeight;
      floorMesh = BABYLON.MeshBuilder.CreateBox(
        `${name}_floor_${partPosition}`,
        {
          width: floorWidth,
          height: landingHeight,
          depth: floorDepth,
        },
        this.scene
      );
      floorMesh.position.x = (floorP1.x + floorP2.x) / 2;
      floorMesh.position.y = surfaceY - landingHeight / 2;
      floorMesh.position.z = (floorP1.z + floorP2.z) / 2;
      floorMesh.material = this.materials.wallOpaque;
      floorMesh.isPickable = false;
      this.shadowGenerator.addShadowCaster(floorMesh);
      stairMeshes.push(floorMesh);
    }
    if (railing === "yes") {
      // IMPORTANT: stairs and their railings must remain pink and NOT be affected by dark mode
      // Use the centralized pinkGlass material (so color is consistent and preserved)
      const railingMaterial =
        this.materials.pinkGlass ||
        new BABYLON.StandardMaterial(`pinkGlassFallback_${name}`, this.scene);
      if (!this.materials.pinkGlass) {
        // If fallback created, set its pink color
        railingMaterial.diffuseColor = new BABYLON.Color3(1, 0.75, 0.8);
        railingMaterial.alpha = 0.5;
        railingMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        railingMaterial.transparencyMode = BABYLON.Material.MATERIAL_ALPHABLEND;
        railingMaterial.needDepthPrePass = true;
      }
      const railingHeight = 1.0;
      const railingThickness = 0.05;
      for (let i = 0; i < stepsThisPart; i++) {
        const globalIndex = stepsBeforeThisPart + i;
        const stepCenterY = yLevel + (globalIndex + 0.5) * stepHeight;
        const stepSurfaceY = stepCenterY + stepHeight / 2;
        const z = position.z + i * stepDepth * stepDirection;
        const railingLeft = BABYLON.MeshBuilder.CreateBox(
          `railing_left_${name}_${partPosition}_${i}`,
          {
            width: railingThickness,
            height: railingHeight,
            depth: stepDepth,
          },
          this.scene
        );
        railingLeft.position.set(
          position.x - stepWidth / 2 - railingThickness / 2,
          stepSurfaceY + railingHeight / 2,
          z
        );
        railingLeft.material = railingMaterial;
        stairMeshes.push(railingLeft);
        // do NOT push stair railings into _railingMeshes -> they must remain pink always
        const railingRight = BABYLON.MeshBuilder.CreateBox(
          `railing_right_${name}_${partPosition}_${i}`,
          {
            width: railingThickness,
            height: railingHeight,
            depth: stepDepth,
          },
          this.scene
        );
        railingRight.position.set(
          position.x + stepWidth / 2 + railingThickness / 2,
          stepSurfaceY + railingHeight / 2,
          z
        );
        railingRight.material = railingMaterial;
        stairMeshes.push(railingRight);
        // do NOT push into _railingMeshes
      }
      if (!isLastPart && floorMesh) {
        const surfaceY =
          yLevel + (stepsBeforeThisPart + stepsThisPart) * stepHeight;
        const floorSideRailingLeft = BABYLON.MeshBuilder.CreateBox(
          `floor_side_railing_left_${name}_${partPosition}`,
          {
            width: railingThickness,
            height: railingHeight,
            depth: floorDepth,
          },
          this.scene
        );
        floorSideRailingLeft.position.x =
          floorMesh.position.x - floorWidth / 2 - railingThickness / 2;
        floorSideRailingLeft.position.y = surfaceY + railingHeight / 2;
        floorSideRailingLeft.position.z = floorMesh.position.z;
        floorSideRailingLeft.material = railingMaterial;
        stairMeshes.push(floorSideRailingLeft);
        // do NOT push into _railingMeshes
        const floorSideRailingRight = BABYLON.MeshBuilder.CreateBox(
          `floor_side_railing_right_${name}_${partPosition}`,
          {
            width: railingThickness,
            height: railingHeight,
            depth: floorDepth,
          },
          this.scene
        );
        floorSideRailingRight.position.x =
          floorMesh.position.x + floorWidth / 2 + railingThickness / 2;
        floorSideRailingRight.position.y = surfaceY + railingHeight / 2;
        floorSideRailingRight.position.z = floorMesh.position.z;
        floorSideRailingRight.material = railingMaterial;
        stairMeshes.push(floorSideRailingRight);
        // do NOT push into _railingMeshes
      }
    }
    const stairs = BABYLON.Mesh.MergeMeshes(
      stairMeshes,
      true,
      true,
      undefined,
      false,
      true
    );
    if (stairs) stairs.name = name;
    return stairs;
  }
  createTree(position, scale) {
    const trunkHeight = 2 * scale;
    const trunkDiameter = 0.3 * scale;
    const trunk = BABYLON.MeshBuilder.CreateCylinder(
      "trunk",
      { diameter: trunkDiameter, height: trunkHeight },
      this.scene
    );
    trunk.position = new BABYLON.Vector3(
      position.x,
      trunkHeight / 2,
      position.z
    );
    trunk.material = new BABYLON.StandardMaterial("trunkMat", this.scene);
    trunk.material.diffuseColor = new BABYLON.Color3(0.35, 0.16, 0.14);
    const foliage = [];
    const numberOfFoliageBalls = 5;
    for (let i = 0; i < numberOfFoliageBalls; i++) {
      const leaves = BABYLON.MeshBuilder.CreateSphere(
        `leaves_${i}`,
        { diameter: trunkDiameter * 3 },
        this.scene
      );
      const offsetX = (Math.random() * 1 - 0.5) * scale * 0.4;
      const offsetY = trunkHeight * (0.6 + Math.random() * 0.4);
      const offsetZ = (Math.random() * 1 - 0.5) * scale * 0.4;
      leaves.position = new BABYLON.Vector3(
        position.x + offsetX,
        offsetY,
        position.z + offsetZ
      );
      leaves.material = new BABYLON.StandardMaterial("leavesMat", this.scene);
      leaves.material.diffuseColor = new BABYLON.Color3(0.0, 0.5, 0.0);
      leaves.material.specularColor = new BABYLON.Color3(0, 0, 0);
      foliage.push(leaves);
    }
    const tree = BABYLON.Mesh.MergeMeshes(
      [trunk, ...foliage],
      true,
      false,
      null,
      false,
      true
    );
    tree.isPickable = false;
    tree.name = `tree_${position.x}_${position.z}`;
    return tree;
  }
  // NEW: createBushInPot (keř v květináči) — vrací TransformNode s dětmi (pot, soil, foliage)
  createBushInPot(position, scale = 1) {
    // materials (cached in this.materials)
    if (!this.materials.pot) {
      const potMat = new BABYLON.StandardMaterial("potMat", this.scene);
      potMat.diffuseColor = new BABYLON.Color3(0.55, 0.27, 0.07); // terracotta
      potMat.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);
      this.materials.pot = potMat;
    }
    if (!this.materials.soil) {
      const soilMat = new BABYLON.StandardMaterial("soilMat", this.scene);
      soilMat.diffuseColor = new BABYLON.Color3(0.12, 0.07, 0.03); // dark soil
      soilMat.specularColor = new BABYLON.Color3(0, 0, 0);
      this.materials.soil = soilMat;
    }
    if (!this.materials.bushLeaves) {
      const leavesMat = new BABYLON.StandardMaterial(
        "bushLeavesMat",
        this.scene
      );
      leavesMat.diffuseColor = new BABYLON.Color3(0.07, 0.45, 0.07); // green
      leavesMat.specularColor = new BABYLON.Color3(0, 0, 0);
      this.materials.bushLeaves = leavesMat;
    }
    const nameBase = `bush_${position.x}_${position.z}`;
    // root node (group)
    const root = new BABYLON.TransformNode(nameBase, this.scene);
    root.position = new BABYLON.Vector3(
      typeof position.x === "number" ? position.x : 0,
      typeof position.y === "number" ? position.y : 0,
      typeof position.z === "number" ? position.z : 0
    );
    // dimensions (local units)
    const potHeight = 0.35 * scale;
    const potTopDia = 0.45 * scale;
    const potBottomDia = 0.32 * scale;
    const rimInset = 0.04 * scale;
    // Create outer and inner cylinders for pot (centered at origin)
    const outer = BABYLON.MeshBuilder.CreateCylinder(
      `${nameBase}_outer_tmp`,
      {
        diameterTop: potTopDia,
        diameterBottom: potBottomDia,
        height: potHeight,
        tessellation: 32,
      },
      this.scene
    );
    const inner = BABYLON.MeshBuilder.CreateCylinder(
      `${nameBase}_inner_tmp`,
      {
        diameterTop: Math.max(0.01, potTopDia - rimInset * 2),
        diameterBottom: Math.max(0.01, potBottomDia - rimInset * 2),
        height: potHeight - 0.02,
        tessellation: 32,
      },
      this.scene
    );
    // Slightly raise inner so rim remains
    inner.position.y = 0.01;
    // CSG subtract inner from outer to get a hollow pot
    let pot;
    try {
      pot = BABYLON.CSG.FromMesh(outer)
        .subtract(BABYLON.CSG.FromMesh(inner))
        .toMesh(`${nameBase}_pot`, this.materials.pot, this.scene);
    } catch (e) {
      // Fallback: if CSG not available for some reason, just use outer as pot
      pot = outer;
      pot.name = `${nameBase}_pot`;
      pot.material = this.materials.pot;
      inner.dispose();
    }
    // Dispose temp meshes if still present
    try {
      outer.dispose();
    } catch {}
    try {
      inner.dispose();
    } catch {}
    // Position pot relative to root (so bottom sits at y=0)
    pot.parent = root;
    pot.position = new BABYLON.Vector3(0, potHeight / 2, 0);
    pot.isPickable = false;
    // soil fill (small cylinder inside pot)
    const soilHeight = 0.08 * scale;
    const soilDia = Math.max(0.01, potTopDia - rimInset * 1.2);
    const soil = BABYLON.MeshBuilder.CreateCylinder(
      `${nameBase}_soil`,
      { diameter: soilDia, height: soilHeight, tessellation: 24 },
      this.scene
    );
    soil.material = this.materials.soil;
    soil.parent = root;
    soil.position = new BABYLON.Vector3(
      0,
      potHeight - soilHeight / 2 - 0.01,
      0
    );
    soil.isPickable = false;
    // foliage: overlapping spheres with small offsets (relative to root)
    const foliage = [];
    const foliageBalls = 4 + Math.floor(Math.random() * 3); // 4..6
    const baseFoliageDiameter = 0.4 * scale;
    const foliageBaseY = potHeight + 0.02; // slightly above pot rim
    for (let i = 0; i < foliageBalls; i++) {
      const d = baseFoliageDiameter * (0.85 + Math.random() * 0.3);
      const ball = BABYLON.MeshBuilder.CreateSphere(
        `${nameBase}_leaf_${i}`,
        { diameter: d, segments: 16 },
        this.scene
      );
      const offsetX = (Math.random() - 0.5) * potTopDia * 0.6;
      const offsetZ = (Math.random() - 0.5) * potTopDia * 0.6;
      const offsetY =
        foliageBaseY +
        (Math.random() * 0.2 - 0.05) * scale +
        d / 2 -
        0.1 * scale;
      ball.parent = root;
      ball.position = new BABYLON.Vector3(offsetX, offsetY, offsetZ);
      ball.material = this.materials.bushLeaves;
      ball.isPickable = false;
      foliage.push(ball);
    }
    // add a small decorative rim (optional, thin torus-like using torus if available)
    try {
      const rim = BABYLON.MeshBuilder.CreateTorus(
        `${nameBase}_rim`,
        {
          diameter: potTopDia - 0.01,
          thickness: 0.03 * scale,
          tessellation: 24,
        },
        this.scene
      );
      rim.parent = root;
      rim.material = this.materials.pot;
      rim.position = new BABYLON.Vector3(0, potHeight - 0.01, 0);
      rim.rotation = new BABYLON.Vector3(Math.PI / 2, 0, 0);
      rim.isPickable = false;
    } catch (e) {}
    try {
      this.shadowGenerator.addShadowCaster(pot);
      this.shadowGenerator.addShadowCaster(...foliage);
    } catch (e) {
      /* ignore */
    }
    return root;
  }
  createSpiralStairs(
    center,
    radius,
    numSteps,
    yLevel,
    height,
    stepWidth,
    stepDepth,
    start
  ) {
    const spiralStairs = [];
    const stepHeight = height / numSteps;
    const railingHeight = 1.1;
    // Use centralized glass material so dark mode affects it
    const glassMaterial =
      this.materials.glass ||
      new BABYLON.StandardMaterial("glassFallback", this.scene);
    for (let i = 0; i < numSteps; i++) {
      const angle = (i * 2.585 * Math.PI) / numSteps + start;
      const x = center.x + radius * 2 * Math.cos(angle);
      const z = center.z + radius * 2 * Math.sin(angle);
      const step = BABYLON.MeshBuilder.CreateBox(
        `step${i}`,
        {
          width: stepDepth,
          height: stepHeight,
          depth: stepWidth,
        },
        this.scene
      );
      step.position.x = x;
      step.position.z = z;
      step.position.y = yLevel + (i + 0.5) * stepHeight;
      step.rotation.y = -angle;
      step.material = this.materials.wallOpaque;
      step.isPickable = false;
      this.shadowGenerator.addShadowCaster(step);
      spiralStairs.push(step);
    }
    const outerPath = [];
    const innerPath = [];
    for (let i = 0; i <= numSteps; i++) {
      const angle = (i * 2.585 * Math.PI) / numSteps + start;
      const y = yLevel + i * stepHeight;
      const outerX =
        center.x + (radius - 0.1 + stepDepth) * Math.cos(angle - 0.25);
      const outerZ =
        center.z + (radius - 0.1 + stepDepth) * Math.sin(angle - 0.25);
      outerPath.push(new BABYLON.Vector3(outerX, y, outerZ));
      outerPath.push(
        new BABYLON.Vector3(outerX, y + railingHeight + 0.1, outerZ)
      );
      const innerX =
        center.x + (radius * 2 - stepDepth) * Math.cos(angle + 2.9);
      const innerZ =
        center.z + (radius * 2 - stepDepth) * Math.sin(angle + 2.9);
      innerPath.push(new BABYLON.Vector3(innerX, y, innerZ));
      innerPath.push(
        new BABYLON.Vector3(innerX, y + railingHeight + 0.1, innerZ)
      );
    }
    const outerGlassWall = BABYLON.MeshBuilder.CreateRibbon(
      "outerGlassWall",
      {
        pathArray: [
          outerPath.filter((_, index) => index % 2 === 0),
          outerPath.filter((_, index) => index % 2 !== 0),
        ],
        sideOrientation: BABYLON.Mesh.DOUBLESIDE,
      },
      this.scene
    );
    outerGlassWall.material = glassMaterial;
    outerGlassWall.isPickable = false;
    this.shadowGenerator.addShadowCaster(outerGlassWall);
    const innerGlassWall = BABYLON.MeshBuilder.CreateRibbon(
      "innerGlassWall",
      {
        pathArray: [
          innerPath.filter((_, index) => index % 2 === 0),
          innerPath.filter((_, index) => index % 2 !== 0),
        ],
        sideOrientation: BABYLON.Mesh.DOUBLESIDE,
      },
      this.scene
    );
    innerGlassWall.material = glassMaterial;
    innerGlassWall.isPickable = false;
    this.shadowGenerator.addShadowCaster(innerGlassWall);
    return BABYLON.Mesh.MergeMeshes(
      [...spiralStairs, outerGlassWall, innerGlassWall],
      true,
      false,
      null,
      false,
      true
    );
  }
  createPinkGlassPartition(start, end, width, yLevel, height) {
    const length = new BABYLON.Vector3(
      end.x - start.x,
      0,
      end.z - start.z
    ).length();
    const wall = BABYLON.MeshBuilder.CreateBox(
      "pinkGlassPartition",
      { width: length, height: height, depth: width },
      this.scene
    );
    wall.position.x = (start.x + end.x) / 2;
    wall.position.y = yLevel + height / 2;
    wall.position.z = (start.z + end.z) / 2;
    const angle = Math.atan2(end.z - start.z, end.x - start.x);
    wall.rotation.y = -angle;
    wall.material = this.materials.pinkGlass;
    wall.isPickable = false;
    return wall;
  }
}
