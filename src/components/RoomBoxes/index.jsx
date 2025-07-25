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

    const baseMaterial = new BABYLON.StandardMaterial("baseMaterial", scene);
    baseMaterial.alpha = 0.3;
    baseMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.5, 1);
    baseMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

    const highlightMaterial = new BABYLON.StandardMaterial(
      "highlightMaterial",
      scene
    );
    highlightMaterial.alpha = 0.7;
    highlightMaterial.diffuseColor = new BABYLON.Color3(0.4, 0.4, 1);
    highlightMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

    const boxes = rooms.map((room, index) => {
      const { minX, minZ, maxX, maxZ } = room.bounds;
      const width = maxX - minX;
      const depth = maxZ - minZ;
      const height = 2.95;

      const box = BABYLON.MeshBuilder.CreateBox(
        `box-${index}`,
        { width, depth, height },
        scene
      );

      box.position.x = (minX + maxX) / 2;
      box.position.y = yLevel + height / 2;
      box.position.z = (minZ + maxZ) / 2;

      const boxMaterial = baseMaterial.clone();
      box.material = boxMaterial;

      box.isPickable = true;
      box.actionManager = new BABYLON.ActionManager(scene);

      // Add hover effect
      box.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPointerOverTrigger,
          () => {
            if (box.name !== selectedBoxName) {
              box.material.alpha = 0.7;
            }
          }
        )
      );

      box.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPointerOutTrigger,
          () => {
            if (box.name !== selectedBoxName) {
              box.material.alpha = 0.3;
            }
          }
        )
      );

      // Set info box on click
      box.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger,
          () => {
            setSelectedRoomInfo({
              name: room.name,
              status: room.isOccupied ? "Occupied" : "Available",
            });

            setSelectedBoxName(box.name);
          }
        )
      );

      return box;
    });

    // Update box materials based on the selected box when selectedBoxName changes
    boxes.forEach((box) => {
      if (box.name === selectedBoxName) {
        box.material = highlightMaterial.clone();
      } else {
        box.material = baseMaterial.clone();
      }
    });

    // Scene-wide click event
    const onPointerDown = (evt, pickResult) => {
      if (!pickResult.hit || boxes.indexOf(pickResult.pickedMesh) === -1) {
        setSelectedBoxName(null);
        setSelectedRoomInfo(null);
      }
    };

    scene.onPointerDown = onPointerDown;

    return () => {
      boxes.forEach((box) => box.dispose());
      scene.onPointerDown = null;
    };
  }, [rooms, scene, floorIndex, config, selectedBoxName]);

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
