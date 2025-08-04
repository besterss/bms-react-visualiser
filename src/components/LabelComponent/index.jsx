import React, { useEffect } from "react";
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";

const LabelComponent = ({
  scene,
  positionX,
  positionZ,
  text,
  floorIndex,
  config,
}) =>
  useEffect(() => {
    if (!scene || typeof floorIndex !== "number" || !config) return;

    const wall_height = config.visualization.wall_height;
    const floor_thickness = config.visualization.floor_thickness;
    const floor_spacing = config.visualization.floor_spacing;
    const room_floor_height = config.visualization.room_floor_height;

    const yOffset = wall_height + floor_thickness + floor_spacing;
    const yPosition = Math.max(
      0,
      floorIndex * yOffset + room_floor_height + 0.2
    );

    // Nastav rozlišení textury a poměr
    const textureWidth = 1024;
    const textureHeight = 256;
    const dynamicTexture = new BABYLON.DynamicTexture(
      "DynamicTexture",
      { width: textureWidth, height: textureHeight },
      scene
    );
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(text, null, 140, "600 46px Roboto", true);

    const material = new BABYLON.StandardMaterial("TextMaterial", scene);
    material.diffuseTexture = dynamicTexture;
    material.emissiveColor = new BABYLON.Color3(1, 1, 1);
    material.specularColor = new BABYLON.Color3(0, 0, 0);

    // Vytvořte rovinu s odpovídajícími rozměry
    const planeWidth = 12;
    const planeHeight = planeWidth * (textureHeight / textureWidth);
    const plane = BABYLON.MeshBuilder.CreatePlane(
      "TextPlane",
      { width: planeWidth, height: planeHeight },
      scene
    );
    plane.material = material;
    plane.position.set(positionX, yPosition, positionZ);
    plane.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
    plane.isPickable = false;

    // Funkce pro vyčištění
    return () => {
      plane.dispose();
      dynamicTexture.dispose();
      material.dispose();
    };
  }, [scene, positionX, positionZ, text, floorIndex, config]);

export default LabelComponent;
