import { FC, useEffect } from "react";
import { NavLink } from "react-router-dom";
type Logo = {
   mainLogo: boolean;
   color: string;
   src: string;
   alt: string;
};
interface LogoProps {
   logo: Logo;
}

const Logo: FC<LogoProps> = ({ logo }) => {
   const { color, src, alt, mainLogo } = logo;

   useEffect(() => {
      if (mainLogo) {
         document.documentElement.style.setProperty("--dynamic-mainLogo-color", color);
      } else {
         document.documentElement.style.setProperty("--dynamic-secondLogo-color", color);
      }
   }, []);

   return (
      <NavLink to={mainLogo ? "/" : "/studio"} onClick={() => window.scrollTo(0, 0)} className="page-logo">
         <div className={`hover-state-background ${!mainLogo ? "studioLogo" : "mainLogo"}`}></div>
         <img src={src} alt={alt} />
      </NavLink>
   );
};
export default Logo;
