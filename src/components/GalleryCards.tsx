import { Link } from "react-router-dom";

export default function GalleryCards() {
  const events: number[] = Array(15).fill(1);

  return (
    <div className="gallery-cards">
      {events.map((_, i) => (
        <Link to={`/events/${i}`}>
          <div key={i}>
            <p>Date</p>
            <p>Name of event {i}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
