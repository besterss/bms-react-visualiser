import React from "react";

const FloorControls = ({
  floors,
  activeFloor,
  onFloorChange,
  activeDisplayOption,
  onOptionToggle,
}) => {
  return (
    <div className="controls">
      <div className="control-group">
        <h3>Floor Controls</h3>
        {floors.toReversed().map((floor) => (
          <button
            key={floor.floorNumber}
            className={activeFloor === floor.floorNumber ? "active" : ""}
            onClick={() => onFloorChange(floor.floorNumber)}
          >
            {floor.name}
          </button>
        ))}
        <button
          className={activeFloor === "all" ? "active" : ""}
          onClick={() => onFloorChange("all")}
        >
          All Floors
        </button>
      </div>
      <div className="control-group">
        <h3>Display Options</h3>
        <label>
          <input
            type="checkbox"
            checked={activeDisplayOption === "heatmap"}
            onChange={() => onOptionToggle("heatmap")}
          />
          Show Temperature
        </label>
        <label>
          <input
            type="checkbox"
            checked={activeDisplayOption === "wifi"}
            onChange={() => onOptionToggle("wifi")}
          />
          Show WiFi Signal Quality
        </label>
        <label>
          <input
            type="checkbox"
            checked={activeDisplayOption === "airQuality"}
            onChange={() => onOptionToggle("airQuality")}
          />
          Show Air Quality
        </label>
        <label>
          <input
            type="checkbox"
            checked={activeDisplayOption === "roomBoxes"}
            onChange={() => onOptionToggle("roomBoxes")}
          />
          Show Room Boxes
        </label>
        {/* New option for showing icons */}
        <label>
          <input
            type="checkbox"
            checked={activeDisplayOption === "icons"}
            onChange={() => onOptionToggle("icons")}
          />
          Show Objects
        </label>
      </div>
    </div>
  );
};

export default FloorControls;
