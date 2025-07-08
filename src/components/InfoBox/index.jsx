export const InfoBox = ({ roomInfo }) => {
  return (
    <div className="info-box">
      <p>Active Floor: <span>{roomInfo.activeFloor}</span></p>
      <p>Floor Area: <span>{roomInfo.floorArea}</span></p>
      <p>Room Temperature: <span>{roomInfo.temperature}</span></p>
      <p>WiFi Quality: <span>{roomInfo.wifiSignal}</span></p>
    </div>
  );
};

export default InfoBox;