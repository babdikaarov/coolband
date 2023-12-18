import React, { FC } from "react";
import { HashLink } from "react-router-hash-link";

interface LogoCBProps extends React.HTMLAttributes<HTMLImageElement> {
   src: string;
   alt: string;
}

const LogoCB: FC<LogoCBProps> = ({ ...props }) => {
   return (
      <HashLink to="/#home">
         <h1 id="page-logo">
            <img {...props} />
         </h1>
      </HashLink>
   );
};

export default LogoCB;
