import React from "react";

const ToggleButton = ({ on, onToggle }) => {
  const outerStyle = {
    width: 52,
    height: 30,
    borderRadius: 16,
    padding: 4,
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    background: on ? "#222" : "#ddd",
    transition: "background 0.15s",
    border: "none",
  };
  const knobStyle = {
    width: 22,
    height: 22,
    borderRadius: "50%",
    background: on ? "#fff" : "#222",
    transform: on ? "translateX(22px)" : "translateX(0)",
    transition: "transform 0.15s, background 0.15s",
    boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
  };
  return (
    <button
      aria-pressed={on}
      onClick={() => onToggle(!on)}
      style={outerStyle}
      title={on ? "Dark mode ON" : "Dark mode OFF"}
    >
      <div style={knobStyle} />
    </button>
  );
};

const FloorControls = ({
  floors,
  activeFloor,
  onFloorChange,
  activeDisplayOption,
  onOptionToggle,
  darkMode,
  onDarkModeToggle,
}) => {
  const isAll = activeFloor === "all";
  const numericId =
    typeof activeFloor === "number" ? activeFloor : parseInt(activeFloor, 10);
  const showTheme = isAll || (!Number.isNaN(numericId) && numericId >= 0);

  return (
    <div className="controls" style={{ padding: 12 }}>
      <div className="control-group">
        <h3>Floor Controls</h3>
        {floors.toReversed().map((floor) => (
          <button
            key={floor.floorNumber}
            className={activeFloor === floor.floorNumber ? "active" : ""}
            onClick={() => onFloorChange(floor.floorNumber)}
            style={{
              marginRight: 6,
              marginBottom: 6,
              padding: "6px 10px",
            }}
          >
            {floor.name}
          </button>
        ))}
        <button
          className={isAll ? "active" : ""}
          onClick={() => onFloorChange("all")}
          style={{ marginBottom: 6, padding: "6px 10px" }}
        >
          All Floors
        </button>
      </div>

      <div className="control-group" style={{ marginTop: 12 }}>
        <h3>Display Options</h3>
        <label style={{ display: "block", marginBottom: 6 }}>
          <input
            type="checkbox"
            checked={activeDisplayOption === "heatmap"}
            onChange={() => onOptionToggle("heatmap")}
          />{" "}
          Show Temperature
        </label>
        <label style={{ display: "block", marginBottom: 6 }}>
          <input
            type="checkbox"
            checked={activeDisplayOption === "airQuality"}
            onChange={() => onOptionToggle("airQuality")}
          />{" "}
          Show Air Quality
        </label>
        <label style={{ display: "block", marginBottom: 6 }}>
          <input
            type="checkbox"
            checked={activeDisplayOption === "roomBoxes"}
            onChange={() => onOptionToggle("roomBoxes")}
          />{" "}
          Show Room Boxes
        </label>
        <label style={{ display: "block", marginBottom: 6 }}>
          <input
            type="checkbox"
            checked={activeDisplayOption === "icons"}
            onChange={() => onOptionToggle("icons")}
          />{" "}
          Show Objects
        </label>
      </div>

      {showTheme && (
        <div className="control-group" style={{ marginTop: 12 }}>
          <h3>Theme</h3>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <ToggleButton on={darkMode} onToggle={onDarkModeToggle} />
            <div>{darkMode ? "Dark Mode" : "Light Mode"}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloorControls;
