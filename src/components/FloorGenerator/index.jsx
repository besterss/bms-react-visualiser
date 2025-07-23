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
    // Wall materials
    this.materials.wallOpaque = new BABYLON.StandardMaterial(
      "wallOpaqueMat",
      this.scene
    );
    this.materials.wallOpaque.diffuseColor = new BABYLON.Color3(1, 1, 1); // White
    this.materials.wallOpaque.specularColor = new BABYLON.Color3(0, 0, 0);
    this.materials.wallOpaque.alpha = 1.0;

    // Transparent materials
    this.materials.allFloorsTransparent = new BABYLON.StandardMaterial(
      "allFloorsTransparentMat",
      this.scene
    );
    this.materials.allFloorsTransparent.diffuseColor = new BABYLON.Color3(
      0.8,
      0.8,
      0.8
    );
    this.materials.allFloorsTransparent.backFaceCulling = false;
    this.materials.allFloorsTransparent.alpha = 0.35;
    this.materials.allFloorsTransparent.transparencyMode =
      BABYLON.Material.MATERIAL_ALPHABLEND;

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
    this.materials.undergroundTransparent.alpha = 0.25;
    this.materials.undergroundTransparent.transparencyMode =
      BABYLON.Material.MATERIAL_ALPHABLEND;

    // Default floor materials
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
    this.materials.floorDefault.alpha = 1.0;

    this.materials.floorDefaultTransparent = new BABYLON.StandardMaterial(
      "floorDefaultTransparentMat",
      this.scene
    );
    this.materials.floorDefaultTransparent.diffuseColor = new BABYLON.Color3(
      0.83,
      0.85,
      0.85
    );
    this.materials.floorDefaultTransparent.backFaceCulling = false;
    this.materials.floorDefaultTransparent.alpha = 0.35;
    this.materials.floorDefaultTransparent.transparencyMode =
      BABYLON.Material.MATERIAL_ALPHABLEND;
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

  createRoomMaterial(color, isTransparent) {
    const material = new BABYLON.StandardMaterial(
      `roomMat_${Math.random()}`,
      this.scene
    );
    material.diffuseColor = new BABYLON.Color3(color.r, color.g, color.b);
    material.alpha = color.a;
    material.backFaceCulling = false;
    material.transparencyMode = isTransparent
      ? BABYLON.Material.MATERIAL_ALPHABLEND
      : BABYLON.Material.MATERIAL_OPAQUE;
    return material;
  }

  generateFloors() {
    // Process each floor from config
    this.config.floors.forEach((floorConfig, index) => {
      const yLevel =
        index *
        (this.config.visualization.wall_height +
          this.config.visualization.floor_thickness +
          this.config.visualization.floor_spacing);
      const floorResult = this.createFloorFromConfig(floorConfig, yLevel);
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
      });
    });
    return {
      allFloorMeshes: this.allFloorMeshes,
      floorData: this.floorData,
    };
  }

  createFloorFromConfig(floorConfig, yLevel) {
    const floorMeshes = [];
    const floorName = `floor_${floorConfig.id}`;
    const isUnderground = floorConfig.type === "underground";
    const layout = floorConfig.layout;
    const wallHeight = this.config.visualization.wall_height;
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
        segmentMesh.position.y = yLevel;
        segmentMesh.position.z = position.z;
        segmentMesh.isPickable = true;
        segmentMesh.material = this.materials.floorDefault;
        this.shadowGenerator.addShadowCaster(segmentMesh);
        floorMeshes.push(segmentMesh);
      });
    } else if (floorConfig.dimensions) {
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
            temperature: roomTemp,
            wifiSignal: roomWifiSignal,
            floorNumber: floorConfig.id,
            roomIndex: roomIdx,
          };
          floorMeshes.push(roomFloorMesh);
          roomIdx++;
        }
      }
    }

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
            wallThickness,
            isUnderground
          );
          floorMeshes.push(wallMesh);
        }
      } else if (wall.type === "partition") {
        const p1 = new BABYLON.Vector3(wall.start.x, 0, wall.start.z);
        const p2 = new BABYLON.Vector3(wall.end.x, 0, wall.end.z);
        const partitionThickness = wall.partitionWidth || wallThickness;
        wallMesh = this.createWallSegment(
          p1,
          p2,
          `${floorName}_partition_${index}`,
          yLevel,
          wallHeight,
          partitionThickness,
          isUnderground
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
    isUnderground
  ) {
    const wallLength = BABYLON.Vector3.Distance(p1, p2);
    const wall = BABYLON.MeshBuilder.CreateBox(
      name,
      {
        width: wallThickness,
        height: wallHeight,
        depth: wallLength,
      },
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
    wall.material = this.materials.wallOpaque;
    this.shadowGenerator.addShadowCaster(wall); // Ensure wall is set to cast shadows
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

    // Ensure shortest path on the circle
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
        cap: BABYLON.Mesh.CAP_END, // Use CAP_END to flatten the top
      },
      this.scene
    );

    // Convert to flat shaded mesh to ensure a flat top
    curvedWall.convertToFlatShadedMesh();

    // Assign the appropriate material
    curvedWall.material = isUnderground
      ? this.materials.undergroundTransparent
      : this.materials.wallOpaque;

    // Optional: Disable receiving shadows for consistent appearance
    curvedWall.receiveShadows = false;
    this.shadowGenerator.addShadowCaster(curvedWall); // Ensure curved wall casts shadows
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
      // If radius is zero, create a solid cylinder/pillar
      circularWall = BABYLON.MeshBuilder.CreateCylinder(
        name,
        {
          height: wallHeight,
          diameter: wallThickness,
        },
        this.scene
      );
    } else {
      // Create the outer cylinder mesh
      const outerCylinder = BABYLON.MeshBuilder.CreateCylinder(
        `${name}_outer`,
        {
          height: wallHeight,
          diameter: 2 * (radius + wallThickness / 2),
        },
        this.scene
      );

      // Create the inner cylinder mesh (to subtract from outer)
      const innerCylinder = BABYLON.MeshBuilder.CreateCylinder(
        `${name}_inner`,
        {
          height: wallHeight + 1, // Slightly taller to ensure correct boolean operation
          diameter: 2 * radius,
          updatable: false,
          sideOrientation: BABYLON.Mesh.DOUBLESIDE,
        },
        this.scene
      );

      // Perform a boolean subtraction to create hollow circular wall
      circularWall = BABYLON.CSG.FromMesh(outerCylinder)
        .subtract(BABYLON.CSG.FromMesh(innerCylinder))
        .toMesh(
          name,
          isUnderground
            ? this.materials.undergroundTransparent
            : this.materials.wallOpaque,
          this.scene
        );

      // Clean up the temporary meshes
      outerCylinder.dispose();
      innerCylinder.dispose();
    }

    // Positioning the circular wall
    circularWall.position.set(center.x, yLevel + wallHeight / 2, center.z);

    // Ensure normals are recalculated correctly
    circularWall.convertToFlatShadedMesh();

    // Apply the appropriate material with transparency
    const material = isUnderground
      ? this.materials.undergroundTransparent
      : this.materials.wallOpaque;
    material.alpha = 0.35; // Adjust transparency level
    material.transparencyMode = BABYLON.Material.MATERIAL_ALPHABLEND;
    circularWall.material = material;

    this.shadowGenerator.addShadowCaster(circularWall); // Ensure circular wall casts shadows
    return circularWall;
  }
}
