import SocialLinks from "../../UI/socialLinks/SocialLinks";
import { FC, useEffect, useState } from "react";
import Logo from "../../UI/logo/Logo";
import { useLocation } from "react-router-dom";
import TopButtons from "../../UI/buttons/topButtons/TopButtons";

type logos = {
   bandLogo: Logo;
   studioLogo: Logo;
};
type lyrics = {
   lyrics: string;
};
interface HeaderProps {
   links: {
      telegram: string;
      whatsapp: string;
      instagram: string;
      youtube: string;
      tiktok: string;
   };
   pageLogos: logos;
   lyrics: string;
   NavList: FC<lyrics>;
}

const Header: FC<HeaderProps> = ({ links, pageLogos, lyrics, NavList }) => {
   const { bandLogo, studioLogo } = pageLogos;
   const [logoToDisplay, setLogoToDIsplay] = useState<Logo>(bandLogo);
   const { pathname } = useLocation();
   useEffect(() => {
      if (pathname == "/studio") {
         setLogoToDIsplay(studioLogo);
      } else if (pathname === "/") {
         setLogoToDIsplay(bandLogo);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [pathname]);

   return (
      <>
         <TopButtons />
         <header className="header">
            <Logo logo={logoToDisplay} />
            <nav className="header-nav">
               <NavList lyrics={lyrics} />
               <SocialLinks links={links} />
            </nav>
            {/* <Logo logo={pathname == "/studio" ? bandLogo : studioLogo} /> */}
         </header>
      </>
   );
};

export default Header;
