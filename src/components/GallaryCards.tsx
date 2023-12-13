export default function GallaryCards() {
  const events: number[] = Array(15).fill(1);

  return (
    <div className="gallary-cards">
      {events.map((_, i) => (
        <div key={i}>
          <p>Date</p>
          <p>Name of event</p>
        </div>
      ))}
    </div>
  );
}
