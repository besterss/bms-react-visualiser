import React, { useEffect } from "react";
import * as BABYLON from "babylonjs";
import * as GUI from "@babylonjs/gui";

const ParkingSpots = ({ scene, parkingConfig }) => {
  useEffect(() => {
    if (!scene || !parkingConfig) return;

    // Predefine materials for use in the parking spots
    const createMaterial = (scene, name, r, g, b) => {
      const material = new BABYLON.StandardMaterial(name, scene);
      material.diffuseColor = new BABYLON.Color3(r / 255, g / 255, b / 255);
      material.specularColor = new BABYLON.Color3(0, 0, 0);
      return material;
    };

    const freeMaterial = createMaterial(scene, "freeMaterial", 120, 190, 142);
    const reservedMaterial = createMaterial(
      scene,
      "reservedMaterial",
      150,
      150,
      150
    );
    const occupiedMaterial = createMaterial(
      scene,
      "occupiedMaterial",
      230,
      125,
      115
    );
    const borderMaterial = createMaterial(
      scene,
      "borderMaterial",
      255,
      255,
      255
    );

    parkingConfig.forEach((spot, index) => {
      const { start, end, status } = spot;
      const width = Math.abs(end.x - start.x);
      const depth = Math.abs(end.z - start.z);
      const positionX = (start.x + end.x) / 2;
      const positionZ = (start.z + end.z) / 2;
      const height = 0.2;

      // Create parking spot
      const parkingSpot = BABYLON.MeshBuilder.CreateBox(
        `spot${index}`,
        { height, width, depth },
        scene
      );
      parkingSpot.position.set(positionX, 3.5, positionZ);
      parkingSpot.material =
        { occupied: occupiedMaterial, reserved: reservedMaterial }[status] ||
        freeMaterial;

      // Helper function to create borders
      const createBorder = (w, h, d, x, y, z, idx) => {
        const border = BABYLON.MeshBuilder.CreateBox(
          `spotBorder${index}_${idx}`,
          { height: h, width: w, depth: d },
          scene
        );
        border.position.set(x, y, z);
        border.material = borderMaterial;
      };

      const borderYPos = 3.5 + height / 2;
      const borders = [
        {
          w: width,
          h: 0.1,
          d: 0.1,
          x: positionX,
          y: borderYPos,
          z: positionZ + depth / 2,
        },
        {
          w: width,
          h: 0.1,
          d: 0.1,
          x: positionX,
          y: borderYPos,
          z: positionZ - depth / 2,
        },
        {
          w: 0.1,
          h: 0.1,
          d: depth,
          x: positionX - width / 2,
          y: borderYPos,
          z: positionZ,
        },
        {
          w: 0.1,
          h: 0.1,
          d: depth,
          x: positionX + width / 2,
          y: borderYPos,
          z: positionZ,
        },
      ];

      borders.forEach(({ w, h, d, x, y, z }, idx) =>
        createBorder(w, h, d, x, y, z, idx)
      );

      // Create number plane with text
      const numberPlane = BABYLON.MeshBuilder.CreatePlane(
        `spotNumber${index}`,
        { size: 2 },
        scene
      );
      numberPlane.position.set(positionX, 3.7, positionZ);
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

    // Cleanup function to dispose of created meshes
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
