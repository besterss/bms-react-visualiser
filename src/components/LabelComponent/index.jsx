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
}) => {
  useEffect(() => {
    if (!scene || typeof floorIndex !== "number" || !config) return;

    const { wall_height, floor_thickness, floor_spacing, room_floor_height } =
      config.visualization;
    const yOffset = wall_height + floor_thickness + floor_spacing;
    const yPosition = Math.max(
      0,
      floorIndex * yOffset + room_floor_height + 0.2
    );

    const textureWidth = 1024;
    const textureHeight = 256;
    const dynamicTexture = new BABYLON.DynamicTexture(
      "DynamicTexture",
      { width: textureWidth, height: textureHeight },
      scene
    );
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(
      text,
      null,
      140,
      "600 46px Roboto",
      "black",
      "transparent"
    );

    const material = new BABYLON.StandardMaterial("TextMaterial", scene);
    material.diffuseTexture = dynamicTexture;
    material.emissiveColor = BABYLON.Color3.White();
    material.specularColor = BABYLON.Color3.Black();

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

    return () => {
      plane.dispose();
      material.dispose();
      dynamicTexture.dispose();
    };
  }, [scene, positionX, positionZ, text, floorIndex, config]);

  return null;
};

export default LabelComponent;
