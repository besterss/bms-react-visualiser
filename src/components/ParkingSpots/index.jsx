import React, { useEffect } from "react";
import * as BABYLON from "babylonjs";
import * as GUI from "@babylonjs/gui";

const ParkingSpots = ({ scene, parkingConfig }) => {
  useEffect(() => {
    if (!scene || !parkingConfig) return;

    const freeMaterial = new BABYLON.StandardMaterial("freeMaterial", scene);
    freeMaterial.diffuseColor = new BABYLON.Color3(
      120 / 255,
      190 / 255,
      142 / 255
    );
    freeMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

    const reservedMaterial = new BABYLON.StandardMaterial(
      "reservedMaterial",
      scene
    );
    reservedMaterial.diffuseColor = new BABYLON.Color3(
      150 / 255,
      150 / 255,
      150 / 255
    );
    reservedMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

    const occupiedMaterial = new BABYLON.StandardMaterial(
      "occupiedMaterial",
      scene
    );
    occupiedMaterial.diffuseColor = new BABYLON.Color3(
      230 / 255,
      125 / 255,
      115 / 255
    );
    occupiedMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

    const borderMaterial = new BABYLON.StandardMaterial(
      "borderMaterial",
      scene
    );
    borderMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);

    const createdADTs = [];

    // Posun o -0.2 podle požadavku
    const Y_OFFSET = -0.2;

    // Výchozí střed, aby se vizuálně zachovalo chování jako dříve:
    const DEFAULT_CENTER_Y = 3.5;
    const DEFAULT_HEIGHT = 0.2;
    const defaultFloorY = DEFAULT_CENTER_Y - DEFAULT_HEIGHT / 2;

    // globální floorY: priorita parkingConfig.floorY / parkingConfig.yLevel, jinak defaultFloorY
    const globalFloorY =
      typeof parkingConfig.floorY !== "undefined"
        ? parkingConfig.floorY
        : typeof parkingConfig.yLevel !== "undefined"
        ? parkingConfig.yLevel
        : defaultFloorY;

    parkingConfig.forEach((spot, index) => {
      const width = Math.abs(spot.end.x - spot.start.x);
      const depth = Math.abs(spot.end.z - spot.start.z);
      const positionX = (spot.start.x + spot.end.x) / 2;
      const positionZ = (spot.start.z + spot.end.z) / 2;
      const height = DEFAULT_HEIGHT;

      // priorita: spot.floorY / spot.yLevel -> globální -> default (tak, aby střed byl 3.5)
      const floorY =
        typeof spot.floorY !== "undefined"
          ? spot.floorY
          : typeof spot.yLevel !== "undefined"
          ? spot.yLevel
          : globalFloorY;

      // aplikujeme posun Y_OFFSET (posune vše o -0.2)
      const centerY = floorY + height / 2 + Y_OFFSET;
      const topY = floorY + height + Y_OFFSET;

      const parkingSpot = BABYLON.MeshBuilder.CreateBox(
        `spot${index}`,
        { height, width, depth },
        scene
      );
      parkingSpot.position = new BABYLON.Vector3(positionX, centerY, positionZ);

      let baseMaterial;
      switch (spot.status) {
        case "occupied":
          baseMaterial = occupiedMaterial;
          break;
        case "reserved":
          baseMaterial = reservedMaterial;
          break;
        default:
          baseMaterial = freeMaterial;
          break;
      }
      parkingSpot.material = baseMaterial;

      const borderThickness = 0.1;
      const borderHeight = 0.1;
      const borderY = topY + borderHeight / 2;

      const createBorder = (w, h, d, x, y, z, idx) => {
        const border = BABYLON.MeshBuilder.CreateBox(
          `spotBorder${index}_${idx}`,
          { height: h, width: w, depth: d },
          scene
        );
        border.position = new BABYLON.Vector3(x, y, z);
        border.material = borderMaterial;
      };

      createBorder(
        width,
        borderHeight,
        borderThickness,
        positionX,
        borderY,
        positionZ + depth / 2,
        0
      );
      createBorder(
        width,
        borderHeight,
        borderThickness,
        positionX,
        borderY,
        positionZ - depth / 2,
        1
      );
      createBorder(
        borderThickness,
        borderHeight,
        depth,
        positionX - width / 2,
        borderY,
        positionZ,
        2
      );
      createBorder(
        borderThickness,
        borderHeight,
        depth,
        positionX + width / 2,
        borderY,
        positionZ,
        3
      );

      const labelSize = Math.min(
        2,
        Math.max(0.5, Math.min(width, depth) * 0.8)
      );
      const numberPlane = BABYLON.MeshBuilder.CreatePlane(
        `spotNumber${index}`,
        { size: labelSize },
        scene
      );
      const numberY = topY + 0.01;
      numberPlane.position = new BABYLON.Vector3(positionX, numberY, positionZ);
      numberPlane.rotation.x = Math.PI / 2;

      const advancedTexture =
        GUI.AdvancedDynamicTexture.CreateForMesh(numberPlane);
      createdADTs.push(advancedTexture);
      const textBlock = new GUI.TextBlock();
      textBlock.text = `${index + 1}`;
      textBlock.color = "white";
      textBlock.fontSize = 800;
      textBlock.fontWeight = 900;
      advancedTexture.addControl(textBlock);
    });

    return () => {
      // dispose všech meshů, které začínají "spot"
      scene.meshes
        .filter((mesh) => mesh.name.startsWith("spot"))
        .forEach((mesh) => mesh.dispose());

      // dispose ADT textur
      createdADTs.forEach((adt) => {
        try {
          adt.dispose();
        } catch (e) {}
      });
    };
  }, [scene, parkingConfig]);

  return null;
};

export default ParkingSpots;
