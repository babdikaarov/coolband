import React, { FC } from "react";
import { Link } from "react-router-dom";

interface LogoCSProps extends React.HTMLAttributes<HTMLImageElement> {
   src: string;
   alt: string;
}

const LogoCS: FC<LogoCSProps> = ({ ...props }) => {
   return (
      <div id="studioLogo">
         <Link to="/">
            <img {...props} />
         </Link>
      </div>
   );
};

export default LogoCS;
