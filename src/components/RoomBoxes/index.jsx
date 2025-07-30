import React, { useEffect, useState } from "react";
import * as BABYLON from "babylonjs";

const RoomBoxes = ({ rooms, scene, floorIndex, config }) => {
  const [selectedRoomInfo, setSelectedRoomInfo] = useState(null);
  const [selectedBoxName, setSelectedBoxName] = useState(null);

  useEffect(() => {
    if (!scene || !rooms || floorIndex === undefined) return;

    const yLevel =
      floorIndex *
      (config.visualization.wall_height +
        config.visualization.floor_thickness +
        config.visualization.floor_spacing);

    const boxes = rooms.map((room, index) => {
      const parentNode = new BABYLON.TransformNode(
        `parentNode-${index}`,
        scene
      );

      const createMesh = (name, bounds) => {
        const width = bounds.maxX - bounds.minX;
        const depth = bounds.maxZ - bounds.minZ;
        const height = 2.95;

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
        meshes.push(createMesh(`baseBox-${index}`, room.baseBounds));
      }
      if (room.extensionBoundsList) {
        room.extensionBoundsList.forEach((eb, idx) => {
          meshes.push(createMesh(`extensionBox-${index}-${idx}`, eb));
        });
      }
      if (room.bounds && !room.baseBounds && !room.extensionBoundsList) {
        meshes.push(
          createMesh(`box-${index}-floor-${floorIndex}`, room.bounds)
        );
      }

      setupActions(room.name, meshes);
      return { parentNode, roomName: room.name, meshes };
    });

    function setupActions(roomName, meshes) {
      meshes.forEach((mesh) => {
        mesh.actionManager.registerAction(
          new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPointerOverTrigger,
            () => {
              if (selectedBoxName !== roomName) {
                meshes.forEach((m) => (m.material.alpha = 0.7));
              }
            }
          )
        );
        mesh.actionManager.registerAction(
          new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPointerOutTrigger,
            () => {
              if (selectedBoxName !== roomName) {
                meshes.forEach((m) => (m.material.alpha = 0.3));
              }
            }
          )
        );
        mesh.actionManager.registerAction(
          new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            () => {
              setSelectedRoomInfo({
                name: roomName,
                status: selectedRoomInfo?.status || "Available",
              });
              setSelectedBoxName(roomName);
            }
          )
        );
      });
    }

    // Update highlight state
    boxes.forEach(({ roomName, meshes }) => {
      const isSelected = selectedBoxName === roomName;
      meshes.forEach((mesh) => {
        mesh.material.alpha = isSelected ? 0.7 : 0.3;
      });
    });

    const onPointerDown = (evt, pickResult) => {
      if (!pickResult.hit || !pickResult.pickedMesh) {
        setSelectedBoxName(null);
        setSelectedRoomInfo(null);
      }
    };
    scene.onPointerDown = onPointerDown;

    return () => {
      boxes.forEach(({ parentNode }) => parentNode.dispose());
      scene.onPointerDown = null;
    };
  }, [rooms, scene, floorIndex, config, selectedBoxName]);

  useEffect(() => {
    setSelectedRoomInfo(null);
  }, [floorIndex]);

  return (
    <>
      {selectedRoomInfo && (
        <div className="hover-info-box">
          <p>
            Room: <span>{selectedRoomInfo.name}</span>
          </p>
          <p>
            Status: <span>{selectedRoomInfo.status}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default RoomBoxes;
