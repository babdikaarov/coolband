export default function OurClients() {
  type ClientCards = { id: number; src: string };
  const cards: ClientCards[] = new Array(10).fill({
    id: 1,
    src: "./assets/temp/cola.png",
  });
  return (
    <div className="our-clients">
      <h3>Наши клиенты</h3>
      <div className="client-cards">
        {cards.map((card, i) => (
          <div
            key={i}
            className="client-card"
            style={{ backgroundImage: `url(${card.src})` }}
          ></div>
        ))}
        <div style={{ minWidth: "100px" }}></div>
      </div>
    </div>
  );
}
