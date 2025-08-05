import React, { useCallback, useMemo } from "react";

const FloorControls = ({
  floors,
  activeFloor,
  onFloorChange,
  activeDisplayOption,
  onOptionToggle,
}) => {
  // Memoize floor buttons to avoid unnecessary re-renders on changes irrelevant to the floors
  const floorButtons = useMemo(
    () => (
      <>
        {floors
          .map((floor) => (
            <button
              key={floor.floorNumber}
              className={activeFloor === floor.floorNumber ? "active" : ""}
              onClick={() => onFloorChange(floor.floorNumber)}
            >
              {floor.name}
            </button>
          ))

          // Reverse when rendering for display order
          .reverse()}
        <button
          className={activeFloor === "all" ? "active" : ""}
          onClick={() => onFloorChange("all")}
        >
          All Floors
        </button>
      </>
    ),
    [floors, activeFloor, onFloorChange]
  );

  const displayOptions = useMemo(
    () => [
      { label: "Show Temperature", value: "heatmap" },
      { label: "Show WiFi Signal Quality", value: "wifi" },
      { label: "Show Air Quality", value: "airQuality" },
      { label: "Show Room Boxes", value: "roomBoxes" },
      { label: "Show Objects", value: "icons" },
    ],
    []
  );

  const renderDisplayOptions = useCallback(
    () =>
      displayOptions.map((option) => (
        <label key={option.value}>
          <input
            type="checkbox"
            checked={activeDisplayOption === option.value}
            onChange={() => onOptionToggle(option.value)}
          />
          {option.label}
        </label>
      )),
    [displayOptions, activeDisplayOption, onOptionToggle]
  );

  return (
    <div className="controls">
      <div className="control-group">
        <h3>Floor Controls</h3>
        {floorButtons}
      </div>
      <div className="control-group">
        <h3>Display Options</h3>
        {renderDisplayOptions()}
      </div>
    </div>
  );
};

export default React.memo(FloorControls);
