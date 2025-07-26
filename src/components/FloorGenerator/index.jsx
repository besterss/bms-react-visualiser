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

    const { shadowGenerator } = setupSceneLighting(this.scene);
    this.shadowGenerator = shadowGenerator;
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
    ); // Gray
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
    this.materials.glass.diffuseColor = new BABYLON.Color3(0, 0, 0);

    // Higher transparency for more frosted look
    this.materials.glass.alpha = 0.2; // Adjust as needed

    // Ensure backface culling to improve render efficiency
    this.materials.glass.backFaceCulling = true;

    // Low specular intensity for minimal shininess
    this.materials.glass.specularColor = new BABYLON.Color3(0.2, 0.2, 0.2);

    // Transparency mode settings
    this.materials.glass.transparencyMode =
      BABYLON.Material.MATERIAL_ALPHABLEND;
    this.materials.glass.needDepthPrePass = true;
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

  generateFloors() {
    this.config.floors.forEach((floorConfig, index) => {
      const yLevel =
        index *
        (this.config.visualization.wall_height +
          this.config.visualization.floor_thickness +
          this.config.visualization.floor_spacing);

      // Correctly determining if the floor is underground
      const isUnderground = floorConfig.type === "underground";

      // Pass isUnderground to the createFloorFromConfig method
      const floorResult = this.createFloorFromConfig(
        floorConfig,
        yLevel,
        isUnderground
      );

      // Register floors to receive shadows
      floorResult.meshes.forEach((mesh) => {
        if (mesh.name.includes("floor")) {
          mesh.receiveShadows = true;
        }
      });

      this.allFloorMeshes.push(floorResult.meshes);
      this.floorData.push({
        floorNumber: floorConfig.id,
        name: floorConfig.name,
        area: floorResult.area,
        type: floorConfig.type,
        isUnderground, // Store underground info for later use
      });
    });

    return {
      allFloorMeshes: this.allFloorMeshes,
      floorData: this.floorData,
    };
  }

  createFloorFromConfig(floorConfig, yLevel, isUnderground) {
    const floorMeshes = [];
    const floorName = `floor_${floorConfig.id}`;
    const layout = floorConfig.layout;
    const wallHeight = this.config.visualization.wall_height;
    const wallThickness = this.config.visualization.wall_thickness;
    const roomFloorHeight = this.config.visualization.room_floor_height;

    // Handle segments
    if (floorConfig.segments) {
      floorConfig.segments.forEach((segmentConfig) => {
        const { width, depth, position } = segmentConfig;
        const segmentMesh = BABYLON.MeshBuilder.CreateBox(
          `${floorName}_segment`,
          { width: width - 0.1, height: roomFloorHeight, depth: depth - 0.1 },
          this.scene
        );
        segmentMesh.position.x = position.x;
        segmentMesh.position.y = yLevel;
        segmentMesh.position.z = position.z;
        segmentMesh.isPickable = true;
        segmentMesh.material = this.materials.floorDefault;
        segmentMesh.metadata = {
          floorNumber: floorConfig.id,
        };
        this.shadowGenerator.addShadowCaster(segmentMesh);
        floorMeshes.push(segmentMesh);
      });
    } else if (floorConfig.dimensions) {
      // Handle rooms grid
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
          const roomTemp = floorConfig.temperature_data[roomIdx] || 20;
          const roomWifiSignal = floorConfig.wifi_signal_data[roomIdx] || 2;
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

    // Handle walls
    layout.walls.forEach((wall, index) => {
      let wallMesh;
      if (wall.type === "outline") {
        for (let i = 0; i < wall.points.length; i++) {
          const p1 = new BABYLON.Vector3(wall.points[i].x, 0, wall.points[i].z);
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
        const materialType = wall.materialType || "opaque";
        wallMesh = this.createWallSegment(
          p1,
          p2,
          `${floorName}_partition_${index}_${materialType}`,
          yLevel,
          wallHeight,
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
      }
      if (wallMesh) {
        this.shadowGenerator.addShadowCaster(wallMesh);
      }
    });

    const area = floorConfig.segments
      ? floorConfig.segments.reduce(
          (total, segment) => total + segment.width * segment.depth,
          0
        )
      : floorConfig.dimensions
      ? floorConfig.dimensions.width * floorConfig.dimensions.depth
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
}
