import { HashLink, NavHashLink } from "react-router-hash-link";
// import Language from "../../../../shared/UI/language/Language";
import SocialLinks from "../../../../shared/UI/socialLinks/SocialLinks";
import { NavLink } from "react-router-dom";
import { FC } from "react";
import Logo from "../../../../shared/UI/logo/Logo";
type LogoProps = {
   src: string;
   alt: string;
   color: string;
};
interface HeaderProps {
   links: {
      telegram: string;
      whatsapp: string;
      instagram: string;
      youtube: string;
      tiktok: string;
   };
   mainLogo: LogoProps;
   secondLogo: LogoProps;
   lyrics: string;
}

const Header: FC<HeaderProps> = ({ links, mainLogo, secondLogo, lyrics }) => {
   return (
      <header className="header">
         <Logo mainLogo={true} src={mainLogo.src} alt={mainLogo.alt} logoColor={mainLogo.color} />
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
                  <a href={lyrics}>Репертуар</a>
               </li>
            </ul>
            <SocialLinks links={links} />
         </nav>
         <Logo mainLogo={false} src={secondLogo.src} alt={secondLogo.alt} logoColor={secondLogo.color} />
      </header>
   );
};

export default Header;
