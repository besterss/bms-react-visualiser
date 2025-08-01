import React from "react";

export const CircleDisplayBox = ({ currentMode, onModeChange }) => {
  return (
    <div className="circle-display-box">
      <h4>WiFi Range Display Mode</h4>
      <div>
        <label>
          <input
            type="radio"
            name="circleDisplay"
            checked={currentMode === "click"}
            onChange={() => onModeChange("click")}
          />
          Range on click
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="circleDisplay"
            checked={currentMode === "all"}
            onChange={() => onModeChange("all")}
          />
          Show range for all
        </label>
      </div>
    </div>
  );
};

export default CircleDisplayBox;
