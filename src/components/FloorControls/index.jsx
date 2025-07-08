export const FloorControls = ({ 
  floors, 
  activeFloor, 
  onFloorChange, 
  showHeatmap, 
  showWifi, 
  onHeatmapToggle, 
  onWifiToggle 
}) => {
  return (
    <div className="controls">
      <div className="control-group">
        <h3>Floor Controls</h3>
        {floors.map((floor) => (
          <button
            key={floor.floorNumber}
            className={activeFloor === floor.floorNumber ? 'active' : ''}
            onClick={() => onFloorChange(floor.floorNumber)}
          >
            {floor.name}
          </button>
        ))}
        <button
          className={activeFloor === 'all' ? 'active' : ''}
          onClick={() => onFloorChange('all')}
        >
          All Floors
        </button>
      </div>

      <div className="control-group">
        <h3>Display Options</h3>
        <label>
          <input
            type="checkbox"
            checked={showHeatmap}
            onChange={(e) => onHeatmapToggle(e.target.checked)}
          />
          Show Temperature in Floor
        </label>
        <label>
          <input
            type="checkbox"
            checked={showWifi}
            onChange={(e) => onWifiToggle(e.target.checked)}
          />
          Show WiFi Signal Quality
        </label>
      </div>
    </div>
  );
};

export default FloorControls;