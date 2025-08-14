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

    parkingConfig.forEach((spot, index) => {
      const width = Math.abs(spot.end.x - spot.start.x);
      const depth = Math.abs(spot.end.z - spot.start.z);
      const positionX = (spot.start.x + spot.end.x) / 2;
      const positionZ = (spot.start.z + spot.end.z) / 2;
      const height = 0.2;

      const parkingSpot = BABYLON.MeshBuilder.CreateBox(
        `spot${index}`,
        { height, width, depth },
        scene
      );
      parkingSpot.position = new BABYLON.Vector3(positionX, 3.5, positionZ);

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
        3.5 + height / 2,
        positionZ + depth / 2,
        0
      );
      createBorder(
        width,
        borderHeight,
        borderThickness,
        positionX,
        3.5 + height / 2,
        positionZ - depth / 2,
        1
      );
      createBorder(
        borderThickness,
        borderHeight,
        depth,
        positionX - width / 2,
        3.5 + height / 2,
        positionZ,
        2
      );
      createBorder(
        borderThickness,
        borderHeight,
        depth,
        positionX + width / 2,
        3.5 + height / 2,
        positionZ,
        3
      );

      const numberPlane = BABYLON.MeshBuilder.CreatePlane(
        `spotNumber${index}`,
        { size: 2 },
        scene
      );
      numberPlane.position = new BABYLON.Vector3(positionX, 3.7, positionZ);
      numberPlane.rotation.x = Math.PI / 2;

      const advancedTexture =
        GUI.AdvancedDynamicTexture.CreateForMesh(numberPlane);
      const textBlock = new GUI.TextBlock();
      textBlock.text = `${index + 1}`;
      textBlock.color = "white";
      textBlock.fontSize = 800;
      textBlock.fontWeight = 900;
      advancedTexture.addControl(textBlock);
    });

    return () => {
      scene.meshes
        .filter(
          (mesh) =>
            mesh.name.startsWith("spot") || mesh.name.startsWith("spotBorder")
        )
        .forEach((mesh) => mesh.dispose());
    };
  }, [scene, parkingConfig]);

  return null; // No visual component rendered directly by React
};

export default ParkingSpots;
