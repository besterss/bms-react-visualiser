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
import ParkingSpots from "../ParkingSpots";
import IconComponent from "../IconComponent";
import CircleDisplayBox from "../CircleDisplayBox";
import EvacuationPath from "../EvacuationPath";

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
  const [darkMode, setDarkMode] = useState(false);

  // Refs to avoid stale closures in immediate handlers
  const sceneRef = useRef(scene);
  const allFloorMeshesRef = useRef(allFloorMeshes);
  const currentActiveFloorRef = useRef(currentActiveFloor);
  useEffect(() => {
    sceneRef.current = scene;
  }, [scene]);
  useEffect(() => {
    allFloorMeshesRef.current = allFloorMeshes;
  }, [allFloorMeshes]);
  useEffect(() => {
    currentActiveFloorRef.current = currentActiveFloor;
  }, [currentActiveFloor]);

  // ---------- Helper disposal utilities ----------
  const safeDisposeTexture = (tex) => {
    try {
      if (!tex) return;
      if (typeof tex.isDisposed === "function") {
        if (!tex.isDisposed()) tex.dispose();
      } else if (typeof tex.dispose === "function") {
        tex.dispose();
      }
    } catch (e) {}
  };

  const safeDisposeMaterial = (mat) => {
    try {
      if (!mat) return;
      // dispose textures referenced by material
      safeDisposeTexture(mat.diffuseTexture);
      safeDisposeTexture(mat.emissiveTexture);
      safeDisposeTexture(mat.opacityTexture);
      if (typeof mat.isDisposed === "function") {
        if (!mat.isDisposed()) mat.dispose();
      } else if (typeof mat.dispose === "function") {
        mat.dispose();
      }
    } catch (e) {}
  };

  // ---------- Clean Evacuation / Endpoint / Label / Bubble objects ----------
  const clearEvacuationMeshes = (scn) => {
    if (!scn) return;

    // prefixy/tokens pro běžné evac / path objekty
    const namePrefixes = [
      "evacuation_path_",
      "evacuation_bubble_",
      "start_bubble_",
      "end_bubble_",
      "evac_start_",
      "evac_end_",
      "arrow_inst_",
      "arrow_template",
      "path_strip_",
      "path_ribbon_",
      "path_patch_",
      "merged_path_strip_",
      "path_patch_",
      "evac_route_",
      "evac_label_",
    ];
    const nameTokens = [
      "evac",
      "arrow",
      "path",
      "patch",
      "ribbon",
      "bubble",
      "merged_path_strip",
    ];

    // další specifické názvy, které vytváří EvacuationPath (endpointy, labely)
    const extraPrefixes = [
      "marker_", // marker_disk_, marker_sphere_, marker_...
      "marker_disk_",
      "marker_sphere_",
      "label_", // label_{text}_{timestamp}
      "dist_label_",
      "dist_",
    ];

    // 1) Meshes
    try {
      if (Array.isArray(scn.meshes)) {
        scn.meshes
          .filter((m) => {
            if (!m || !m.name) return false;
            const nm = m.name;
            // startsWith některého prefixu
            if (namePrefixes.some((p) => nm.startsWith(p))) return true;
            if (extraPrefixes.some((p) => nm.startsWith(p))) return true;
            // contains některého tokenu
            if (nameTokens.some((t) => nm.includes(t))) return true;
            return false;
          })
          .forEach((m) => {
            try {
              // pokud má mesh přidružené dynamic textures / materiály, dispose je
              if (m.__distTex) safeDisposeTexture(m.__distTex);
              if (m.__distMat) safeDisposeMaterial(m.__distMat);
              if (m.material) safeDisposeMaterial(m.material);
            } catch (e) {}
            try {
              m.dispose();
            } catch (e) {}
          });
      }
    } catch (e) {}

    // 2) Transform nodes (např. parent transform nodes pro arrow_path_)
    try {
      if (Array.isArray(scn.transformNodes)) {
        scn.transformNodes
          .filter((tn) => {
            if (!tn || !tn.name) return false;
            const nm = tn.name.toLowerCase();
            if (
              nm.startsWith("arrow_path_") ||
              nm.startsWith("evacuation_path_")
            )
              return true;
            if (
              nm.includes("evac") ||
              nm.includes("arrow") ||
              nm.includes("path")
            )
              return true;
            if (nm.includes("bubble") || nm.includes("marker")) return true;
            return false;
          })
          .forEach((tn) => {
            try {
              tn.dispose(true, true);
            } catch (e) {}
          });
      }
    } catch (e) {}

    // 3) Materials (label/material leftovers)
    try {
      if (Array.isArray(scn.materials)) {
        scn.materials
          .filter((mat) => {
            if (!mat || !mat.name) return false;
            const nm = mat.name.toLowerCase();
            return (
              nm.startsWith("label_mat_") ||
              nm.startsWith("marker_disk_mat_") ||
              nm.startsWith("marker_sphere_mat_") ||
              nm.startsWith("dist_mat_") ||
              nm.startsWith("path_strip_mat") ||
              nm.startsWith("arrow_mat") ||
              nm.startsWith("evac_mat") ||
              nm.includes("bubble")
            );
          })
          .forEach((mat) => {
            try {
              safeDisposeMaterial(mat);
            } catch (e) {}
          });
      }
    } catch (e) {}

    // 4) Pokud existuje scene.__evacCache od EvacuationPath, uvolnit jeho cache (dynamic textures, šablony)
    try {
      const cache = scn.__evacCache;
      if (cache) {
        try {
          if (cache.arrowTemplate && !cache.arrowTemplate.isDisposed())
            cache.arrowTemplate.dispose();
        } catch {}
        try {
          if (cache.pathStripMat && !cache.pathStripMat.isDisposed())
            cache.pathStripMat.dispose();
        } catch {}
        try {
          // labelCache obsahuje mat+dt páry
          if (cache.labelCache instanceof Map) {
            for (const entry of cache.labelCache.values()) {
              try {
                if (
                  entry.dt &&
                  typeof entry.dt.isDisposed === "function" &&
                  !entry.dt.isDisposed()
                )
                  entry.dt.dispose();
              } catch {}
              try {
                if (
                  entry.mat &&
                  typeof entry.mat.isDisposed === "function" &&
                  !entry.mat.isDisposed()
                )
                  entry.mat.dispose();
              } catch {}
            }
            cache.labelCache.clear();
          }
        } catch {}
        // reset cache objektu (EvacuationPath si při dalším použití vytvoří novou)
        try {
          scn.__evacCache = null;
        } catch {}
      }
    } catch (e) {}
  };

  // clearBubbles only clears objects created by bubble/heatmap/air/wifi renderers.
  // We do NOT call this automatically on floor change if the activeDisplayOption is a bubble mode,
  // because we want bubble overlays to persist and be redrawn for the new floor.
  const clearBubbles = (scn) => {
    if (!scn) return;
    try {
      if (Array.isArray(scn.meshes)) {
        scn.meshes
          .filter((m) => m && m.name && m.name.toLowerCase().includes("bubble"))
          .forEach((m) => {
            try {
              m.dispose();
            } catch {}
          });
      }
    } catch {}
    try {
      if (Array.isArray(scn.transformNodes)) {
        scn.transformNodes
          .filter(
            (tn) => tn && tn.name && tn.name.toLowerCase().includes("bubble")
          )
          .forEach((tn) => {
            try {
              tn.dispose(true, true);
            } catch {}
          });
      }
    } catch {}
    try {
      if (Array.isArray(scn.materials)) {
        scn.materials
          .filter(
            (mat) =>
              mat && mat.name && mat.name.toLowerCase().includes("bubble")
          )
          .forEach((mat) => {
            try {
              safeDisposeMaterial(mat);
            } catch {}
          });
      }
    } catch {}
  };

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
    // sync darkMode to generator (if toggled before generation)
    if (typeof darkMode !== "undefined") {
      generator.setDarkMode(darkMode);
    }
    setupCamera(babylonScene, result.floorData);
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
    setupEventHandlers(babylonScene);
    babylonEngine.runRenderLoop(() => {
      babylonScene.render();
    });
    const handleResize = () => {
      babylonEngine.resize();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      try {
        // při dispose scény/engine smažeme i bublinky a evak prvky (prevent dangling)
        clearBubbles(babylonScene);
        clearEvacuationMeshes(babylonScene);
      } catch {}
      try {
        babylonEngine.dispose();
      } catch {}
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Effect: když máme floorGenerator nebo se změní darkMode, aplikuj do generatoru
  useEffect(() => {
    if (floorGenerator) {
      floorGenerator.setDarkMode(darkMode);
    }
  }, [floorGenerator, darkMode]);

  // Tento hlavní efekt vykreslí bublinky vždy když se změní activeDisplayOption / floor / scény
  useEffect(() => {
    if (
      engine &&
      scene &&
      currentActiveFloor !== null &&
      allFloorMeshes.length
    ) {
      // Pokud je aktivní režim bublin (heatmap, wifi nebo airQuality), smažeme staré bublinky a překreslíme
      if (["heatmap", "wifi", "airQuality"].includes(activeDisplayOption)) {
        clearBubbles(scene);
        showBubblesOnActiveFloor(
          scene,
          currentActiveFloor,
          allFloorMeshes,
          activeDisplayOption === "heatmap",
          activeDisplayOption === "wifi",
          activeDisplayOption === "airQuality"
        );
      } else {
        // Pokud aktuální režim není bubliny, nic neuděláme (žádné předčasné mazání)
        // Poznámka: evak a jiné režimy se řeší jinde
      }
    }
  }, [engine, scene, currentActiveFloor, allFloorMeshes, activeDisplayOption]);

  useEffect(() => {
    if (!engine || !scene || currentActiveFloor === null) return;
    const floors = CONFIG_DATA.floors;
    if (!floors) return;
    const currentFloor = floors.find(
      (floor) => floor.id === currentActiveFloor
    );
    if (currentFloor && currentFloor.roomLabels) {
      const newLabelData = currentFloor.roomLabels.map((label) => ({
        positionX: label.x,
        positionZ: label.z,
        text: label.label,
        floorIndex: floors.indexOf(currentFloor),
      }));
      clearLabels(scene);
      setLabelData(newLabelData);
    } else {
      clearLabels(scene);
      setLabelData([]);
    }
  }, [engine, scene, currentActiveFloor]);

  // Úklid evakuačních cest při vypnutí checkboxu / přepnutí režimu
  useEffect(() => {
    if (!scene) return;
    if (activeDisplayOption !== "evacuation") {
      clearEvacuationMeshes(scene);
    }
    // Pokud přepneme z bublinových režimů na něco jiného, smažeme bublinky
    if (!["heatmap", "wifi", "airQuality"].includes(activeDisplayOption)) {
      clearBubbles(scene);
    }
  }, [scene, activeDisplayOption]);

  // Při změně patra: SMAZAT POUZE evakuační prvky (endpointy/šipky),
  // bublinky ponecháme (hlavní efekt je překreslí pokud je aktivní režim bublin).
  useEffect(() => {
    if (!scene) return;
    clearEvacuationMeshes(scene);
    // NEVOLAT clearBubbles zde — chceme, aby heatmap/air/wifi zůstaly (a hlavní efekt je překreslí)
  }, [scene, currentActiveFloor]);

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
    if (!scene) return;
    scene.onPointerObservable.add((pointerInfo) => {
      if (pointerInfo.type === BABYLON.PointerEventTypes.POINTERPICK) {
        const pickedMesh = pointerInfo.pickInfo.pickedMesh;
        if (
          !pointerInfo.pickInfo.hit ||
          !pickedMesh ||
          !pickedMesh.metadata ||
          !pickedMesh.metadata.icon
        ) {
          setSelectedIconInfo(null);
          setSelectedWifi(null);
        }
      }
    });
  };

  const showFloor = (
    floorId,
    meshes = allFloorMeshes,
    floors = floorData,
    generator = floorGenerator
  ) => {
    if (!generator) return;
    // --- NOVÉ: vyčistit pouze evakuační meshe (aby A/B marker/šipky nezůstaly) ---
    if (scene) {
      try {
        clearEvacuationMeshes(scene);
        // NEVOLAT clearBubbles zde — chceme, aby heatmap/air/wifi zůstaly aktivní
      } catch (e) {
        // ignore
      }
    }
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
    if (scene) {
      const camera = scene.getCameraByName("camera");
      if (camera) {
        updateCameraHeight(
          camera,
          activeFloorIndex,
          isViewingAllFloors,
          totalHeight
        );
      }
    }
    meshes.forEach((floorMeshes, index) => {
      const floorInfo = floors[index];
      if (!floorInfo) return;
      floorMeshes.forEach((mesh) => {
        const isGrassMesh = mesh.name.includes("grassArea");
        const isTreeMesh = mesh.name.startsWith("tree_");
        if (isGrassMesh) {
          mesh.setEnabled(isViewingAllFloors || floorId >= 0);
          const prevOpacity = mesh.material && mesh.material.opacityTexture;
          if (isViewingAllFloors) {
            mesh.material = generator.materials.grass;
          } else if (floorId === 0) {
            mesh.material =
              generator.materials.grass1NP || generator.materials.ground;
          } else {
            mesh.material = generator.materials.grass;
          }
          if (prevOpacity) {
            mesh.material.opacityTexture = prevOpacity;
            mesh.material.transparencyMode =
              BABYLON.Material.MATERIAL_ALPHABLEND;
            mesh.material.needDepthPrePass = true;
          }
        } else if (isTreeMesh) {
          mesh.setEnabled(isViewingAllFloors || floorId >= 6);
        } else {
          const shouldEnable =
            isViewingAllFloors || floorInfo.floorNumber <= floorId;
          mesh.setEnabled(shouldEnable);
          if (shouldEnable) {
            if (
              mesh.name.includes("_segment") &&
              mesh.material === generator.materials.water
            ) {
              // leave as is
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
    if (scene) {
      try {
        // při manuální změně patra smažeme evakuační prvky,
        // ale NE bublinky — necháme je být (hlavní efekt je překreslí pokud jsou aktivní)
        clearEvacuationMeshes(scene);
      } catch (e) {
        // ignore
      }
    }
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
        try {
          mesh.dispose();
        } catch {}
      });
  };

  // Upravený handler: nastaví stav a ihned (asynchronně) zavolá showBubblesOnActiveFloor s aktuálními hodnotami z refů
  const handleOptionToggle = (option) => {
    const next = activeDisplayOption === option ? null : option;
    setActiveDisplayOption(next);
    if (
      !sceneRef.current ||
      !Array.isArray(allFloorMeshesRef.current) ||
      currentActiveFloorRef.current === null
    ) {
      return;
    }
    requestAnimationFrame(() => {
      try {
        // vždy před vykreslením bublin smažeme staré bublinky
        if (["heatmap", "wifi", "airQuality"].includes(next)) {
          clearBubbles(sceneRef.current);
        }
        showBubblesOnActiveFloor(
          sceneRef.current,
          currentActiveFloorRef.current,
          allFloorMeshesRef.current,
          next === "heatmap",
          next === "wifi",
          next === "airQuality"
        );
      } catch (e) {}
    });
  };

  useEffect(() => {
    if (scene && activeDisplayOption === "icons") {
      const iconsForActiveFloor =
        CONFIG_DATA.floors.find((floor) => floor.id === currentActiveFloor)
          ?.icons || [];
      if (circleDisplayMode === "all") {
        iconsForActiveFloor.forEach((icon) => {
          const circleName = `range-circle-${icon.label}`;
          const circleMesh = scene.getMeshByName(circleName);
          if (circleMesh) {
            circleMesh.setEnabled(true);
          }
        });
      } else {
        scene.meshes
          .filter((mesh) => mesh.name.startsWith("range-circle"))
          .forEach((circleMesh) => circleMesh.setEnabled(false));
      }
    }
  }, [scene, activeDisplayOption, circleDisplayMode, currentActiveFloor]);

  const activeFloorIndex = floorData.findIndex(
    (floor) => floor.floorNumber === currentActiveFloor
  );
  const activeRooms =
    CONFIG_DATA.floors.find((floor) => floor.id === currentActiveFloor)
      ?.rooms || [];
  const currentFloorParking =
    CONFIG_DATA.floors.find((floor) => floor.id === currentActiveFloor)
      ?.parking || [];
  const activeIcons =
    CONFIG_DATA.floors.find((floor) => floor.id === currentActiveFloor)
      ?.icons || [];

  return (
    <div className="building-viewer">
      <FloorControls
        floors={floorData}
        activeFloor={currentActiveFloor}
        onFloorChange={handleFloorChange}
        activeDisplayOption={activeDisplayOption}
        onOptionToggle={handleOptionToggle}
        darkMode={darkMode}
        onDarkModeToggle={(enabled) => setDarkMode(enabled)}
        onCircleDisplayModeChange={setCircleDisplayMode}
      />
      <canvas
        ref={canvasRef}
        className="render-canvas"
        style={{ width: "100%", height: "100%" }}
      />
      {scene &&
        activeDisplayOption === "evacuation" &&
        currentActiveFloor !== "all" && (
          <EvacuationPath
            key={`evac-${currentActiveFloor}`}
            scene={scene}
            floorId={currentActiveFloor}
          />
        )}
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
            floorIndex={activeFloorIndex}
            config={CONFIG_DATA}
            onSelect={() => {
              setSelectedIconInfo({
                label: icon.label,
                status: icon.status,
                healthStatus: icon.healthStatus,
              });
              if (icon.type === "wifi") {
                setSelectedWifi(icon.label);
              } else {
                setSelectedWifi(null);
              }
            }}
            isSelected={
              selectedIconInfo && selectedIconInfo.label === icon.label
            }
            showCircle={
              circleDisplayMode === "click"
                ? selectedWifi === icon.label
                : circleDisplayMode === "all"
            }
            healthStatus={icon.healthStatus}
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
            if (mode === "click") {
              setSelectedWifi(null);
            }
          }}
        />
      )}
    </div>
  );
};

export default BuildingViewer;
