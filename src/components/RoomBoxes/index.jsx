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
      const isComplex = room.baseBounds && room.extensionBounds;
      let combinedMesh;

      if (isComplex) {
        const parentNode = new BABYLON.TransformNode(
          `parentNode-${index}`,
          scene
        );

        const { baseBounds, extensionBounds } = room;

        const baseBox = BABYLON.MeshBuilder.CreateBox(
          `baseBox-${index}`,
          {
            width: baseBounds.maxX - baseBounds.minX,
            depth: baseBounds.maxZ - baseBounds.minZ,
            height: 2.95,
          },
          scene
        );
        baseBox.position.x = (baseBounds.minX + baseBounds.maxX) / 2;
        baseBox.position.y = yLevel + 2.95 / 2;
        baseBox.position.z = (baseBounds.minZ + baseBounds.maxZ) / 2;
        baseBox.material = baseMaterial.clone();
        baseBox.isPickable = true;
        baseBox.actionManager = new BABYLON.ActionManager(scene);
        setupActions(baseBox, room.name);

        baseBox.parent = parentNode;

        const extensionBox = BABYLON.MeshBuilder.CreateBox(
          `extensionBox-${index}`,
          {
            width: extensionBounds.maxX - extensionBounds.minX,
            depth: extensionBounds.maxZ - extensionBounds.minZ,
            height: 2.95,
          },
          scene
        );
        extensionBox.position.x =
          (extensionBounds.minX + extensionBounds.maxX) / 2;
        extensionBox.position.y = yLevel + 2.95 / 2;
        extensionBox.position.z =
          (extensionBounds.minZ + extensionBounds.maxZ) / 2;
        extensionBox.material = baseMaterial.clone();
        extensionBox.isPickable = true;
        extensionBox.actionManager = new BABYLON.ActionManager(scene);
        setupActions(extensionBox, room.name);

        extensionBox.parent = parentNode;
        combinedMesh = parentNode;
      } else {
        const { minX, minZ, maxX, maxZ } = room.bounds;
        const width = maxX - minX;
        const depth = maxZ - minZ;

        combinedMesh = BABYLON.MeshBuilder.CreateBox(
          `box-${index}-floor-${floorIndex}`,
          { width, depth, height: 2.95 },
          scene
        );
        combinedMesh.position.x = (minX + maxX) / 2;
        combinedMesh.position.y = yLevel + 2.95 / 2;
        combinedMesh.position.z = (minZ + maxZ) / 2;
        combinedMesh.material = baseMaterial.clone();
        combinedMesh.isPickable = true;
        combinedMesh.actionManager = new BABYLON.ActionManager(scene);
        setupActions(combinedMesh, room.name);
      }

      return combinedMesh;
    });

    function setupActions(mesh, roomName) {
      mesh.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPointerOverTrigger,
          () => {
            if (mesh.name !== selectedBoxName) {
              mesh.material.alpha = 0.7;
            }
          }
        )
      );
      mesh.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPointerOutTrigger,
          () => {
            if (mesh.name !== selectedBoxName) {
              mesh.material.alpha = 0.3;
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
            setSelectedBoxName(mesh.name);
          }
        )
      );
    }

    boxes.forEach((box) => {
      const meshActionName = box.name;
      if (meshActionName === selectedBoxName) {
        box.material = highlightMaterial.clone();
      } else {
        box.material = baseMaterial.clone();
      }
    });

    const onPointerDown = (evt, pickResult) => {
      if (!pickResult.hit || !pickResult.pickedMesh) {
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
