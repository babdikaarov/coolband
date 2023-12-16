import teamList from "../temp/teamList";

export default function OurTeam() {
  type TeamCards = { id: number; src: string; role: string; name: string };
  const cards: TeamCards[] = teamList;
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
              <h4>{el.name}</h4>
              <p>{el.role}</p>
            </div>
          </div>
        ))}
        <div style={{ minWidth: "100px" }}></div>
      </div>
    </div>
  );
}
