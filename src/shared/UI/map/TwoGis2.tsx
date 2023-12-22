import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const DG: any;
export default function TwoGis2() {
  const coolStudioLocation: number[] = [42.850329, 74.609962];
  const coolStudiolink: string = "https://2gis.kg/bishkek/firm/70000001066401992?m=74.609962%2C42.850329%2F16";

  useEffect(() => {
    // console.log(DG);
    const script = document.createElement("script");

    script.src = "https://maps.api.2gis.ru/2.0/loader.js?pkg=basic";
    document.head.appendChild(script);
    // console.log(script);
    script.onload = () => {
      // console.log(typeof DG);
      console.log("Map has been loaded!");
      initializeMap();
    };

    // script.addEventListener("load", initializeMap);

    return () => {
      // document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {}, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  function initializeMap() {
    let map;
    let myIcon;
    if (DG.ready === true || typeof DG !== "undefined") {
      map = DG.map("map", {
        center: coolStudioLocation,
        zoom: 16,
        minZoom: 10,
        maxZoom: 17,
      });
      DG.marker(coolStudioLocation).addTo(map);

      map.on("click", function () {
        console.log("clicked");
        window.location.href = coolStudiolink;
      });

      //  Icon option
      myIcon = DG.icon({
        iconUrl: "/coolband.png",
        iconSize: [38, 38],
      });
      DG.marker(coolStudioLocation, {
        icon: myIcon,
      }).addTo(map);
      myIcon.bindLabel("Мы находимся здесь!", {
        static: true,
      });
    }
  }

  return <div id="map" className="map-container" style={{ width: "100%", height: "100%" }}></div>;
}
