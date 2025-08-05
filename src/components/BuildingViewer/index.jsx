import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import * as BABYLON from "babylonjs";
import { FloorGenerator } from "../FloorGenerator";
import { CONFIG_DATA } from "../BuildingLayoutConfig";
import FloorControls from "../FloorControls";
import LabelComponent from "../LabelComponent";
import InfoBox from "../InfoBox";
import "./buildingviewer.css";
import { showBubblesOnActiveFloor } from "../BubbleUtils";
import RoomBoxes from "../RoomBoxes";
import ParkingSpots from "../ParkingSpots";
import IconComponent from "../IconComponent";
import CircleDisplayBox from "../CircleDisplayBox";

const BuildingViewer = () => {
  const canvasRef = useRef(null);
  const [engine, setEngine] = useState(null);
  const [scene, setScene] = useState(null);
  const [floorGenerator, setFloorGenerator] = useState(null);
  const [floorData, setFloorData] = useState([]);
  const [allFloorMeshes, setAllFloorMeshes] = useState([]);
  const [currentActiveFloor, setCurrentActiveFloor] = useState(null);
  const [activeDisplayOption, setActiveDisplayOption] = useState(null);
  const [selectedIconInfo, setSelectedIconInfo] = useState(null);
  const [selectedWifi, setSelectedWifi] = useState(null);
  const [labelData, setLabelData] = useState([]);
  const [roomInfo, setRoomInfo] = useState({
    temperature: "N/A",
    wifiSignal: "N/A",
    floorArea: "N/A",
    activeFloor: "N/A",
  });
  const [circleDisplayMode, setCircleDisplayMode] = useState("click");

  // Memoized to prevent unnecessary recalculations
  const activeFloor = useMemo(() => {
    return (
      CONFIG_DATA.floors.find((floor) => floor.id === currentActiveFloor) || {}
    );
  }, [currentActiveFloor]);

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

    if (result.floorData.length) {
      const initialFloor = result.floorData[0];
      showFloor(
        initialFloor.floorNumber,
        result.allFloorMeshes,
        result.floorData,
        generator
      );
      setCurrentActiveFloor(initialFloor.floorNumber);
      updateRoomInfo(initialFloor);
    }

    setupEventHandlers(babylonScene);

    const handleResize = () => babylonEngine.resize();
    window.addEventListener("resize", handleResize);

    babylonEngine.runRenderLoop(() => babylonScene.render());

    return () => {
      window.removeEventListener("resize", handleResize);
      babylonEngine.dispose();
    };
  }, [canvasRef]);

  useEffect(() => {
    if (
      scene &&
      engine &&
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
  }, [scene, engine, currentActiveFloor, allFloorMeshes, activeDisplayOption]);

  useEffect(() => {
    if (!scene || !CONFIG_DATA.floors) return;

    const newLabelData = (activeFloor?.roomLabels || []).map((label) => ({
      positionX: label.x,
      positionZ: label.z,
      text: label.label,
      floorIndex: CONFIG_DATA.floors.indexOf(activeFloor),
    }));
    clearLabels(scene);
    setLabelData(newLabelData);
  }, [scene, activeFloor]);

  const setupCamera = useCallback(
    (scene, floors) => {
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
        activeFloorIndex === -1
          ? totalHeight / 2
          : activeFloorIndex *
            (CONFIG_DATA.visualization.wall_height +
              CONFIG_DATA.visualization.floor_thickness);

      let camera = scene.getCameraByName("camera");
      if (!camera) {
        camera = new BABYLON.ArcRotateCamera(
          "camera",
          -Math.PI / 2,
          Math.PI / 4,
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
      } else {
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
      }
    },
    [currentActiveFloor, canvasRef]
  );

  const updateCameraHeight = useCallback(
    (camera, activeFloorIndex, isAllFloors, totalHeight) => {
      if (!camera) return;
      const floorHeight =
        CONFIG_DATA.visualization.wall_height +
        CONFIG_DATA.visualization.floor_thickness;

      if (isAllFloors) {
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.radius = totalHeight * 3;
        camera.beta = Math.PI / 4;
      } else {
        camera.setTarget(
          new BABYLON.Vector3(
            0,
            activeFloorIndex * floorHeight +
              CONFIG_DATA.visualization.wall_height / 2,
            0
          )
        );
      }
    },
    []
  );

  const showFloor = useCallback(
    (
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
      const totalHeight =
        floors.length *
        (CONFIG_DATA.visualization.wall_height +
          CONFIG_DATA.visualization.floor_thickness +
          CONFIG_DATA.visualization.floor_spacing);

      const camera = scene?.getCameraByName("camera");
      camera &&
        updateCameraHeight(
          camera,
          activeFloorIndex,
          isViewingAllFloors,
          totalHeight
        );

      meshes.forEach((floorMeshes, index) => {
        const floorInfo = floors[index];
        if (!floorInfo) return;

        floorMeshes.forEach((mesh) => {
          mesh.setEnabled(
            isViewingAllFloors || floorInfo.floorNumber <= floorId
          );
          if (mesh.name.includes("grassArea")) {
            mesh.setEnabled(!isViewingAllFloors && floorId >= 0);
          }

          if (isViewingAllFloors || floorInfo.floorNumber <= floorId) {
            applyMaterial(mesh, generator);
          }
        });
      });

      isViewingAllFloors
        ? updateRoomInfoForAllFloors(floors)
        : updateRoomInfo(floors[activeFloorIndex]);
    },
    [scene]
  );

  const applyMaterial = useCallback((mesh, generator) => {
    if (mesh.name.includes("_floor") || mesh.name.includes("_segment")) {
      mesh.material = generator.materials.floorDefault;
    } else if (mesh.name.includes("_glass") || mesh.name.includes("_outline")) {
      mesh.material = generator.materials.glass;
    } else if (
      mesh.name.includes("_partition") ||
      mesh.name.includes("_circular") ||
      mesh.name.includes("_curved")
    ) {
      mesh.material = generator.materials.wallOpaque;
    }
  }, []);

  // Update Room Info based on selected floor
  const updateRoomInfo = useCallback((floor) => {
    setRoomInfo((prev) => ({
      ...prev,
      activeFloor: floor.name,
      floorArea: `${floor.area.toFixed(2)} m²`,
    }));
  }, []);

  const updateRoomInfoForAllFloors = useCallback((floors) => {
    setRoomInfo((prev) => ({
      ...prev,
      activeFloor: "All Floors",
      floorArea: `${floors
        .reduce((sum, f) => sum + (f ? f.area : 0), 0)
        .toFixed(2)} m²`,
    }));
  }, []);

  // Setup event handlers for scene interactions
  const setupEventHandlers = useCallback((scene) => {
    if (!scene) return;
    scene.onPointerObservable.add((pointerInfo) => {
      const pickedMesh = pointerInfo.pickInfo.pickedMesh;
      if (!pointerInfo.pickInfo.hit || !pickedMesh?.metadata?.icon) {
        setSelectedIconInfo(null);
        setSelectedWifi(null);
      }
    });
  }, []);

  const handleFloorChange = useCallback(
    (floorId) => {
      showFloor(floorId);
      setRoomInfo((prev) => ({
        ...prev,
        temperature: "N/A",
        wifiSignal: "N/A",
      }));
    },
    [showFloor]
  );

  const handleOptionToggle = (option) => {
    setActiveDisplayOption((prev) => (prev === option ? null : option));
  };

  const clearLabels = useCallback((scene) => {
    if (!scene?.meshes) return;
    scene.meshes
      .filter((mesh) => mesh.name.startsWith("label"))
      .forEach((mesh) => mesh.dispose());
  }, []);

  const activeRooms = useMemo(() => activeFloor?.rooms || [], [activeFloor]);
  const currentFloorParking = useMemo(
    () => activeFloor?.parking || [],
    [activeFloor]
  );
  const activeIcons = useMemo(() => activeFloor?.icons || [], [activeFloor]);

  return (
    <div className="building-viewer">
      <FloorControls
        floors={floorData}
        activeFloor={currentActiveFloor}
        onFloorChange={handleFloorChange}
        activeDisplayOption={activeDisplayOption}
        onOptionToggle={handleOptionToggle}
        onCircleDisplayModeChange={setCircleDisplayMode}
      />
      <canvas
        ref={canvasRef}
        className="render-canvas"
        style={{ width: "100%", height: "100%" }}
      />
      {scene && activeDisplayOption === "roomBoxes" && (
        <RoomBoxes rooms={activeRooms} scene={scene} config={CONFIG_DATA} />
      )}
      {scene && currentFloorParking.length > 0 && (
        <ParkingSpots scene={scene} parkingConfig={currentFloorParking} />
      )}
      {labelData.map((label, index) => (
        <LabelComponent
          key={index}
          scene={scene}
          {...label}
          config={CONFIG_DATA}
        />
      ))}
      {scene &&
        activeDisplayOption === "icons" &&
        activeIcons.map((icon, index) => (
          <IconComponent
            key={index}
            scene={scene}
            positionX={icon.x}
            positionZ={icon.z}
            text={
              icon.type === "camera"
                ? "\uf030"
                : icon.type === "thermometer"
                ? "\uf2c7"
                : icon.type === "wifi"
                ? "\uf1eb"
                : "\uf111"
            }
            type={icon.type}
            label={icon.label}
            status={icon.status}
            floorIndex={floorData.findIndex(
              (floor) => floor.floorNumber === currentActiveFloor
            )}
            config={CONFIG_DATA}
            onSelect={() => {
              setSelectedIconInfo({
                label: icon.label,
                status: icon.status,
                healthStatus: icon.healthStatus,
              });
              icon.type === "wifi"
                ? setSelectedWifi(icon.label)
                : setSelectedWifi(null);
            }}
            isSelected={
              selectedIconInfo && selectedIconInfo.label === icon.label
            }
            showCircle={
              circleDisplayMode === "click"
                ? selectedWifi === icon.label
                : circleDisplayMode === "all"
            }
          />
        ))}
      {selectedIconInfo && (
        <div className="hover-info-box">
          <p>
            Icon: <span>{selectedIconInfo.label}</span>
          </p>
          <p>
            Status: <span>{selectedIconInfo.status}</span>
          </p>
          {selectedIconInfo.healthStatus && (
            <p>
              Health Status: <span>{selectedIconInfo.healthStatus}</span>
            </p>
          )}
        </div>
      )}
      <InfoBox roomInfo={roomInfo} />
      {activeDisplayOption === "icons" && (
        <CircleDisplayBox
          currentMode={circleDisplayMode}
          onModeChange={(mode) => {
            setCircleDisplayMode(mode);
            mode === "click" && setSelectedWifi(null);
          }}
        />
      )}
    </div>
  );
};

export default BuildingViewer;
