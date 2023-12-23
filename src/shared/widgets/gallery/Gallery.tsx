import React, { FC } from "react";
import { Link } from "react-router-dom";

interface GalleryProps {
  galleryData: {
    eventID: number;
    name: string;
    date: string;
    description: string;
    items: {
      alt: string;
      src: string;
    }[];
  }[];
}

const Gallery: FC<GalleryProps> = ({ galleryData }) => {
  const events = galleryData;

  return (
    <div className="gallery">
      {events.map((event, i) => (
        <React.Fragment key={event.eventID + i}>
          <Link to={`/gallery/${event.eventID}`}>
            <div
              style={{ backgroundImage: `url(${event.items[1].src})` }}
              title={event.description}
              className="gallery-cards-content"
            >
              <p>{event.date}</p>
              <h4 className="h4-bold">{event.name}</h4>
            </div>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Gallery;
