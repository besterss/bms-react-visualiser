import React, { useEffect } from "react";
import * as BABYLON from "babylonjs";
import * as GUI from "@babylonjs/gui";

const IconComponent = ({
  scene,
  positionX,
  positionZ,
  text = "\uf2c7",
  label = "Camera",
  status = "Disconnected",
  floorIndex,
  config,
  onSelect,
  isSelected,
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
    };
  }, [
    scene,
    positionX,
    positionZ,
    text,
    label,
    status,
    floorIndex,
    config,
    isSelected,
    onSelect,
  ]);

  return null;
};

export default IconComponent;
