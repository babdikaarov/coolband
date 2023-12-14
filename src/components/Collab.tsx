export default function Collab() {
  type TeamCards = {
    id: number;
    src: string;
    firstName: string;
    lastName: string;
  };
  const cards: TeamCards[] = new Array(10).fill({
    id: 1,
    src: "./assets/temp/Card.jpg",
    firstName: "firstName",
    lastName: "lastName",
  });
  return (
    <div className="our-collab" id="collab">
      <h3>Коллаборация</h3>
      <div className="collab-cards">
        {cards.map((el, i) => (
          <div className="collab-card-container" key={i}>
            <div
              key={i}
              className="collab-card"
              style={{ backgroundImage: `url(${el.src})` }}
            >
              <div className="shadow"></div>
            </div>
            <p>
              {i + 1} {el.firstName} {el.lastName}
            </p>
          </div>
        ))}
        <div style={{ minWidth: "100px" }}></div>
      </div>
    </div>
  );
}
