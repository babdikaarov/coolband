export default function OurTeam() {
  type TeamCards = { id: number; src: string; name: string; role: string };
  const cards: TeamCards[] = new Array(10).fill({
    id: 1,
    src: "./assets/temp/Card.jpg",
    name: "Anara",
    role: "Vocal",
  });
  return (
    <div className="our-team">
      <h3>Наша команда</h3>
      <div className="team-cards">
        {cards.map((el, i) => (
          <div
            key={i}
            className="team-card"
            style={{ backgroundImage: `url(${el.src})` }}
          >
            <div className="shadow"></div>
            <div className="team-card-content">
              <h4>
                {i + 1} {el.name}
              </h4>
              <p>{el.role}</p>
            </div>
          </div>
        ))}
        <div style={{ minWidth: "100px" }}></div>
      </div>
    </div>
  );
}
