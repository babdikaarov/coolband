import React from "react";
import { Link } from "react-router-dom";
import gallery from "../temp/gallery";
export default function GalleryCards() {
  interface Events {
    eventID: number;
    name: string;
    date: string;
    description: string;
    items: {
      alt: string;
      src: string;
    }[];
  }
  const events: Events[] = gallery;

  return (
    <div className="gallery-cards">
      {events.map((event, i) => (
        <React.Fragment key={event.eventID + i}>
          <Link to={`/events/${event.eventID}`}>
            <div
              style={{ backgroundImage: `url(${event.items[1].src})` }}
              title={event.description}
            >
              <p>{event.date}</p>
              <p>{event.name}</p>
            </div>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}
