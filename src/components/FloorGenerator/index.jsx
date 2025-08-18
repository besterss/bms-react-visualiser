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
    this.initializeMaterials();
    this.materials.grass = this.initializeGrassMaterial();
    this.materials.water = this.initializeWaterMaterial();
    this.materials.railing = this.initializeRailingMaterial();
    const { shadowGenerator } = setupSceneLighting(this.scene);
    this.shadowGenerator = shadowGenerator;
  }

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
      "railingMat",
      this.scene
    );
    railingMaterial.diffuseColor = new BABYLON.Color3(
      203 / 255,
      211 / 255,
      225 / 255
    ); // Světle modrý odstín
    railingMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    railingMaterial.alpha = 0.5; // Průhlednost
    railingMaterial.backFaceCulling = false;
    return railingMaterial;
  }

  initializeWaterMaterial() {
    const waterMaterial = new BABYLON.StandardMaterial("waterMat", this.scene);
    waterMaterial.diffuseColor = new BABYLON.Color3(0.0, 0.3, 1.0); // výraznější modrá
    waterMaterial.specularColor = new BABYLON.Color3(0.8, 0.8, 0.8); // více lesklé
    waterMaterial.backFaceCulling = false;
    return waterMaterial;
  }

  initializeMaterials() {
    // Wall material
    this.materials.wallOpaque = new BABYLON.StandardMaterial(
      "wallOpaqueMat",
      this.scene
    );

    this.materials.wallOpaque.diffuseColor = new BABYLON.Color3(1, 1, 1); // White
    this.materials.wallOpaque.specularColor = new BABYLON.Color3(0, 0, 0);
    this.materials.wallOpaque.alpha = 1;
    // Default floor material
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
    // Above ground transparent material
    this.materials.aboveGroundTransparent = new BABYLON.StandardMaterial(
      "aboveGroundTransparentMat",
      this.scene
    );

    this.materials.aboveGroundTransparent.diffuseColor = new BABYLON.Color3(
      0.3,
      0.3,
      0.3
    ); // Dark gray
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

    // Underground transparent material
    this.materials.undergroundTransparent = new BABYLON.StandardMaterial(
      "undergroundTransparentMat",
      this.scene
    );

    this.materials.undergroundTransparent.diffuseColor = new BABYLON.Color3(
      0.6,
      0.8,
      1
    ); // Bluish

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

    // Ground-like material (grasTransparent renamed for clarity)
    this.materials.ground = new BABYLON.StandardMaterial(
      "groundMat",
      this.scene
    );

    this.materials.ground.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5); // Ground-like color
    this.materials.ground.backFaceCulling = false;
    this.materials.ground.alpha = 1; // Visibility with slight transparency
    this.materials.ground.transparencyMode =
      BABYLON.Material.MATERIAL_ALPHABLEND;
    this.materials.ground.needDepthPrePass = true;
    this.materials.ground.specularColor = new BABYLON.Color3(0, 0, 0);
    this.materials.glass = new BABYLON.StandardMaterial("glassMat", this.scene);
    // Light gray color for frosted effect
    this.materials.glass.diffuseColor = new BABYLON.Color3(
      203 / 255,
      211 / 255,
      225 / 255
    );
    // Higher transparency for more frosted look
    this.materials.glass.alpha = 0.5; // Adjust as needed
    // Ensure backface culling to improve render efficiency
    this.materials.glass.backFaceCulling = true;
    // Low specular intensity for minimal shininess
    this.materials.glass.specularColor = new BABYLON.Color3(0, 0, 0);
    // Transparency mode settings
    this.materials.glass.transparencyMode =
      BABYLON.Material.MATERIAL_ALPHABLEND;
    this.materials.glass.needDepthPrePass = true;
    const pinkGlass = new BABYLON.StandardMaterial("pinkGlass", this.scene);
    pinkGlass.diffuseColor = new BABYLON.Color3(1, 0.75, 0.8);
    pinkGlass.specularColor = new BABYLON.Color3(0, 0, 0);
    pinkGlass.alpha = 0.5;
    this.materials.pinkGlass = pinkGlass;
    this.materials.wallOpaque = new BABYLON.StandardMaterial(
      "wallOpaqueMat",
      this.scene
    );

    this.materials.wallOpaque.specularColor = new BABYLON.Color3(0, 0, 0);
    this.materials.wallOpaque.diffuseColor = new BABYLON.Color3(1, 1, 1);
  }
  getColorFromTemperature(temp, alpha = 1.0) {
    let r, g, b;
    if (temp <= 0) {
      r = 1.0;
      g = 1.0;
      b = 1.0; // White
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
        this.config.visualization.floorConfig;
      }
      // Consider if the current floor is underground
      const isUnderground = floorConfig.type === "underground";
      // Create floor based on config
      const floorResult = this.createFloorFromConfig(
        floorConfig,
        yLevel,
        isUnderground,
        is1NP
      );
      if (floorConfig.layout && floorConfig.layout.trees) {
        floorConfig.layout.trees.forEach((treeConfig) => {
          const tree = this.createTree(treeConfig.position, treeConfig.scale);
          tree.position.y = yLevel + tree.position.y;
          this.allFloorMeshes[index].push(tree);
        });
      }
      floorResult.meshes.forEach((mesh) => {
        if (mesh.name.includes("floor")) {
          mesh.receiveShadows = true;
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
    // Find the yLevel for 1NP specifically to draw the grass there
    const firstAboveGroundIndex = this.config.floors.findIndex(
      (floorConfig) => floorConfig.id === 0
    );
    if (firstAboveGroundIndex !== -1) {
      const firstAboveGroundLevel =
        firstAboveGroundIndex *
        (this.config.visualization.wall_height +
          this.config.visualization.floor_thickness +
          this.config.visualization.floor_spacing);
      // Create grass on 1NP level
      const grassMesh = this.createGrassArea(
        { width: 120, depth: 120 },
        firstAboveGroundLevel + 0.01
      );
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
        this.shadowGenerator.addShadowCaster(segmentMesh);
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
          this.shadowGenerator.addShadowCaster(roomFloorMesh);
          roomFloorMesh.metadata = {
            floorNumber: floorConfig.id,
          };
          floorMeshes.push(roomFloorMesh);
          roomIdx++;
        }
      }
    }
    if (Array.isArray(floorConfig.holes)) {
      floorConfig.holes.forEach((hole) => {
        const holeBox = this.createHoleBox(hole, yLevel);
        // u každého floor mesh proveďme subtrakci
        floorMeshes.forEach((mesh, i) => {
          if (mesh.name.includes("_floor") || mesh.name.includes("_segment")) {
            const cut = BABYLON.CSG.FromMesh(mesh)
              .subtract(BABYLON.CSG.FromMesh(holeBox))
              .toMesh(mesh.name, mesh.material, this.scene);
            cut.receiveShadows = mesh.receiveShadows;
            cut.metadata = mesh.metadata;
            this.shadowGenerator.addShadowCaster(cut);
            mesh.dispose();
            floorMeshes[i] = cut;
          }
        });
        holeBox.dispose();
      });
    }
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
          let partitionHeight = wallHeight;
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
          const partitionThickness = wall.partitionWidth || wallThickness; // Zjisti sílu dělení
          const baseYLevel = yLevel;
          let partitionYLevel = baseYLevel;
          let partitionHeight = wall.partitionHeight || wallHeight; // Zjisti výšku dělení
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
            railingThickness,
            isUnderground,
            wall.materialType
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
          this.shadowGenerator.addShadowCaster(wallMesh);
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
    // Position wall
    const midPoint = BABYLON.Vector3.Center(p1, p2);
    wall.position.x = midPoint.x;
    wall.position.z = midPoint.z;
    wall.position.y = yLevel + wallHeight / 2;
    // Rotate wall to align with points
    const direction = p2.subtract(p1).normalize();
    const angle = Math.atan2(direction.x, direction.z);
    wall.rotation.y = angle;
    if (materialType === "glass") wall.material = this.materials.glass;
    else wall.material = this.materials.wallOpaque;
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
    // Calculate start and end angles for the curved wall
    let startAngle = Math.atan2(start.z - center.z, start.x - center.x);
    let endAngle = Math.atan2(end.z - center.z, end.x - center.x);
    // Ensure the shortest path on the circle
    if (endAngle < startAngle) {
      endAngle += 2 * Math.PI;
    }
    if (endAngle - startAngle > Math.PI) {
      [startAngle, endAngle] = [endAngle, startAngle];
      endAngle += 2 * Math.PI;
    }
    const arcPath = [];
    const numSegments = 72; // Number of segments for smoothness
    for (let i = 0; i <= numSegments; i++) {
      const angle = startAngle + (i * (endAngle - startAngle)) / numSegments;
      const x = center.x + radius * Math.cos(angle);
      const z = center.z + radius * Math.sin(angle);
      arcPath.push(new BABYLON.Vector3(x, yLevel, z));
    }
    // Define the shape to be extruded
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
    // Assign materials based on view and floor type
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
    // Pozice zábradlí
    const midPoint = BABYLON.Vector3.Center(p1, p2);
    railing.position.x = midPoint.x;
    railing.position.z = midPoint.z;
    railing.position.y = yLevel + railingHeight / 2;
    // Rotace zábradlí pro zarovnání s body
    const direction = p2.subtract(p1).normalize();
    const angle = Math.atan2(direction.x, direction.z);
    railing.rotation.y = angle;
    railing.material = this.materials.railing;
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
    const stepHeight = wallHeight / totalSteps;
    const stepDirection = direction === "top" ? 1 : -1;
    const isLastPart = partPosition * numSteps >= totalSteps;
    let startingYLevel;

    if (partPosition === 1) {
      startingYLevel = yLevel;
    } else {
      startingYLevel =
        yLevel + (partPosition - 1) * (numSteps + 1) * stepHeight;
    }

    // Create steps
    for (let i = 0; i < numSteps; i++) {
      const stepMesh = BABYLON.MeshBuilder.CreateBox(
        `stair_step_${i}`,
        {
          width: stepWidth,
          height: stepHeight,
          depth: stepDepth,
        },
        this.scene
      );
      stepMesh.position.x = position.x;
      stepMesh.position.y = startingYLevel + i * stepHeight;
      stepMesh.position.z = position.z + i * stepDepth * stepDirection;
      stepMesh.material = this.materials.wallOpaque;
      stepMesh.isPickable = false;
      this.shadowGenerator.addShadowCaster(stepMesh);
      stairMeshes.push(stepMesh);
    }

    let floorMesh;
    let floorWidth = 0; // Initialize floorWidth
    let floorDepth = 0; // Initialize floorDepth
    if (!isLastPart) {
      const floorHeight = stepHeight;
      floorWidth = Math.abs(floorP2.x - floorP1.x); // Define floorWidth here
      floorDepth = Math.abs(floorP2.z - floorP1.z); // Define floorDepth here
      const floorPositionY = startingYLevel + numSteps * stepHeight;

      floorMesh = BABYLON.MeshBuilder.CreateBox(
        `${name}_floor`,
        {
          width: floorWidth,
          height: floorHeight,
          depth: floorDepth,
        },
        this.scene
      );

      floorMesh.position.x = (floorP1.x + floorP2.x) / 2;
      floorMesh.position.y = floorPositionY;
      floorMesh.position.z = (floorP1.z + floorP2.z) / 2;
      floorMesh.material = this.materials.wallOpaque;
      floorMesh.isPickable = false;
      this.shadowGenerator.addShadowCaster(floorMesh);
      stairMeshes.push(floorMesh);
    }

    if (railing === "yes") {
      console.log("Railing is enabled");
      const railingMaterial = new BABYLON.StandardMaterial(
        "railingMaterial",
        this.scene
      );

      railingMaterial.diffuseColor = new BABYLON.Color3(1, 0.75, 0.8);
      railingMaterial.alpha = 0.5;
      const railingHeight = 1.0;
      const railingThickness = 0.05;

      // Create railings for each step
      for (let i = 0; i < numSteps; i++) {
        const railingLeft = BABYLON.MeshBuilder.CreateBox(
          `railing_left_step_${i}`,
          {
            width: railingThickness,
            height: railingHeight,
            depth: stepDepth,
          },
          this.scene
        );

        railingLeft.position.x =
          position.x - stepWidth / 2 - railingThickness / 2;
        railingLeft.position.y =
          startingYLevel + i * stepHeight + railingHeight / 2;
        railingLeft.position.z = position.z + i * stepDepth * stepDirection;
        railingLeft.material = railingMaterial;
        stairMeshes.push(railingLeft);

        const railingRight = BABYLON.MeshBuilder.CreateBox(
          `railing_right_step_${i}`,
          {
            width: railingThickness,
            height: railingHeight,
            depth: stepDepth,
          },
          this.scene
        );

        railingRight.position.x =
          position.x + stepWidth / 2 + railingThickness / 2;
        railingRight.position.y =
          startingYLevel + i * stepHeight + railingHeight / 2;
        railingRight.position.z = position.z + i * stepDepth * stepDirection;
        railingRight.material = railingMaterial;
        stairMeshes.push(railingRight);
      }

      // Only add railings to the floor if it's not the last part
      if (!isLastPart && floorMesh) {
        const floorEndYPosition =
          startingYLevel + numSteps * stepHeight + railingHeight / 2;

        // Fix the position of the left side railing on the floor
        const floorSideRailingLeft = BABYLON.MeshBuilder.CreateBox(
          `floor_side_railing_left`,
          {
            width: railingThickness,
            height: railingHeight,
            depth: floorDepth,
          },
          this.scene
        );

        floorSideRailingLeft.position.x =
          floorMesh.position.x - floorWidth / 2 - railingThickness / 2;
        floorSideRailingLeft.position.y = floorEndYPosition;
        floorSideRailingLeft.position.z = floorMesh.position.z;
        floorSideRailingLeft.material = railingMaterial;
        stairMeshes.push(floorSideRailingLeft);

        const floorSideRailingRight = BABYLON.MeshBuilder.CreateBox(
          `floor_side_railing_right`,
          {
            width: railingThickness,
            height: railingHeight,
            depth: floorDepth,
          },
          this.scene
        );

        floorSideRailingRight.position.x =
          floorMesh.position.x + floorWidth / 2 + railingThickness / 2;
        floorSideRailingRight.position.y = floorEndYPosition;
        floorSideRailingRight.position.z = floorMesh.position.z;
        floorSideRailingRight.material = railingMaterial;
        stairMeshes.push(floorSideRailingRight);
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

    stairs.name = name;
    return stairs;
  }
  createTree(position, scale) {
    const trunkHeight = 2 * scale;
    const trunkDiameter = 0.3 * scale;
    // Create the trunk of the tree
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
    trunk.material.diffuseColor = new BABYLON.Color3(0.35, 0.16, 0.14); // Brown color for the trunk
    // Create the foliage of the tree with controlled randomness
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
    // Create transparent glass material
    const glassMaterial = new BABYLON.StandardMaterial(
      "glassMaterial",
      this.scene
    );
    glassMaterial.diffuseColor = new BABYLON.Color3(
      203 / 255,
      211 / 255,
      225 / 255
    );

    glassMaterial.alpha = 0.5;
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
      // Outer path
      const outerX =
        center.x + (radius - 0.1 + stepDepth) * Math.cos(angle - 0.25);
      const outerZ =
        center.z + (radius - 0.1 + stepDepth) * Math.sin(angle - 0.25);
      outerPath.push(new BABYLON.Vector3(outerX, y, outerZ));
      outerPath.push(
        new BABYLON.Vector3(outerX, y + railingHeight + 0.1, outerZ)
      );
      // Inner path
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
    // Create the inner glass wall
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
