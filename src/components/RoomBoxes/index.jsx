import React, { useEffect, useState } from "react";
import * as BABYLON from "babylonjs";
import EvacuationPath from "../EvacuationPath";

const RoomBoxes = ({ rooms, scene, floorIndex, config }) => {
  const [selectedRoomInfo, setSelectedRoomInfo] = useState(null);
  const [selectedRoomNumber, setSelectedRoomNumber] = useState(null);
  // Evakuace – jedna aktivní napříč patry
  const [evacOn, setEvacOn] = useState(false);
  const [evacRoomNumber, setEvacRoomNumber] = useState(null);
  const [evacStartPoint, setEvacStartPoint] = useState(null);
  const [evacFloorId, setEvacFloorId] = useState(null);

  const computeRoomCenter = (room) => {
    const rectCenterAndArea = (b) => {
      const cx = (b.minX + b.maxX) / 2;
      const cz = (b.minZ + b.maxZ) / 2;
      const area = Math.max(0, b.maxX - b.minX) * Math.max(0, b.maxZ - b.minZ);
      return { cx, cz, area };
    };
    let weightedX = 0,
      weightedZ = 0,
      sumA = 0;
    if (room.baseBounds) {
      const { cx, cz, area } = rectCenterAndArea(room.baseBounds);
      weightedX += cx * area;
      weightedZ += cz * area;
      sumA += area;
    }
    if (
      Array.isArray(room.extensionBoundsList) &&
      room.extensionBoundsList.length
    ) {
      for (const eb of room.extensionBoundsList) {
        const { cx, cz, area } = rectCenterAndArea(eb);
        weightedX += cx * area;
        weightedZ += cz * area;
        sumA += area;
      }
    }
    if (!sumA && room.bounds) {
      const { cx, cz, area } = rectCenterAndArea(room.bounds);
      weightedX += cx * area;
      weightedZ += cz * area;
      sumA += area;
    }
    if (!sumA) return null;
    return { x: weightedX / sumA, z: weightedZ / sumA };
  };

  useEffect(() => {
    if (!scene || !rooms || floorIndex === undefined) return;

    let yLevel = 0;
    for (let i = 0; i < floorIndex; i++) {
      const fc = config.floors[i];
      const wallH =
        fc.id === 0
          ? config.visualization.wall_height_1NP
          : config.visualization.wall_height;
      yLevel +=
        wallH +
        config.visualization.floor_thickness +
        config.visualization.floor_spacing;
    }

    const currentFloor = config?.floors?.[floorIndex];
    const is1NP = currentFloor ? currentFloor.id === 0 : floorIndex === 0;
    const boxHeight = is1NP
      ? config.visualization.wall_height_1NP
      : config.visualization.wall_height;

    let roomMeshes = [];

    const boxes = rooms.map((room, index) => {
      const roomName = room.name;
      const roomNumber = room.number;
      const parentNode = new BABYLON.TransformNode(
        `parentNode-${roomNumber || index}`,
        scene
      );

      const createMesh = (name, bounds) => {
        const width = bounds.maxX - bounds.minX;
        const depth = bounds.maxZ - bounds.minZ;
        const height = boxHeight - 0.1;
        const box = BABYLON.MeshBuilder.CreateBox(
          name,
          { width, depth, height },
          scene
        );
        box.position.x = (bounds.minX + bounds.maxX) / 2;
        box.position.y = yLevel + height / 2;
        box.position.z = (bounds.minZ + bounds.maxZ) / 2;
        const material = new BABYLON.StandardMaterial(
          `material-${name}`,
          scene
        );
        material.alpha = 0.3;
        material.diffuseColor = new BABYLON.Color3(0.5, 0.5, 1);
        material.specularColor = new BABYLON.Color3(0, 0, 0);
        box.material = material;
        box.isPickable = true;
        box.actionManager = new BABYLON.ActionManager(scene);
        box.parent = parentNode;
        return box;
      };

      let meshes = [];
      if (room.baseBounds) {
        meshes.push(
          createMesh(`baseBox-${roomNumber || index}`, room.baseBounds)
        );
      }
      if (room.extensionBoundsList) {
        room.extensionBoundsList.forEach((eb, idx) => {
          meshes.push(
            createMesh(`extensionBox-${roomNumber || index}-${idx}`, eb)
          );
        });
      }
      if (room.bounds && !room.baseBounds && !room.extensionBoundsList) {
        meshes.push(
          createMesh(
            `box-${roomNumber || index}-floor-${floorIndex}`,
            room.bounds
          )
        );
      }

      roomMeshes = [...roomMeshes, ...meshes];

      const setupActions = (roomName, roomNumber, meshes) => {
        meshes.forEach((mesh) => {
          mesh.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
              BABYLON.ActionManager.OnPointerOverTrigger,
              () => {
                if (selectedRoomNumber !== roomNumber) {
                  meshes.forEach((m) => (m.material.alpha = 0.7));
                }
              }
            )
          );
          mesh.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
              BABYLON.ActionManager.OnPointerOutTrigger,
              () => {
                if (selectedRoomNumber !== roomNumber) {
                  meshes.forEach((m) => (m.material.alpha = 0.3));
                }
              }
            )
          );
          mesh.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
              BABYLON.ActionManager.OnPickTrigger,
              () => {
                setSelectedRoomInfo((prev) => ({
                  name: roomName,
                  number: roomNumber,
                  status: prev?.status || "Available",
                }));
                setSelectedRoomNumber(roomNumber);
              }
            )
          );
        });
      };
      setupActions(roomName, roomNumber, meshes);

      return { parentNode, roomName, roomNumber, meshes };
    });

    // Apply selection visual
    boxes.forEach(({ roomNumber, meshes }) => {
      const isSelected = selectedRoomNumber === roomNumber;
      meshes.forEach((mesh) => {
        mesh.material.alpha = isSelected ? 0.7 : 0.3;
      });
    });

    // Klik mimo – zruší výběr i evakuační trasu, ale NE při drag/rotaci kamery.
    // Navíc: výběr smažeme pouze při krátkém levém kliknutí (button === 0).
    let pointerState = {
      isDown: false,
      button: null,
      startX: 0,
      startY: 0,
      moved: false,
    };

    const MOVE_THRESHOLD_PX = 5;

    const pointerObserver = scene.onPointerObservable.add((pointerInfo) => {
      const ev = pointerInfo.event;
      switch (pointerInfo.type) {
        case BABYLON.PointerEventTypes.POINTERDOWN:
          pointerState.isDown = true;
          // event.button: 0 = left, 1 = middle, 2 = right
          pointerState.button =
            typeof ev.button === "number" ? ev.button : null;
          pointerState.moved = false;
          pointerState.startX = ev.clientX;
          pointerState.startY = ev.clientY;
          break;
        case BABYLON.PointerEventTypes.POINTERMOVE:
          if (pointerState.isDown) {
            const dx = ev.clientX - pointerState.startX;
            const dy = ev.clientY - pointerState.startY;
            if (Math.sqrt(dx * dx + dy * dy) > MOVE_THRESHOLD_PX) {
              pointerState.moved = true;
            }
          }
          break;
        case BABYLON.PointerEventTypes.POINTERUP: {
          const pickInfo = pointerInfo.pickInfo;
          // Pokud to nebyl drag (moved === false) a šlo o LEVÉ tlačítko (0), tak reagujeme jako "klik mimo"
          const wasLeftClick = pointerState.button === 0;
          if (!pointerState.moved && wasLeftClick) {
            if (
              !pickInfo ||
              !pickInfo.hit ||
              !roomMeshes.includes(pickInfo.pickedMesh)
            ) {
              setSelectedRoomNumber(null);
              setSelectedRoomInfo(null);
              setEvacOn(false);
              setEvacRoomNumber(null);
              setEvacStartPoint(null);
              setEvacFloorId(null);
            }
          }
          // Reset state
          pointerState.isDown = false;
          pointerState.button = null;
          pointerState.moved = false;
          break;
        }
        default:
          break;
      }
    });

    return () => {
      boxes.forEach(({ parentNode }) => parentNode.dispose());
      if (pointerObserver) {
        scene.onPointerObservable.remove(pointerObserver);
      }
    };
  }, [rooms, scene, floorIndex, config, selectedRoomNumber]);

  useEffect(() => {
    setSelectedRoomInfo(null);
    setSelectedRoomNumber(null);
  }, [floorIndex]);

  const handleToggleEvac = () => {
    if (!selectedRoomNumber) return;
    const isOnForSelected = evacOn && evacRoomNumber === selectedRoomNumber;
    if (isOnForSelected) {
      setEvacOn(false);
      setEvacRoomNumber(null);
      setEvacStartPoint(null);
      setEvacFloorId(null);
    } else {
      const room = rooms.find((r) => r.number === selectedRoomNumber);
      const center = room ? computeRoomCenter(room) : null;
      if (!center) return;
      setEvacOn(true);
      setEvacRoomNumber(selectedRoomNumber);
      setEvacStartPoint(center);
      const fid = config?.floors?.[floorIndex]?.id;
      setEvacFloorId(fid);
    }
  };

  const isEvacChecked =
    selectedRoomNumber && evacOn && evacRoomNumber === selectedRoomNumber;

  return (
    <>
      {selectedRoomInfo && (
        <div className="hover-info-box">
          <p>
            Room: <span>{selectedRoomInfo.name}</span>
          </p>
          <p>
            Number: <span>{selectedRoomInfo.number}</span>
          </p>
          <p>
            Status: <span>{selectedRoomInfo.status}</span>
          </p>
          <label style={{ display: "block", marginTop: 8 }}>
            <input
              type="checkbox"
              checked={!!isEvacChecked}
              onChange={handleToggleEvac}
            />
            Show Evacuation Path
          </label>
        </div>
      )}
      {evacOn && evacStartPoint && evacFloorId !== null && (
        <EvacuationPath
          scene={scene}
          floorId={evacFloorId}
          startPoint={evacStartPoint}
          enabled={true}
        />
      )}
    </>
  );
};

export default RoomBoxes;
