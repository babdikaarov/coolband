import React, { FC } from "react";

interface OurEventsCardProps {
   src: string;
   alt: string;
}

const OurEventsCard: FC<OurEventsCardProps> = ({ src, alt }) => {
   return (
      <div className="our-events-card">
         <img src={src} alt={alt} />
      </div>
   );
};

export default OurEventsCard;
