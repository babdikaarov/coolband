import { FC } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface BandNavListProps {
   lyrics: string;
}

const BandNavList: FC<BandNavListProps> = ({ lyrics }) => {
   const { pathname } = useLocation();
   return (
      <ul className="navigation">
         <li>
            <HashLink to={"/#home"} onClick={() => window.scrollTo(0, 0)} className={pathname === "/" ? "active" : ""}>
               Главная
            </HashLink>
         </li>
         <li>
            <HashLink to={"/#about"}>О нас</HashLink>
         </li>
         <li>
            <HashLink
               to={"/gallery"}
               onClick={() => window.scrollTo(0, 0)}
               className={pathname === "/gallery" ? "active" : ""}
            >
               Галерея
            </HashLink>
         </li>
         <li>
            <HashLink to={"/#collaboration"}>Коллаборация</HashLink>
         </li>
         <li>
            <a href={lyrics}>Репертуар</a>
         </li>
      </ul>
   );
};

export default BandNavList;
