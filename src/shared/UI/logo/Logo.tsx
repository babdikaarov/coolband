import React, { FC, useState } from "react";
import { HashLink } from "react-router-hash-link";

interface LogoProps extends React.HTMLAttributes<HTMLImageElement> {
   mainLogo: boolean;
   logoColor: string;
   src: string;
   alt: string;
}

const Logo: FC<LogoProps> = ({ mainLogo, logoColor, src, alt, ...props }) => {
   const [redirection, setRedirection] = useState<string>("#main");

   useState(() => {
      if (!mainLogo) {
         setRedirection("/studio/#main");
      }
   });

   const radialGradient = {
      background: `radial-gradient(69.21% 74.92% at 0% 106.05%, ${logoColor} 13.34%, ${logoColor} 41.83%, ${logoColor} 63.51%, ${logoColor} 90.88%)`,
   };

   return (
      <HashLink to={redirection}>
         <div className={`page-logo `}>
            <div className="hover-state-background" style={radialGradient}></div>
            <img src={src} alt={alt} {...props} />
         </div>
      </HashLink>
   );
};
export default Logo;
