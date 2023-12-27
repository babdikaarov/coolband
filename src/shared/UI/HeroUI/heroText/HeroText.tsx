import { FC } from "react";

interface HeroTextProps {
   header: string;
   paragraph: string;
}

const HeroText: FC<HeroTextProps> = ({ header, paragraph }) => {
   if (header.length === 0) return;
   return (
      <div className="hero-text">
         <h1>{header}</h1>
         <h6>{paragraph}</h6>
      </div>
   );
};

export default HeroText;
