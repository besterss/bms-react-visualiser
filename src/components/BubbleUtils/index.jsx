import * as BABYLON from "babylonjs";
import { CONFIG_DATA } from "../BuildingLayoutConfig";
const getTemperatureColor = (temperature) => {
  const colors = [
    { temp: 18, color: BABYLON.Color3.FromHexString("#313695") },
    { temp: 21, color: BABYLON.Color3.FromHexString("#74add1") },
    { temp: 23, color: BABYLON.Color3.FromHexString("#ffffff") },
    { temp: 26, color: BABYLON.Color3.FromHexString("#fb9d3f") },
    { temp: 28, color: BABYLON.Color3.FromHexString("#DD3C2D") },
  ];
  if (temperature <= 18) return colors[0].color;
  if (temperature >= 28) return colors[4].color;
  let lowerStop = colors[0];
  let upperStop = colors[1];
  for (let i = 0; i < colors.length - 1; i++) {
    if (temperature >= colors[i].temp && temperature <= colors[i + 1].temp) {
      lowerStop = colors[i];
      upperStop = colors[i + 1];
      break;
    }
  }
  const range = upperStop.temp - lowerStop.temp;
  const positionInRange = (temperature - lowerStop.temp) / range;
  return BABYLON.Color3.Lerp(lowerStop.color, upperStop.color, positionInRange);
};
const calculateTemperatureAtPoint = (x, z, sensors, maxInfluenceDistance) => {
  const defaultTemperature = 23;
  let totalInfluence = 0;
  let weightedTemperature = 0;
  sensors.forEach((sensor) => {
    const dx = sensor.x - x;
    const dz = sensor.z - z;
    const distance = Math.sqrt(dx * dx + dz * dz);
    const influence = Math.max(
      0,
      (maxInfluenceDistance - distance) / maxInfluenceDistance
    );
    const temperatureDifference = sensor.value - defaultTemperature;
    const localTemperature =
      defaultTemperature + temperatureDifference * influence;
    weightedTemperature += localTemperature * influence;
    totalInfluence += influence;
  });
  return totalInfluence > 0
    ? weightedTemperature / totalInfluence
    : defaultTemperature;
};
const getGradientColor = (baseColor, influence) => {
  const whiteColor = BABYLON.Color3.White();
  return BABYLON.Color3.Lerp(baseColor, whiteColor, 1 - influence);
};
const calculateInfluence = (x, z, sensors, maxInfluenceDistance) => {
  let maxInfluence = 0;
  sensors.forEach((sensor) => {
    const dx = sensor.x - x;
    const dz = sensor.z - z;
    const distance = Math.sqrt(dx * dx + dz * dz);
    const influence = Math.max(
      0,
      (maxInfluenceDistance - distance) / maxInfluenceDistance
    );
    maxInfluence = Math.max(maxInfluence, influence);
  });
  return maxInfluence;
};
export const createBubblesForFloor = (
  scene,
  floorMesh,
  bubbleDiameter,
  spacing,
  bubbleHeight,
  sensors,
  maxInfluenceDistance,
  getColorFunction
) => {
  const bubbles = [];
  if (!scene || !floorMesh) return bubbles;
  // Ověření bounding info
  let boundingInfo;
  try {
    if (!floorMesh.getBoundingInfo) return bubbles;
    boundingInfo = floorMesh.getBoundingInfo();
    if (!boundingInfo || !boundingInfo.boundingBox) return bubbles;
  } catch (e) {
    // pokud mesh nemá bounding info, neprovádíme bubliny pro něj
    return bubbles;
  }
  const bubbleAreaSize = 36;
  const boundingBox = boundingInfo.boundingBox;
  const numBubblesX = Math.max(1, Math.floor(bubbleAreaSize / spacing));
  const numBubblesZ = Math.max(1, Math.floor(bubbleAreaSize / spacing));
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
      let bubbleColor;
      if (getColorFunction.name === "getTemperatureColor") {
        const temperature = calculateTemperatureAtPoint(
          xPosition,
          zPosition,
          sensors,
          maxInfluenceDistance
        );
        bubbleColor = getColorFunction(temperature);
      } else {
        const influence = calculateInfluence(
          xPosition,
          zPosition,
          sensors,
          maxInfluenceDistance
        );
        bubbleColor = getColorFunction(influence);
      }
      // pojmenuj bublinu a materiál jedinečněji (prefix bubble_)
      const floorId =
        (floorMesh.metadata && floorMesh.metadata.floorNumber) || "unk";
      const bubbleName = `bubble_${floorId}_${i}_${j}`;
      const bubble = BABYLON.MeshBuilder.CreateSphere(
        bubbleName,
        { diameter: bubbleDiameter },
        scene
      );
      bubble.position = new BABYLON.Vector3(
        xPosition,
        floorMesh.position.y + bubbleHeight,
        zPosition
      );
      const bubbleMatName = `bubbleMat_${floorId}_${i}_${j}`;
      const bubbleMaterial = new BABYLON.StandardMaterial(bubbleMatName, scene);
      // v Babylonu Color4 se používá pro alfa, ale pro diffuseColor použijeme Color3; pokud getColorFunction vrací Color3, použijeme ho přímo
      if (
        bubbleColor.r !== undefined &&
        bubbleColor.g !== undefined &&
        bubbleColor.b !== undefined
      ) {
        // je to Color3 nebo Color4-like; pokud má a (alpha) použijeme, jinak alpha=0.8
        if (bubbleColor.a !== undefined) {
          bubbleMaterial.diffuseColor = new BABYLON.Color3(
            bubbleColor.r,
            bubbleColor.g,
            bubbleColor.b
          );
          bubbleMaterial.alpha = bubbleColor.a;
        } else {
          bubbleMaterial.diffuseColor = new BABYLON.Color3(
            bubbleColor.r,
            bubbleColor.g,
            bubbleColor.b
          );
          bubbleMaterial.alpha = 0.8;
        }
      } else {
        // fallback white
        bubbleMaterial.diffuseColor = BABYLON.Color3.White();
        bubbleMaterial.alpha = 0.8;
      }
      bubbleMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
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
  if (!scene) return;
  clearBubbles(scene);
  const activeFloorConfig = CONFIG_DATA.floors.find(
    (floor) => floor.id === activeFloorId
  );
  if (
    !activeFloorConfig ||
    !Array.isArray(allFloorMeshes) ||
    allFloorMeshes.length === 0
  ) {
    return;
  }
  // Najdi kolekci meshů pro aktivní patro bezpečně
  const activeFloorMeshes = allFloorMeshes.find(
    (floorMeshes) =>
      Array.isArray(floorMeshes) &&
      floorMeshes.some(
        (mesh) =>
          mesh && mesh.metadata && mesh.metadata.floorNumber === activeFloorId
      )
  );
  if (activeFloorMeshes && activeFloorConfig) {
    const spacing = 1.0;
    const maxInfluenceDistance = 10;
    activeFloorMeshes.forEach((mesh) => {
      try {
        if (
          mesh &&
          mesh.metadata &&
          mesh.metadata.floorNumber === activeFloorId
        ) {
          if (
            showTemperature &&
            Array.isArray(activeFloorConfig.sensors?.temperature) &&
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
              getTemperatureColor
            );
          }
          if (
            showAirQuality &&
            Array.isArray(activeFloorConfig.sensors?.airQuality) &&
            activeFloorConfig.sensors.airQuality.length > 0
          ) {
            createBubblesForFloor(
              scene,
              mesh,
              0.75,
              spacing,
              2,
              activeFloorConfig.sensors.airQuality,
              maxInfluenceDistance,
              (influence) =>
                getGradientColor(
                  BABYLON.Color3.FromHexString("#006737"),
                  influence
                ) // Green base for air quality
            );
          }
          // případně wifi (pokud implementuješ)
          if (
            showWifi &&
            Array.isArray(activeFloorConfig.sensors?.wifi) &&
            activeFloorConfig.sensors.wifi.length > 0
          ) {
            createBubblesForFloor(
              scene,
              mesh,
              0.75,
              spacing,
              1.5,
              activeFloorConfig.sensors.wifi,
              maxInfluenceDistance,
              (influence) =>
                getGradientColor(
                  BABYLON.Color3.FromHexString("#2b6cff"),
                  influence
                )
            );
          }
        }
      } catch (e) {
        // pokud něco selže pro konkrétní mesh, pokračuj dál
        // console.warn("create bubble error", e);
      }
    });
  }
};
export const clearBubbles = (scene) => {
  if (!scene || !scene.meshes) return;
  scene.meshes
    .filter((mesh) => mesh.name && mesh.name.startsWith("bubble"))
    .forEach((bubble) => {
      try {
        bubble.dispose();
      } catch (e) {}
    });
};
