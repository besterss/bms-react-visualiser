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

    // proměnné pro cleanup
    let plane = null;
    let iconTexture = null;
    let circle = null;
    let pointerObserver = null;
    let canceled = false;

    document.fonts
      .load('800px "FontAwesome"')
      .then(() => {
        if (canceled) return;

        const { wall_height, floor_thickness } = config.visualization;
        const yOffset = wall_height + floor_thickness;
        const yPosition = Math.max(0, floorIndex * yOffset + 1);
        const planeSize = 1;

        plane = BABYLON.MeshBuilder.CreatePlane(
          `icon-${text}`,
          { size: planeSize },
          scene
        );
        plane.position.set(positionX, yPosition, positionZ);
        plane.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
        plane.isPickable = true;

        iconTexture = GUI.AdvancedDynamicTexture.CreateForMesh(plane);
        const iconBlock = new GUI.TextBlock();
        iconBlock.text = text;
        iconBlock.color = isSelected ? "#7F7FFF" : "white";
        iconBlock.fontSize = "800px";
        iconBlock.fontFamily = "FontAwesome";
        iconTexture.addControl(iconBlock);

        if (type === "wifi") {
          const circleRange = 10;
          circle = BABYLON.MeshBuilder.CreateCylinder(
            `range-circle-${text}`,
            { height: 2.5, diameter: circleRange * 2, tessellation: 64 },
            scene
          );
          circle.position.set(positionX, yPosition + 0.5, positionZ);
          const mat = new BABYLON.StandardMaterial("circleMaterial", scene);
          switch (healthStatus) {
            case "Good":
              mat.diffuseColor = new BABYLON.Color3(0, 1, 0);
              break;
            case "Average":
              mat.diffuseColor = new BABYLON.Color3(1, 0.65, 0);
              break;
            case "Unstable":
              mat.diffuseColor = new BABYLON.Color3(1, 0, 0);
              break;
            default:
              mat.diffuseColor = new BABYLON.Color3(0.5, 0.5, 1);
          }
          mat.specularColor = new BABYLON.Color3(0, 0, 0);
          mat.alpha = 0.3;
          circle.material = mat;
          circle.isPickable = false;
          circle.setEnabled(showCircle);
        }

        pointerObserver = scene.onPointerObservable.add((pi) => {
          if (
            pi.type === BABYLON.PointerEventTypes.POINTERPICK &&
            pi.pickInfo.hit &&
            pi.pickInfo.pickedMesh === plane
          ) {
            onSelect();
          }
        });
      })
      .catch((e) => {
        console.warn("Nepodařilo se načíst FontAwesome:", e);
      });

    // cleanup
    return () => {
      canceled = true;
      if (pointerObserver) {
        scene.onPointerObservable.remove(pointerObserver);
      }
      if (iconTexture) iconTexture.dispose();
      if (plane) plane.dispose();
      if (circle) circle.dispose();
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
    healthStatus,
  ]);

  return null;
};

export default IconComponent;
