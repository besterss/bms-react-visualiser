import React, { useEffect, useRef, useState } from "react";
import * as BABYLON from "babylonjs";
import { FloorGenerator } from "../FloorGenerator";
import { CONFIG_DATA } from "../BuildingLayoutConfig";
import FloorControls from "../FloorControls";
import LabelComponent from "../LabelComponent";
import InfoBox from "../InfoBox";
import "./buildingviewer.css";
import * as GUI from "@babylonjs/gui";
import { showBubblesOnActiveFloor } from "../BubbleUtils";

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

    // Engine and Scene Initialization
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

    // Camera and Lighting Setup
    setupCamera(babylonScene, result.floorData);
    setupLighting(babylonScene);
    setupEventHandlers(babylonScene);

    // Show the first floor by default after engine and scene are ready
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
      setActiveDisplayOption(null); // If the same option is clicked, uncheck it (toggle off)
    } else {
      setActiveDisplayOption(option); // Set the clicked option to be active
    }
  };

  useEffect(() => {
    if (!engine || !scene) return; // Ensure engine and scene are both available

    const floors = CONFIG_DATA.floors;
    if (!floors || currentActiveFloor === null) return; // Ensure floors data is available and an active floor is set

    const targetFloor = floors[1]; // Adjust this index according to your data structure
    if (!targetFloor) return; // Ensure the target floor exists

    if (currentActiveFloor === targetFloor.id && targetFloor.parking) {
      clearParkingSpots(scene); // Clear existing parking spots if any
      addParkingSpots(scene, targetFloor.parking); // Add new parking spots for the target floor
    } else {
      clearParkingSpots(scene); // Clear parking spots if not on the target floor
    }

    if (currentActiveFloor !== "all") {
      const currentFloor = floors.find(
        (floor) => floor.id === currentActiveFloor
      );

      if (currentFloor && currentFloor.roomLabels) {
        // Retrieve the floor index appropriately
        // This assumes that CONFIG_DATA.floors is an array and currentFloor has a valid index in it
        const floorIndex = floors.indexOf(currentFloor);

        const newLabelData = currentFloor.roomLabels.map((label) => ({
          positionX: label.x,
          positionZ: label.z,
          text: label.label,
          floorIndex, // include the calculated floor index
        }));
        clearLabels(scene);
        setLabelData(newLabelData);
      }
    } else {
      clearLabels(scene);
    }
  }, [engine, scene, currentActiveFloor, CONFIG_DATA]);

  const setupCamera = (scene, floors) => {
    const totalHeight =
      floors.length *
      (CONFIG_DATA.visualization.wall_height +
        CONFIG_DATA.visualization.floor_thickness +
        CONFIG_DATA.visualization.floor_spacing);
    const camera = new BABYLON.ArcRotateCamera(
      "camera",
      -Math.PI / 2,
      Math.PI / 4,
      totalHeight * 6.0,
      new BABYLON.Vector3(0, totalHeight / 2, 0),
      scene
    );
    camera.attachControl(canvasRef.current, true);
    camera.panningSensibility = 1000;
    camera.lowerRadiusLimit = 10;
    camera.upperRadiusLimit = totalHeight * 10;
    camera.upperBetaLimit = Math.PI / 2.2;
  };

  const setupLighting = (scene) => {
    const light1 = new BABYLON.HemisphericLight(
      "light1",
      new BABYLON.Vector3(1, 1, 0),
      scene
    );
    const light2 = new BABYLON.PointLight(
      "light2",
      new BABYLON.Vector3(0, 50, -10),
      scene
    );
    light1.intensity = 0.7;
    light2.intensity = 0.3;
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

    meshes.forEach((floorMeshes, index) => {
      const floorInfo = floors[index];
      const isActiveFloor =
        floorId === "all" || floorInfo.floorNumber === floorId;

      floorMeshes.forEach((mesh) => {
        if (floorId === "all") {
          mesh.setEnabled(true);
          if (mesh.name.includes("_room") && mesh.name.includes("_floor")) {
            const roomIdx = mesh.metadata.roomIndex;
            const floorNum = mesh.metadata.floorNumber;
          } else {
            mesh.material =
              floorInfo.floorNumber < 0
                ? generator.materials.undergroundTransparent
                : generator.materials.allFloorsTransparent;
          }
        } else {
          mesh.setEnabled(isActiveFloor);

          if (
            isActiveFloor &&
            mesh.name.includes("_room") &&
            mesh.name.includes("_floor")
          ) {
            const roomIdx = mesh.metadata.roomIndex;
            const floorNum = mesh.metadata.floorNumber;
          } else if (isActiveFloor) {
            mesh.material = generator.materials.wallOpaque;
          }
        }

        mesh.setEnabled(isActiveFloor);
      });
    });

    if (floorId !== "all") {
      // Update room information for a specific floor
      const selectedFloor = floors.find((f) => f.floorNumber === floorId);
      if (selectedFloor) {
        setRoomInfo((prev) => ({
          ...prev,
          activeFloor: selectedFloor.name,
          floorArea: `${selectedFloor.area.toFixed(2)} m²`,
        }));
      }
    } else {
      // Update room information for all floors
      setRoomInfo((prev) => ({
        ...prev,
        activeFloor: "All Floors",
        floorArea: `${floors
          .reduce((sum, f) => sum + f.area, 0)
          .toFixed(2)} m²`,
      }));
    }
  };

  const handleFloorChange = (floorId) => {
    showFloor(floorId);
    setRoomInfo((prev) => ({
      ...prev,
      temperature: "N/A",
      wifiSignal: "N/A",
    }));
  };

  const addParkingSpots = (scene, parkingConfig) => {
    if (!scene || !parkingConfig) return;

    const freeMaterial = new BABYLON.StandardMaterial("freeMaterial", scene);
    freeMaterial.diffuseColor = new BABYLON.Color3(
      120 / 255,
      190 / 255,
      142 / 255
    );

    const reservedMaterial = new BABYLON.StandardMaterial(
      "reservedMaterial",
      scene
    );
    reservedMaterial.diffuseColor = new BABYLON.Color3(
      150 / 255,
      150 / 255,
      150 / 255
    );

    const occupiedMaterial = new BABYLON.StandardMaterial(
      "occupiedMaterial",
      scene
    );
    occupiedMaterial.diffuseColor = new BABYLON.Color3(
      230 / 255,
      125 / 255,
      115 / 255
    );

    const borderMaterial = new BABYLON.StandardMaterial(
      "borderMaterial",
      scene
    );
    borderMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);

    parkingConfig.forEach((spot, index) => {
      const width = Math.abs(spot.end.x - spot.start.x);
      const depth = Math.abs(spot.end.z - spot.start.z);
      const positionX = (spot.start.x + spot.end.x) / 2;
      const positionZ = (spot.start.z + spot.end.z) / 2;
      const height = 0.2;

      const parkingSpot = BABYLON.MeshBuilder.CreateBox(
        `spot${index}`,
        { height, width, depth },
        scene
      );
      parkingSpot.position = new BABYLON.Vector3(positionX, 3.5, positionZ);

      let baseMaterial;
      switch (spot.status) {
        case "occupied":
          baseMaterial = occupiedMaterial;
          break;
        case "reserved":
          baseMaterial = reservedMaterial;
          break;
        default:
          baseMaterial = freeMaterial;
          break;
      }

      parkingSpot.material = baseMaterial;

      const borderThickness = 0.1;
      const borderHeight = 0.1;

      const createBorder = (w, h, d, x, y, z, idx) => {
        const border = BABYLON.MeshBuilder.CreateBox(
          `spotBorder${index}_${idx}`,
          { height: h, width: w, depth: d },
          scene
        );
        border.position = new BABYLON.Vector3(x, y, z);
        border.material = borderMaterial;
      };

      createBorder(
        width,
        borderHeight,
        borderThickness,
        positionX,
        3.5 + height / 2,
        positionZ + depth / 2,
        0
      );
      createBorder(
        width,
        borderHeight,
        borderThickness,
        positionX,
        3.5 + height / 2,
        positionZ - depth / 2,
        1
      );
      createBorder(
        borderThickness,
        borderHeight,
        depth,
        positionX - width / 2,
        3.5 + height / 2,
        positionZ,
        2
      );
      createBorder(
        borderThickness,
        borderHeight,
        depth,
        positionX + width / 2,
        3.5 + height / 2,
        positionZ,
        3
      );

      // Create a plane for the number
      const numberPlane = BABYLON.MeshBuilder.CreatePlane(
        `spotNumber${index}`,
        { size: 2 },
        scene
      );
      numberPlane.position = new BABYLON.Vector3(positionX, 3.7, positionZ);

      // Align the plane to face upwards
      numberPlane.rotation.x = Math.PI / 2;

      const advancedTexture =
        GUI.AdvancedDynamicTexture.CreateForMesh(numberPlane);

      const textBlock = new GUI.TextBlock();
      textBlock.text = `${index + 1}`;
      textBlock.color = "white";
      textBlock.fontSize = 800; // Make sure this fits within your texture
      textBlock.fontWeight = 900;

      advancedTexture.addControl(textBlock);
    });
  };

  const clearParkingSpots = (scene) => {
    if (!scene || !scene.meshes) return;

    scene.meshes
      .filter(
        (mesh) =>
          mesh.name.startsWith("spot") || mesh.name.startsWith("spotBorder")
      )
      .forEach((mesh) => {
        mesh.dispose();
      });
  };

    const clearLabels = (scene) => {
    if (!scene || !scene.meshes) return;
    scene.meshes
      .filter(
        (mesh) =>
          mesh.name.startsWith("label")
      )
      .forEach((mesh) => {
        mesh.dispose();
      });
  };

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

      {labelData.map((label, index) => (
        <LabelComponent
          key={index}
          scene={scene}
          positionX={label.positionX}
          positionZ={label.positionZ}
          text={label.text}
          floorIndex={label.floorIndex} // Ensure this is set according to the floor logic
        />
      ))}
    </div>
  );
};

export default BuildingViewer;
