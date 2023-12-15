import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const DG: any;
export default function TwoGis2() {
  const coolStudioLocation: number[] = [42.850329, 74.609962];
  const coolStudiolink: string =
    "https://2gis.kg/bishkek/firm/70000001066401992?m=74.609962%2C42.850329%2F16";

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://maps.api.2gis.ru/2.0/loader.js?pkg=basic";

    document.head.appendChild(script);

    script.addEventListener("load", initializeMap);

    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log("Timer has elapsed after 2 seconds!");
    }, 3000);
    return () => {
      clearTimeout(timerId);
      console.log("Timer has been cleared!");
    };
  }, []);

  function initializeMap() {
    let map;
    let myIcon;

    // Check if DG (2GIS) is defined
    if (DG.ready === true || typeof DG !== "undefined") {
      // Create a map centered at [54.98, 82.89] with zoom level 13
      map = DG.map("map", {
        center: coolStudioLocation,
        zoom: 17,
      });
      DG.marker(coolStudioLocation).addTo(map);

      map.on("click", function () {
        console.log("clicked");
        window.location.href = coolStudiolink;
      });

      //   Add Marker below

      //  Icon option
      myIcon = DG.icon({
        iconUrl: "https://coolband.netlify.app/coolband.png",
        iconSize: [38, 38],
      });
      DG.marker(coolStudioLocation, {
        icon: myIcon,
      })
        .addTo(map)
        .bindLabel("Мы находимся здесь!", {
          static: true,
        });
    }
  }

  return (
    <div
      id="map"
      className="map-container"
      style={{ width: "500px", height: "400px" }}
    ></div>
  );
}
