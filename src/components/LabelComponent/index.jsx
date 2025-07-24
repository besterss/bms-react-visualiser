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

    // Calculate y position based on floorIndex and config parameters
    const yPosition =
      floorIndex *
        (config.visualization.wall_height +
          config.visualization.floor_thickness +
          config.visualization.floor_spacing) +
      config.visualization.room_floor_height +
      0.25; // Offset above the floor

    // Create a plane to hold the label
    const planeSize = 50;
    const plane = BABYLON.MeshBuilder.CreatePlane(
      "label",
      { size: planeSize },
      scene
    );

    // Position the plane correctly
    plane.position = new BABYLON.Vector3(positionX, yPosition, positionZ);
    plane.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
    plane.isPickable = false;

    // Create texture and attach text
    const textureResolution = 2048;
    const advancedTexture = GUI.AdvancedDynamicTexture.CreateForMesh(
      plane,
      textureResolution,
      textureResolution
    );
    const textBlock = new GUI.TextBlock();
    textBlock.text = text;
    textBlock.color = "black";
    textBlock.fontSize = 18;
    textBlock.fontWeight = 500;
    advancedTexture.addControl(textBlock);

    // Cleanup function to remove the plane when the component unmounts or dependencies change
    return () => {
      plane.dispose();
    };
  }, [scene, positionX, positionZ, text, floorIndex, config]);

  return null;
};

export default LabelComponent;
