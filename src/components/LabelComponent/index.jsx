import React from "react";
import * as BABYLON from "babylonjs";
import * as GUI from "@babylonjs/gui";

const LabelComponent = ({ scene, positionX, positionZ, text, floorIndex }) => {
  React.useEffect(() => {
    if (!scene || typeof floorIndex !== "number") return;

    // Create a plane to hold the label.
    const planeSize = 50;
    const plane = BABYLON.MeshBuilder.CreatePlane("label", { size: planeSize }, scene);

    // Calculate y position based on floorIndex logic
    const yPosition = floorIndex * 3.45 + 0.25; // Position above the floor with some offset
    // Position the plane correctly
    plane.position = new BABYLON.Vector3(positionX, yPosition, positionZ);
    plane.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;

    // Create texture and attach text
    const textureResolution = 2048;
    const advancedTexture = GUI.AdvancedDynamicTexture.CreateForMesh(plane, textureResolution, textureResolution);
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
  }, [scene, positionX, positionZ, text, floorIndex]);

  return null;
};

export default LabelComponent;