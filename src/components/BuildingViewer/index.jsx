import React, { useEffect, useRef, useState } from "react";
import * as BABYLON from "babylonjs";
import { FloorGenerator } from "../FloorGenerator";
import { CONFIG_DATA } from "../BuildingLayoutConfig";
import FloorControls from "../FloorControls";
import LabelComponent from "../LabelComponent";
import InfoBox from "../InfoBox";
import "./buildingviewer.css";
import { showBubblesOnActiveFloor } from "../BubbleUtils";
import RoomBoxes from "../RoomBoxes";
import ParkingSpots from "../ParkingSpots"; // Import the new component

const BuildingViewer = () => {
  const canvasRef = useRef(null);
  const [engine, setEngine] = useState(null);
  const [scene, setScene] = useState(null);
  const [floorGenerator, setFloorGenerator] = useState(null);
  const [floorData, setFloorData] = useState([]);
  const [allFloorMeshes, setAllFloorMeshes] = useState([]);
  const [currentActiveFloor, setCurrentActiveFloor] = useState(null);
  const [activeDisplayOption, setActiveDisplayOption] = useState(null);
  const [labelData, setLabelData] = useState([]);
  const [roomInfo, setRoomInfo] = useState({
    temperature: "N/A",
    wifiSignal: "N/A",
    floorArea: "N/A",
    activeFloor: "N/A",
  });

  useEffect(() => {
    if (!canvasRef.current) return;
    const babylonEngine = new BABYLON.Engine(canvasRef.current, true, {
      preserveDrawingBuffer: true,
      stencil: true,
    });
    const babylonScene = new BABYLON.Scene(babylonEngine);
    babylonScene.clearColor = new BABYLON.Color3(0.95, 0.95, 0.98);
    babylonScene.transparencyAndDepthSorting = true;
    const generator = new FloorGenerator(
      babylonScene,
      babylonEngine,
      CONFIG_DATA
    );
    const result = generator.generateFloors();
    setEngine(babylonEngine);
    setScene(babylonScene);
    setFloorGenerator(generator);
    setFloorData(result.floorData);
    setAllFloorMeshes(result.allFloorMeshes);
    setupCamera(babylonScene, result.floorData);
    setupEventHandlers(babylonScene);

    if (result.floorData.length > 0) {
      showFloor(
        result.floorData[0].floorNumber,
        result.allFloorMeshes,
        result.floorData,
        generator
      );
      setCurrentActiveFloor(result.floorData[0].floorNumber);
      setRoomInfo((prev) => ({
        ...prev,
        activeFloor: result.floorData[0].name,
        floorArea: `${result.floorData[0].area.toFixed(2)} m²`,
      }));
    }
    babylonEngine.runRenderLoop(() => {
      babylonScene.render();
    });
    const handleResize = () => {
      babylonEngine.resize();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      babylonEngine.dispose();
    };
  }, []);

  useEffect(() => {
    if (
      engine &&
      scene &&
      currentActiveFloor !== null &&
      allFloorMeshes.length
    ) {
      showBubblesOnActiveFloor(
        scene,
        currentActiveFloor,
        allFloorMeshes,
        activeDisplayOption === "heatmap",
        activeDisplayOption === "wifi",
        activeDisplayOption === "airQuality"
      );
    }
  }, [engine, scene, currentActiveFloor, allFloorMeshes, activeDisplayOption]);

  const handleOptionToggle = (option) => {
    if (activeDisplayOption === option) {
      setActiveDisplayOption(null);
    } else {
      setActiveDisplayOption(option);
    }
  };

  useEffect(() => {
    if (!engine || !scene) return;
    const floors = CONFIG_DATA.floors;
    if (!floors || currentActiveFloor === null) return;
    const targetFloor = floors[1];
    if (!targetFloor) return;

    if (currentActiveFloor !== "all") {
      const currentFloor = floors.find(
        (floor) => floor.id === currentActiveFloor
      );
      if (currentFloor && currentFloor.roomLabels) {
        const floorIndex = floors.indexOf(currentFloor);
        const newLabelData = currentFloor.roomLabels.map((label) => ({
          positionX: label.x,
          positionZ: label.z,
          text: label.label,
          floorIndex,
        }));
        clearLabels(scene);
        setLabelData(newLabelData);
      }
    } else {
      clearLabels(scene);
    }
  }, [engine, scene, currentActiveFloor, CONFIG_DATA]);

  const setupCamera = (scene, floors, currentActiveFloor) => {
    if (!scene || !floors) return;
    const totalHeight =
      floors.length *
      (CONFIG_DATA.visualization.wall_height +
        CONFIG_DATA.visualization.floor_thickness +
        CONFIG_DATA.visualization.floor_spacing);
    const activeFloorIndex = floors.findIndex(
      (floor) => floor.id === currentActiveFloor
    );
    const activeFloorHeight =
      activeFloorIndex >= 0
        ? activeFloorIndex *
          (CONFIG_DATA.visualization.wall_height +
            CONFIG_DATA.visualization.floor_thickness)
        : totalHeight / 2;
    let camera = scene.getCameraByName("camera");
    if (camera) {
      camera.setPosition(
        new BABYLON.Vector3(
          0,
          activeFloorHeight + CONFIG_DATA.visualization.wall_height / 2,
          0
        )
      );
      camera.alpha = -Math.PI / 2;
      camera.beta = Math.PI / 4;
      camera.radius = totalHeight * 1.5;
    } else {
      camera = new BABYLON.ArcRotateCamera(
        "camera",
        -Math.PI / 2,
        -Math.PI / 4,
        totalHeight * 1.5,
        new BABYLON.Vector3(
          0,
          activeFloorHeight + CONFIG_DATA.visualization.wall_height / 2,
          0
        ),
        scene
      );
      camera.attachControl(canvasRef.current, true);
      camera.panningSensibility = 1000;
      camera.lowerRadiusLimit = 10;
      camera.upperRadiusLimit = totalHeight * 10;
      camera.upperBetaLimit = Math.PI / 2.2;
    }
  };

  const updateCameraHeight = (
    camera,
    activeFloorIndex,
    isAllFloors = false,
    totalHeight
  ) => {
    if (!camera || activeFloorIndex === undefined) return;
    if (isAllFloors) {
      camera.setTarget(BABYLON.Vector3.Zero());
      camera.radius = totalHeight * 3;
      camera.beta = Math.PI / 4;
    } else {
      const floorHeight =
        CONFIG_DATA.visualization.wall_height +
        CONFIG_DATA.visualization.floor_thickness;
      const activeFloorHeight = activeFloorIndex * floorHeight;
      camera.target.y =
        activeFloorHeight + CONFIG_DATA.visualization.wall_height / 2;
    }
  };

  const resetCameraForAllFloors = (camera, totalHeight) => {
    if (!camera) return;
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.setPosition(new BABYLON.Vector3(0, totalHeight / 2, 0));
    camera.alpha = -Math.PI / 2;
    camera.beta = Math.PI / 4;
    camera.radius = totalHeight * 3;
  };

  const setupEventHandlers = (scene) => {
    scene.onPointerObservable.add((pointerInfo) => {
      if (pointerInfo.pickInfo.hit && pointerInfo.pickInfo.pickedMesh) {
        const mesh = pointerInfo.pickInfo.pickedMesh;
        if (mesh.metadata && mesh.metadata.temperature !== undefined) {
          setRoomInfo((prev) => ({
            ...prev,
            temperature: `${mesh.metadata.temperature.toFixed(1)}°C`,
            wifiSignal: getWifiSignalLabel(mesh.metadata.wifiSignal),
          }));
        }
      }
    });
  };

  const getWifiSignalLabel = (signal) => {
    switch (signal) {
      case 0:
        return "No Signal";
      case 1:
        return "Weak";
      case 2:
        return "Normal";
      case 3:
        return "Strong";
      default:
        return "Unknown";
    }
  };

  const showFloor = (
    floorId,
    meshes = allFloorMeshes,
    floors = floorData,
    generator = floorGenerator
  ) => {
    if (!generator) return;
    setCurrentActiveFloor(floorId);
    const isViewingAllFloors = floorId === "all";
    const activeFloorIndex = floors.findIndex(
      (floor) => floor && floor.floorNumber === floorId
    );

    // Determine if grass should be visible
    const shouldShowGrass = isViewingAllFloors || floorId === 0;

    if (scene) {
      const camera = scene.getCameraByName("camera");
      if (camera) {
        if (isViewingAllFloors) {
          resetCameraForAllFloors(camera, floors.length, generator);
        } else {
          updateCameraHeight(camera, activeFloorIndex, false);
        }
      }
    }

    meshes.forEach((floorMeshes, index) => {
      const floorInfo = floors[index];
      if (!floorInfo) return; // Skip if floorInfo is undefined
      floorMeshes.forEach((mesh) => {
        const isGrassMesh = mesh.name.includes("grassArea");
        if (isGrassMesh) {
          mesh.setEnabled(shouldShowGrass);
        } else {
          const shouldEnable =
            isViewingAllFloors || floorInfo.floorNumber === floorId;
          mesh.setEnabled(shouldEnable);
          // Nastavení materiálů pro viditelné meshe
          if (shouldEnable && floorInfo.floorNumber === floorId) {
            if (
              mesh.name.includes("_segment") &&
              mesh.material === generator.materials.water
            ) {
            } else if (
              mesh.name.includes("_floor") ||
              mesh.name.includes("_segment")
            ) {
              mesh.material = generator.materials.floorDefault;
            } else if (mesh.name.includes("_glass")) {
              mesh.material = generator.materials.glass;
            } else if (
              mesh.name.includes("_partition") ||
              mesh.name.includes("_circular") ||
              mesh.name.includes("_curved")
            ) {
              mesh.material = generator.materials.wallOpaque;
            } else if (mesh.name.includes("_outline")) {
              mesh.material = generator.materials.glass;
            }
          }
        }
      });
    });

    // Update informace
    if (!isViewingAllFloors) {
      const selectedFloor = floors.find((f) => f && f.floorNumber === floorId);
      if (selectedFloor) {
        setRoomInfo((prev) => ({
          ...prev,
          activeFloor: selectedFloor.name,
          floorArea: `${selectedFloor.area.toFixed(2)} m²`,
        }));
      }
    } else {
      setRoomInfo((prev) => ({
        ...prev,
        activeFloor: "All Floors",
        floorArea: `${floors
          .reduce((sum, f) => sum + (f ? f.area : 0), 0)
          .toFixed(2)} m²`,
      }));
    }
  };

  const handleFloorChange = (floorId) => {
    const isViewingAllFloors = floorId === "all";
    const shouldShowGrass = isViewingAllFloors || floorId === 0;
    showFloor(floorId);
    setRoomInfo((prev) => ({
      ...prev,
      temperature: "N/A",
      wifiSignal: "N/A",
    }));
  };

  const clearLabels = (scene) => {
    if (!scene || !scene.meshes) return;
    scene.meshes
      .filter((mesh) => mesh.name.startsWith("label"))
      .forEach((mesh) => {
        mesh.dispose();
      });
  };

  const activeFloorIndex = floorData.findIndex(
    (floor) => floor.floorNumber === currentActiveFloor
  );
  const activeRooms =
    CONFIG_DATA.floors.find((floor) => floor.id === currentActiveFloor)
      ?.rooms || [];
  const currentFloorParking =
    CONFIG_DATA.floors.find((floor) => floor.id === currentActiveFloor)
      ?.parking || [];

  return (
    <div className="building-viewer">
      <FloorControls
        floors={floorData}
        activeFloor={currentActiveFloor}
        onFloorChange={handleFloorChange}
        activeDisplayOption={activeDisplayOption}
        onOptionToggle={handleOptionToggle}
      />
      <InfoBox roomInfo={roomInfo} />
      <canvas
        ref={canvasRef}
        className="render-canvas"
        style={{ width: "100%", height: "100%" }}
      />
      {scene && activeDisplayOption === "roomBoxes" && (
        <RoomBoxes
          rooms={activeRooms}
          scene={scene}
          floorIndex={activeFloorIndex}
          config={CONFIG_DATA}
        />
      )}
      {scene && currentFloorParking.length > 0 && (
        <ParkingSpots scene={scene} parkingConfig={currentFloorParking} />
      )}
      {labelData.map((label, index) => (
        <LabelComponent
          key={index}
          scene={scene}
          positionX={label.positionX}
          positionZ={label.positionZ}
          text={label.text}
          floorIndex={label.floorIndex}
          config={CONFIG_DATA}
        />
      ))}
    </div>
  );
};

export default BuildingViewer;
