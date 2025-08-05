import * as BABYLON from "babylonjs";
import { CONFIG_DATA } from "../BuildingLayoutConfig";

const colorStops = [
  { temp: 18, color: BABYLON.Color3.FromHexString("#313695") },
  { temp: 21, color: BABYLON.Color3.FromHexString("#74add1") },
  { temp: 23, color: BABYLON.Color3.FromHexString("#ffffff") },
  { temp: 26, color: BABYLON.Color3.FromHexString("#fb9d3f") },
  { temp: 28, color: BABYLON.Color3.FromHexString("#DD3C2D") },
];

const getTemperatureColor = (temperature) => {
  if (temperature <= 18) return colorStops[0].color;
  if (temperature >= 28) return colorStops[4].color;

  for (let i = 0; i < colorStops.length - 1; i++) {
    const lower = colorStops[i];
    const upper = colorStops[i + 1];
    if (temperature >= lower.temp && temperature <= upper.temp) {
      const position = (temperature - lower.temp) / (upper.temp - lower.temp);
      return BABYLON.Color3.Lerp(lower.color, upper.color, position);
    }
  }
};

const getGradientColor = (baseColor, influence) => {
  return BABYLON.Color3.Lerp(baseColor, BABYLON.Color3.White(), 1 - influence);
};

// A material pool, using a weak map to hold onto materials by color
const materialPool = new Map();

const getOrCreateMaterial = (scene, color) => {
  const colorKey = color.toHexString();
  if (!materialPool.has(colorKey)) {
    const material = new BABYLON.StandardMaterial(
      `bubbleMat-${colorKey}`,
      scene
    );
    material.diffuseColor = color;
    material.specularColor = new BABYLON.Color3(0, 0, 0);
    material.alpha = 0.8;
    materialPool.set(colorKey, material);
  }
  return materialPool.get(colorKey);
};

const calculateTemperatureAtPoint = (x, z, sensors, maxInfluenceDistance) => {
  const defaultTemperature = 23;
  let totalInfluence = 0;
  let weightedTemperature = 0;

  sensors.forEach((sensor) => {
    const dx = sensor.x - x;
    const dz = sensor.z - z;
    const distance = dx * dx + dz * dz; // Square of the distance
    if (distance < maxInfluenceDistance * maxInfluenceDistance) {
      // Check without sqrt
      const influence = 1 - Math.sqrt(distance) / maxInfluenceDistance;
      const tempDiff = sensor.value - defaultTemperature;
      const localTemp = defaultTemperature + tempDiff * influence;
      weightedTemperature += localTemp * influence;
      totalInfluence += influence;
    }
  });

  return totalInfluence > 0
    ? weightedTemperature / totalInfluence
    : defaultTemperature;
};

const calculateInfluence = (x, z, sensors, maxInfluenceDistance) => {
  let maxInfluence = 0;
  sensors.forEach((sensor) => {
    const dx = sensor.x - x;
    const dz = sensor.z - z;
    const distance = dx * dx + dz * dz;
    if (distance < maxInfluenceDistance * maxInfluenceDistance) {
      const influence = 1 - Math.sqrt(distance) / maxInfluenceDistance;
      maxInfluence = Math.max(maxInfluence, influence);
    }
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
  const bubbleAreaSize = 36;
  const { minimum, maximum } = floorMesh.getBoundingInfo().boundingBox;
  const numBubblesX = Math.floor(bubbleAreaSize / spacing);
  const numBubblesZ = Math.floor(bubbleAreaSize / spacing);
  const offsetX = (maximum.x - minimum.x - (numBubblesX - 1) * spacing) / 2;
  const offsetZ = (maximum.z - minimum.z - (numBubblesZ - 1) * spacing) / 2;

  for (let i = 0; i < numBubblesX; i++) {
    for (let j = 0; j < numBubblesZ; j++) {
      const xPos = minimum.x + offsetX + i * spacing;
      const zPos = minimum.z + offsetZ + j * spacing;

      let bubbleColor;
      if (getColorFunction === getTemperatureColor) {
        bubbleColor = getTemperatureColor(
          calculateTemperatureAtPoint(xPos, zPos, sensors, maxInfluenceDistance)
        );
      } else {
        bubbleColor = getGradientColor(
          getColorFunction(
            calculateInfluence(xPos, zPos, sensors, maxInfluenceDistance)
          ),
          1
        );
      }

      const bubbleMaterial = getOrCreateMaterial(scene, bubbleColor);

      const bubble = BABYLON.MeshBuilder.CreateSphere(
        "bubble",
        { diameter: bubbleDiameter },
        scene
      );
      bubble.position = new BABYLON.Vector3(
        xPos,
        floorMesh.position.y + bubbleHeight,
        zPos
      );
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
            getTemperatureColor
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
            (influence) =>
              getGradientColor(
                BABYLON.Color3.FromHexString("#313695"),
                influence
              )
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
            (influence) =>
              getGradientColor(
                BABYLON.Color3.FromHexString("#006737"),
                influence
              )
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
