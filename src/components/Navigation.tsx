import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navigation() {
  return (
    <ul className="navigation">
      <li>
        <HashLink to={"/#about"}>О нас</HashLink>
      </li>
      <li>
        <NavLink to={"/events"}>Галерея</NavLink>
      </li>
      <li>
        <HashLink to={"/#collab"}>Коллаборация</HashLink>
      </li>
      <li>Репертуар</li>
    </ul>
  );
}
