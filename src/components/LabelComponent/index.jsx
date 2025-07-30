import React, { useEffect } from "react";
import * as BABYLON from "babylonjs";
import * as GUI from "@babylonjs/gui";

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

    const wall_height = config.visualization.wall_height;
    const floor_thickness = config.visualization.floor_thickness;
    const floor_spacing = config.visualization.floor_spacing;
    const room_floor_height = config.visualization.room_floor_height;

    const yOffset = wall_height + floor_thickness + floor_spacing;

    const yPosition = Math.max(
      0,
      floorIndex * yOffset + room_floor_height + 0.25
    );

    const planeSize = 20;
    const plane = BABYLON.MeshBuilder.CreatePlane(
      `label-${text}`,
      { size: planeSize },
      scene
    );

    plane.position.set(positionX, yPosition, positionZ);
    plane.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
    plane.isPickable = false;

    const smallerTextureResolution = 512;
    const advancedTexture = GUI.AdvancedDynamicTexture.CreateForMesh(
      plane,
      smallerTextureResolution,
      smallerTextureResolution
    );

    const textBlock = new GUI.TextBlock("textBlock");
    textBlock.text = text;
    textBlock.color = "black";
    textBlock.fontSize = "16px";
    textBlock.fontWeight = "normal";
    advancedTexture.addControl(textBlock);

    // Cleanup function
    return () => {
      advancedTexture.dispose();
      plane.dispose();
    };
  }, [scene, positionX, positionZ, text, floorIndex, config]);

  return null;
};

export default LabelComponent;
