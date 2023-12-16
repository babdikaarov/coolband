import partners from "../temp/partners";
export default function OurClients() {
  type ClientCards = { alt: string; src: string };
  const cards: ClientCards[] = partners;

  function checkFileExtension(src: string): string {
    const regex = /\.png$/;
    return regex.test(src) ? "png" : "NoPng";
  }

  return (
    <div className="our-clients">
      <h3>Наши клиенты</h3>
      <div className="client-cards">
        {cards.map((card, i) => (
          <img
            key={i}
            className={`client-card ${checkFileExtension(card.src)}`}
            src={card.src}
            alt={card.alt}
          ></img>
        ))}
        <div style={{ minWidth: "100px" }}></div>
      </div>
    </div>
  );
}
