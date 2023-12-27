import SocialLinks from "../../UI/HeaderUI/socialLinks/SocialLinks";
import { FC, useEffect, useState } from "react";
import Logo from "../../UI/singleElements/Logo/Logo";
import { useLocation } from "react-router-dom";
import TopButtons2 from "../../UI/HeaderUI/topButtons2/TopButtons2";

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

const Header3: FC<HeaderProps> = ({ links, pageLogos, lyrics, NavList }) => {
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
         <header className="header">
            <nav>
               <Logo logo={logoToDisplay} />
               <NavList lyrics={lyrics} />
               <SocialLinks links={links} />
            </nav>
            <TopButtons2 />
         </header>
      </>
   );
};

export default Header3;
