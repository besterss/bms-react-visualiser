import * as BABYLON from "babylonjs";

export const setupSceneLighting = (scene) => {
  // Main Directional Light (shadow caster) from bottom-left to top-right
  const mainDirectionalLight = new BABYLON.DirectionalLight(
    "mainDirectionalLight",
    new BABYLON.Vector3(1, -2, 1), // Direction from bottom-left to top-right
    scene
  );
  mainDirectionalLight.position = new BABYLON.Vector3(-200, 300, -200);
  mainDirectionalLight.intensity = 0.1; // Strong intensity for clearer shadows

  // Shadow generator setup for the main directional light
  const shadowGenerator = new BABYLON.ShadowGenerator(
    4096,
    mainDirectionalLight
  );
  shadowGenerator.usePercentageCloserFiltering = true; // Use advanced filtering for better shadow detail
  shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_MEDIUM; // High-quality shadows

  // Hemispheric Light for general ambient lighting from above
  const hemisphericLight = new BABYLON.HemisphericLight(
    "hemisphericLight",
    new BABYLON.Vector3(0, -1, 0), // Light from above
    scene
  );
  hemisphericLight.intensity = 1.7; // Ambient light for overall illumination

  // Omnidirectional light source to provide subtle fill from all directions
  const omniFillLight = new BABYLON.PointLight(
    "omniFillLight",
    new BABYLON.Vector3(0, 400, 0), // Position higher up for even distribution
    scene
  );
  omniFillLight.intensity = 1; // Low intensity to subtly illuminate shadowed spots

  return {
    mainDirectionalLight,
    shadowGenerator,
    hemisphericLight,
    omniFillLight,
  };
};
