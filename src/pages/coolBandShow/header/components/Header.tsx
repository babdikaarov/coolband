import { HashLink, NavHashLink } from "react-router-hash-link";
import Language from "../../../../shared/UI/language/Language";
import LogoCB from "../../../../shared/UI/logoCB/LogoCB";
import LogoCS from "../../../../shared/UI/logoCS/LogoCS";
import SocialLinks from "../../../../shared/UI/socialLinks/SocialLinks";
import { NavLink } from "react-router-dom";
import { FC } from "react";

interface HeaderProps {
   links: {
      telegram: string;
      whatsapp: string;
      instagram: string;
      youtube: string;
      tiktok: string;
   };
   mainLogo: {
      src: string;
      alt: string;
   };
   secondLogo: {
      src: string;
      alt: string;
   };
   lyrics: string;
}

const Header: FC<HeaderProps> = ({ links, mainLogo, secondLogo, lyrics }) => {
   return (
      <header className="header">
         {/* LogoCB will accept dynamic data from backend */}
         <LogoCB className="header-active-logo" src={mainLogo.src} alt={mainLogo.alt} />
         <nav className="header-nav">
            <ul className="navigation">
               <li>
                  <NavHashLink to={"/#home"} className={({ isActive }) => (isActive ? "active" : "")}>
                     Главная
                  </NavHashLink>
               </li>
               <li>
                  <HashLink to={"/#about"}>О нас</HashLink>
               </li>
               <li>
                  <NavLink to={"/gallery"}>Галерея</NavLink>
               </li>
               <li>
                  <HashLink to={"/#collab"}>Коллаборация</HashLink>
               </li>
               <li>
                  {/* anchor tag data from backend */}
                  <a href={lyrics}>Репертуар</a>
               </li>
            </ul>
            {/* SocialLinks accepts data from backend */}
            <SocialLinks links={links} />
            {/* Language unfinished logic i18next */}
            <Language />
         </nav>
         {/* LogoCS will accept data from backend */}
         <LogoCS className="header-passive-logo" src={secondLogo.src} alt={secondLogo.alt} />
      </header>
   );
};

export default Header;
