import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero-container">
      <video autoPlay muted loop className="hero">
        <source src="./assets/videos/heroVideo.mp4" type="video/mp4" />
      </video>

      <Link
        className="hero-link"
        to="https://wa.me/+97433344627?text=some%20how%20its%20working"
      >
        <h3>INVITE US</h3>
      </Link>
    </div>
  );
}
