export default function Hero() {
  return (
    <div className="hero-container" id="head">
      <video id="videoTag" autoPlay muted loop playsInline className="hero">
        <source src="./assets/videos/heroVideo.mp4" type="video/mp4" />
      </video>
      <a
        className="hero-link"
        href="https://wa.me/+97433344627?text=some%20how%20its%20working"
      >
        Пригласить на мероприятие
      </a>
    </div>
  );
}
