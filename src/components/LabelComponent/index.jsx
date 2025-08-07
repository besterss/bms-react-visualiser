import React, { useEffect } from "react";
import * as BABYLON from "babylonjs";

const LabelComponent = ({
  scene,
  positionX,
  positionZ,
  text,
  floorIndex, // index patra v poli config.floors
  config,
}) =>
  useEffect(() => {
    if (!scene || typeof floorIndex !== "number" || !config) return;

    // 1) Spočítáme „yLevel“ jako součet výšek všech předchozích pater
    let yLevel = 0;
    for (let i = 0; i < floorIndex; i++) {
      const fc = config.floors[i];
      // pro 1. NP (id === 0) používáme wall_height_1NP, pro ostatní wall_height
      const wallH =
        fc.id === 0
          ? config.visualization.wall_height_1NP
          : config.visualization.wall_height;
      yLevel +=
        wallH +
        config.visualization.floor_thickness +
        config.visualization.floor_spacing;
    }

    // 2) Přidáme ještě samotnou tloušťku podlahy + malý offset pro zobrazení štítku nad podlahou
    const yPosition =
      yLevel + config.visualization.room_floor_height + /*padding*/ 0.2;

    // 3) Vytvoříme štítek stejně jako doteď
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
      "transparent",
      true
    );

    const material = new BABYLON.StandardMaterial("TextMaterial", scene);
    material.diffuseTexture = dynamicTexture;
    material.emissiveColor = new BABYLON.Color3(1, 1, 1);
    material.specularColor = new BABYLON.Color3(0, 0, 0);

    const planeWidth = 12;
    const planeHeight = planeWidth * (textureHeight / textureWidth);
    const plane = BABYLON.MeshBuilder.CreatePlane(
      "labelPlane",
      { width: planeWidth, height: planeHeight },
      scene
    );
    plane.material = material;
    plane.position.set(positionX, yPosition, positionZ);
    plane.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
    plane.isPickable = false;

    return () => {
      plane.dispose();
      dynamicTexture.dispose();
      material.dispose();
    };
  }, [scene, positionX, positionZ, text, floorIndex, config]);

export default LabelComponent;
