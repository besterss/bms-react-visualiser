import * as BABYLON from "babylonjs";
import { CONFIG_DATA } from "../BuildingLayoutConfig";

const calculateColorFromSensors = (
  x,
  z,
  sensors,
  maxInfluenceDistance,
  colorMin,
  colorMax
) => {
  let totalInfluence = 0;
  sensors.forEach((sensor) => {
    const dx = sensor.x - x;
    const dz = sensor.z - z;
    const distance = Math.sqrt(dx * dx + dz * dz);
    const influence = Math.max(
      0,
      (maxInfluenceDistance - distance) / maxInfluenceDistance
    );
    totalInfluence = Math.max(totalInfluence, influence);
  });

  return BABYLON.Color3.Lerp(colorMin, colorMax, totalInfluence);
};

export const createBubblesForFloor = (
  scene,
  floorMesh,
  bubbleDiameter,
  spacing,
  bubbleHeight,
  sensors,
  maxInfluenceDistance,
  colorMin,
  colorMax
) => {
  const bubbles = [];

  const bubbleAreaSize = 36;
  const boundingBox = floorMesh.getBoundingInfo().boundingBox;
  const centerX = (boundingBox.maximum.x + boundingBox.minimum.x) / 2;
  const centerZ = (boundingBox.maximum.z + boundingBox.minimum.z) / 2;

  const numBubblesX = Math.floor(bubbleAreaSize / spacing);
  const numBubblesZ = Math.floor(bubbleAreaSize / spacing);
  const offsetX =
    (boundingBox.maximum.x -
      boundingBox.minimum.x -
      (numBubblesX - 1) * spacing) /
    2;
  const offsetZ =
    (boundingBox.maximum.z -
      boundingBox.minimum.z -
      (numBubblesZ - 1) * spacing) /
    2;

  for (let i = 0; i < numBubblesX; i++) {
    for (let j = 0; j < numBubblesZ; j++) {
      const xPosition = boundingBox.minimum.x + offsetX + i * spacing;
      const zPosition = boundingBox.minimum.z + offsetZ + j * spacing;

      const bubbleColor = calculateColorFromSensors(
        i * spacing,
        j * spacing,
        sensors,
        maxInfluenceDistance,
        colorMin,
        colorMax
      );

      const bubble = BABYLON.MeshBuilder.CreateSphere(
        "bubble",
        { diameter: bubbleDiameter },
        scene
      );
      bubble.position = new BABYLON.Vector3(
        xPosition,
        floorMesh.position.y + bubbleHeight,
        zPosition
      );

      const bubbleMaterial = new BABYLON.StandardMaterial("bubbleMat", scene);
      bubbleMaterial.diffuseColor = bubbleColor;
      bubbleMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
      bubbleMaterial.alpha = 0.8;

      bubble.material = bubbleMaterial;
      bubbles.push(bubble);
    }
  }
  return bubbles;
};

export const showBubblesOnActiveFloor = (
  scene,
  activeFloorId,
  allFloorMeshes,
  showTemperature,
  showWifi,
  showAirQuality
) => {
  clearBubbles(scene);
  const activeFloorConfig = CONFIG_DATA.floors.find(
    (floor) => floor.id === activeFloorId
  );
  const activeFloorMeshes = allFloorMeshes.find((floorMeshes) =>
    floorMeshes.some(
      (mesh) => mesh.metadata && mesh.metadata.floorNumber === activeFloorId
    )
  );

  if (activeFloorMeshes && activeFloorConfig) {
    const spacing = 1.0;
    const maxInfluenceDistance = 10;

    activeFloorMeshes.forEach((mesh) => {
      if (mesh.metadata && mesh.metadata.floorNumber === activeFloorId) {
        if (
          showTemperature &&
          activeFloorConfig.sensors.temperature.length > 0
        ) {
          createBubblesForFloor(
            scene,
            mesh,
            0.75,
            spacing,
            1,
            activeFloorConfig.sensors.temperature,
            maxInfluenceDistance,
            new BABYLON.Color3(1, 0.8, 0.8),
            new BABYLON.Color3(1, 0, 0)
          );
        }
        if (showWifi && activeFloorConfig.sensors.wifi.length > 0) {
          createBubblesForFloor(
            scene,
            mesh,
            0.75,
            spacing,
            1.5,
            activeFloorConfig.sensors.wifi,
            maxInfluenceDistance,
            new BABYLON.Color3(0.8, 1, 0.8),
            new BABYLON.Color3(0, 1, 0)
          );
        }
        if (showAirQuality && activeFloorConfig.sensors.airQuality.length > 0) {
          createBubblesForFloor(
            scene,
            mesh,
            0.75,
            spacing,
            2,
            activeFloorConfig.sensors.airQuality,
            maxInfluenceDistance,
            new BABYLON.Color3(0.8, 0.8, 1),
            new BABYLON.Color3(0, 0, 1)
          );
        }
      }
    });
  }
};

export const clearBubbles = (scene) => {
  scene.meshes
    .filter((mesh) => mesh.name.startsWith("bubble"))
    .forEach((bubble) => bubble.dispose());
};
