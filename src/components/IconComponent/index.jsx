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
  healthStatus,
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
        { height: 2.5, diameter: circleRange * 2, tessellation: 64 },
        scene
      );
      circle.position.set(positionX, yPosition + 0.5, positionZ);
      circle.material = new BABYLON.StandardMaterial("circleMaterial", scene);

      // Setting circle color based on healthStatus
      switch (healthStatus) {
        case "Good":
          circle.material.diffuseColor = new BABYLON.Color3(0, 1, 0); // Green
          break;
        case "Average":
          circle.material.diffuseColor = new BABYLON.Color3(1, 0.65, 0); // Orange
          break;
        case "Unstable":
          circle.material.diffuseColor = new BABYLON.Color3(1, 0, 0); // Red
          break;
        default:
          circle.material.diffuseColor = new BABYLON.Color3(0.5, 0.5, 1); // Default color
      }

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
    showCircle,
    healthStatus, // Added as a dependency
  ]);

  return null;
};

export default IconComponent;
