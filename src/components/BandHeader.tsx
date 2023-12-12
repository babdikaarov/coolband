import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import Navigation from "./Navigation";
import Language from "./Language";

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">
          <img src="./assets/logos/coolbandLogo.png" alt="CoolBand" />
        </Link>
      </h1>
      <nav className="header-nav">
        <Navigation />
        <div className="header-icons">
          <SocialLinks />
          <Language />
        </div>
      </nav>
      <div>
        <Link to="/">
          <img src="./assets/logos/coolStudioLogo.png" alt="CoolStudio" />
        </Link>
      </div>
    </header>
  );
}
