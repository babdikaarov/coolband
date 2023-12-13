import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import SocialLinks from "./SocialLinks";
import Navigation from "./Navigation";
import Language from "./Language";

export default function Header() {
  return (
    <header>
      <HashLink to="/#head">
        <h1>
          <img src="./assets/logos/coolbandLogo.png" alt="CoolBand" />
        </h1>
      </HashLink>
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
