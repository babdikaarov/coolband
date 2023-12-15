export default function TwoGis() {
  //   const icon: string = "~u:https%3A%2F%2Fcoolband.netlify.app%2Fcoolband.png";
  const defaultIcon: string = "~c:yw";

  return (
    <div className="map">
      <img
        src={`https://static.maps.2gis.com/1.0?s=450x450&z=16&pt=42.850329,74.609962${defaultIcon}`}
      ></img>
    </div>
  );
}
