import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const DG: any;
export default function TwoGis() {
  const coolStudioLocation: number[] = [42.850329, 74.609962];
  const coolStudiolink: string = "https://2gis.kg/bishkek/firm/70000001066401992?m=74.609962%2C42.850329%2F16";

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://maps.api.2gis.ru/2.0/loader.js?pkg=basic";

    document.head.appendChild(script);

    script.onload = () => initializeMap();

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  function initializeMap() {
    let map;
    let myIcon;
    let marker: { bindPopup: (arg0: string) => void; openPopup: () => void };
    const openOnHover = document.getElementById("map");

    // Check if DG (2GIS) is defined
    // if (DG.ready === true || typeof DG !== "undefined") {
    // Create a map centered at [54.98, 82.89] with zoom level 13
    // const DG = window.DG;
    DG.then(function () {
      map = DG.map("map", {
        center: coolStudioLocation,
        zoom: 15,
        minZoom: 12,
        maxZoom: 18,
      });
      // DG.marker(coolStudioLocation).addTo(map);
      map.on("click", function () {
        console.log("clicked");
        window.location.href = coolStudiolink;
      });

      //   Add Marker below

      //  Icon option
      myIcon = DG.icon({
        iconUrl: "/coolband.png",
        iconSize: [38, 38],
      });
      DG.marker(coolStudioLocation, {
        icon: myIcon,
      }).addTo(map);

      // DG.marker(coolStudioLocation).addTo(map);
      // .bindLabel("Мы находимся здесь!", {
      // static: true,
      // });
      marker = DG.marker(coolStudioLocation).addTo(map);
      marker.bindPopup("Мы находимся здесь!");
      if (openOnHover) {
        openOnHover.onmouseover = function () {
          marker.openPopup();
        };
      }
    });
    // }
  }

  return <div id="map" className="map-container" style={{ width: "100%", height: "100%" }}></div>;
}
