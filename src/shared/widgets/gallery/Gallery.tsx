import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

type GalleryProps = {
  galleryData: {
    eventID: number;
    name: string;
    date: string;
    description: string;
    poster: string;
    items: {
      alt: string;
      src: string;
      view: string;
    }[];
  }[];
};

const Gallery: FC<GalleryProps> = ({ galleryData }) => {
  const [events, setEvents] = useState(galleryData);
  // const targets = document.querySelectorAll("gallery-cards");
  // const classTarget = document.querySelectorAll("galleryCardImg");

  // const lazyLoad = (target: Element) => {
  //   const io = new IntersectionObserver((entries, observer) => {
  //     entries.forEach((entry) => {
  //       console.log("ntery");
  //       if (entry.isIntersecting) {
  //         classTarget;
  //         const img = entry.target;
  //         const src = img.getAttribute("mysrc");
  //         img.setAttribute("src", src);
  //         // can add classList
  //         observer.disconnect;
  //       }
  //     });
  //   });
  //   io.observe(target);
  // };
  // useEffect(() => {
  //   targets.forEach(lazyLoad);
  // });

  // window.addEventListener("scroll", () => {
  //   targets.forEach((img) => {
  //     console.log("img");
  //     const rect = img.getBoundingClientRect().top;
  //     if (rect <= window.innerHeight) {
  //       const rcs = img.getAttribute("replace");
  //       img.setAttribute("src", rcs);
  //     }
  //   });
  // });
  useEffect(() => {
    if (galleryData) {
      setEvents(galleryData);
    }
  }, [galleryData]);

  return (
    <div className="gallery">
      {events.map((event, i) => (
        <React.Fragment key={event.eventID + i}>
          <div className="gallery-cards">
            <Link to={`/gallery/${event.eventID}`}>
              <img className="galleryCardImg" src={event.poster} alt={event.name} loading="lazy" />
              <div className="gallery-cards-content">
                <p>{event.date}</p>
                <h4 className="h4-bold">{`Id of event ${event.eventID}`}</h4>
              </div>
            </Link>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Gallery;
