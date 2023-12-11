// import { useEffect, useState } from "react";

export default function Hero() {
  // const [videoLoaded, setVideoLoaded] = useState(false);

  // useEffect(() => {
  //   const videoElement = document.getElementById("videoTag");

  //   if (videoElement) {
  //     videoElement.addEventListener("loadeddata", () => {
  //       setVideoLoaded(true);
  //     });
  //   }
  // }, []);
  return (
    <div className="hero-container">
      {/* {videoLoaded && (
        <video id="videoTag" autoPlay muted loop className="hero">
          <source src="./assets/videos/heroVideo.mp4" type="video/mp4" />
        </video>
      )} */}
      <video id="videoTag" autoPlay muted loop className="hero">
        <source src="./assets/videos/heroVideo.mp4" type="video/mp4" />
      </video>
      <a
        className="hero-link"
        href="https://wa.me/+97433344627?text=some%20how%20its%20working"
      >
        invite
      </a>
    </div>
  );
}
