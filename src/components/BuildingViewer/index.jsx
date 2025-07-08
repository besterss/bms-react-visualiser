
import React, { useEffect, useRef, useState } from 'react';
import * as BABYLON from 'babylonjs';
import { FloorGenerator } from '../FloorGenerator';
import { CONFIG_DATA } from '../BuildingLayoutConfig';
import FloorControls from '../FloorControls';
import InfoBox from '../InfoBox';
import './buildingviewer.css';

const BuildingViewer = () => {
  const canvasRef = useRef(null);
  const [engine, setEngine] = useState(null);
  const [scene, setScene] = useState(null);
  const [floorGenerator, setFloorGenerator] = useState(null);
  const [floorData, setFloorData] = useState([]);
  const [allFloorMeshes, setAllFloorMeshes] = useState([]);
  const [currentActiveFloor, setCurrentActiveFloor] = useState(null);
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [showWifi, setShowWifi] = useState(false);
  const [roomInfo, setRoomInfo] = useState({
    temperature: 'N/A',
    wifiSignal: 'N/A',
    floorArea: 'N/A',
    activeFloor: 'N/A'
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

    // Initialize floor generator
    const generator = new FloorGenerator(babylonScene, babylonEngine, CONFIG_DATA);
    const result = generator.generateFloors();
    
    setEngine(babylonEngine);
    setScene(babylonScene);
    setFloorGenerator(generator);
    setFloorData(result.floorData);
    setAllFloorMeshes(result.allFloorMeshes);

    // Setup camera
    setupCamera(babylonScene, result.floorData);

    // Setup lighting
    setupLighting(babylonScene);

    // Setup event handlers
    setupEventHandlers(babylonScene);

    // Show first floor by default
    if (result.floorData.length > 0) {
      showFloor(result.floorData[0].floorNumber, result.allFloorMeshes, result.floorData, generator);
      setCurrentActiveFloor(result.floorData[0].floorNumber);
      setRoomInfo(prev => ({
        ...prev,
        activeFloor: result.floorData[0].name,
        floorArea: `${result.floorData[0].area.toFixed(2)} m²`
      }));
    }

    // Render loop
    babylonEngine.runRenderLoop(() => {
      babylonScene.render();
    });

    // Handle window resize
    const handleResize = () => {
      babylonEngine.resize();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      babylonEngine.dispose();
    };
  }, []);

  const setupCamera = (scene, floors) => {
    const totalHeight = floors.length * (CONFIG_DATA.visualization.wall_height + 
      CONFIG_DATA.visualization.floor_thickness + CONFIG_DATA.visualization.floor_spacing);

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
    const light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    const light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 50, -10), scene);
    light1.intensity = 0.7;
    light2.intensity = 0.3;
  };

  const setupEventHandlers = (scene) => {
    scene.onPointerObservable.add((pointerInfo) => {
      if (pointerInfo.pickInfo.hit && pointerInfo.pickInfo.pickedMesh) {
        const mesh = pointerInfo.pickInfo.pickedMesh;
        if (mesh.metadata && mesh.metadata.temperature !== undefined) {
          setRoomInfo(prev => ({
            ...prev,
            temperature: `${mesh.metadata.temperature.toFixed(1)}°C`,
            wifiSignal: getWifiSignalLabel(mesh.metadata.wifiSignal)
          }));
        }
      }
    });
  };

  const getWifiSignalLabel = (signal) => {
    switch (signal) {
      case 0: return 'No Signal';
      case 1: return 'Weak';
      case 2: return 'Normal';
      case 3: return 'Strong';
      default: return 'Unknown';
    }
  };

  const showFloor = (floorId, meshes = allFloorMeshes, floors = floorData, generator = floorGenerator) => {
    if (!generator) return;

    setCurrentActiveFloor(floorId);
    
    meshes.forEach((floorMeshes, index) => {
      const floorInfo = floors[index];
      const isActiveFloor = floorId === "all" || floorInfo.floorNumber === floorId;
      
      floorMeshes.forEach((mesh) => {
        if (floorId === "all") {
          mesh.setEnabled(true);
          // Apply transparent materials for all floors view
          if (mesh.name.includes("_room") && mesh.name.includes("_floor")) {
            const roomIdx = mesh.metadata.roomIndex;
            const floorNum = mesh.metadata.floorNumber;
            
            if (showHeatmap) {
              mesh.material = generator.roomTransparentHeatmapMaterialMap.get(`${floorNum}_${roomIdx}_trans`);
            } else if (showWifi) {
              mesh.material = generator.roomTransparentWifiMaterialMap.get(`${floorNum}_${roomIdx}_trans_wifi`);
            } else {
              mesh.material = generator.materials.floorDefaultTransparent;
            }
          } else {
            mesh.material = floorInfo.floorNumber < 0 ? 
              generator.materials.undergroundTransparent : 
              generator.materials.allFloorsTransparent;
          }
        } else {
          mesh.setEnabled(isActiveFloor);
          
          if (isActiveFloor && mesh.name.includes("_room") && mesh.name.includes("_floor")) {
            const roomIdx = mesh.metadata.roomIndex;
            const floorNum = mesh.metadata.floorNumber;
            
            if (showHeatmap) {
              mesh.material = generator.roomHeatmapMaterialMap.get(`${floorNum}_${roomIdx}_opaque`);
            } else if (showWifi) {
              mesh.material = generator.roomWifiMaterialMap.get(`${floorNum}_${roomIdx}_opaque_wifi`);
            } else {
              mesh.material = generator.materials.floorDefault;
            }
          } else if (isActiveFloor) {
            mesh.material = generator.materials.wallOpaque;
          }
        }
      });
    });

    // Update room info
    if (floorId !== "all") {
      const selectedFloor = floors.find(f => f.floorNumber === floorId);
      if (selectedFloor) {
        setRoomInfo(prev => ({
          ...prev,
          activeFloor: selectedFloor.name,
          floorArea: `${selectedFloor.area.toFixed(2)} m²`
        }));
      }
    } else {
      setRoomInfo(prev => ({
        ...prev,
        activeFloor: 'All Floors',
        floorArea: `${floors.reduce((sum, f) => sum + f.area, 0).toFixed(2)} m²`
      }));
    }
  };

  const handleFloorChange = (floorId) => {
    showFloor(floorId);
    setRoomInfo(prev => ({
      ...prev,
      temperature: 'N/A',
      wifiSignal: 'N/A'
    }));
  };

  const handleHeatmapToggle = (checked) => {
    setShowHeatmap(checked);
    if (checked) setShowWifi(false);
    if (currentActiveFloor !== null) {
      showFloor(currentActiveFloor);
    }
  };

  const handleWifiToggle = (checked) => {
    setShowWifi(checked);
    if (checked) setShowHeatmap(false);
    if (currentActiveFloor !== null) {
      showFloor(currentActiveFloor);
    }
  };

  return (
    <div className="building-viewer">
      <FloorControls
        floors={floorData}
        activeFloor={currentActiveFloor}
        onFloorChange={handleFloorChange}
        showHeatmap={showHeatmap}
        showWifi={showWifi}
        onHeatmapToggle={handleHeatmapToggle}
        onWifiToggle={handleWifiToggle}
      />
      
      <InfoBox roomInfo={roomInfo} />
      
      <canvas 
        ref={canvasRef} 
        className="render-canvas"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default BuildingViewer;
