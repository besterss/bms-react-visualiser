// Update your IconComponent.js

import React, { useEffect } from "react";
import * as BABYLON from "babylonjs";
import * as GUI from "@babylonjs/gui";

const IconComponent = ({
  scene,
  positionX,
  positionZ,
  text,
  type,
  floorIndex,
  config,
  onSelect,
  isSelected,
  showCircle,
}) => {
  useEffect(() => {
    if (!scene || typeof floorIndex !== "number" || !config) return;
    const wall_height = config.visualization.wall_height;
    const floor_thickness = config.visualization.floor_thickness;
    const yOffset = wall_height + floor_thickness;
    const yPosition = Math.max(0, floorIndex * yOffset + 1);
    const planeSize = 8;
    const plane = BABYLON.MeshBuilder.CreatePlane(
      `icon-${text}`,
      { size: planeSize },
      scene
    );

    plane.position.set(positionX, yPosition, positionZ);
    plane.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
    plane.isPickable = true;
    const iconTexture = GUI.AdvancedDynamicTexture.CreateForMesh(plane);
    const iconBlock = new GUI.TextBlock();
    iconBlock.text = text;
    iconBlock.color = isSelected ? "#7F7FFF" : "white";
    iconBlock.fontSize = "100px";
    iconBlock.fontFamily = "FontAwesome";
    iconTexture.addControl(iconBlock);

    let circle;
    if (type === "wifi") {
      const circleRange = 10;
      circle = BABYLON.MeshBuilder.CreateCylinder(
        `range-circle-${text}`,
        { height: 2.85, diameter: circleRange * 2, tessellation: 64 },
        scene
      );
      circle.position.set(positionX, yPosition + 1, positionZ);
      circle.material = new BABYLON.StandardMaterial("circleMaterial", scene);
      circle.material.diffuseColor = new BABYLON.Color3(0.5, 0.5, 1);
      circle.material.specularColor = new BABYLON.Color3(0, 0, 0);
      circle.material.alpha = 0.3;
      circle.isPickable = false;
      circle.setEnabled(showCircle);
    }

    const pointerObserver = scene.onPointerObservable.add((pointerInfo) => {
      if (
        pointerInfo.type === BABYLON.PointerEventTypes.POINTERPICK &&
        pointerInfo.pickInfo.hit &&
        pointerInfo.pickInfo.pickedMesh === plane
      ) {
        onSelect();
      }
    });

    return () => {
      scene.onPointerObservable.remove(pointerObserver);
      iconTexture.dispose();
      plane.dispose();
      if (circle) {
        circle.dispose();
      }
    };
  }, [
    scene,
    positionX,
    positionZ,
    text,
    type,
    floorIndex,
    config,
    isSelected,
    onSelect,
    showCircle, // Watch for changes to showCircle
  ]);

  return null;
};

export default IconComponent;
