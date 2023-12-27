import { FC } from "react";
import ScrollComponentWrapper from "../../../../shared/UI/BlockWrapper/BlockWrapper";
import MoreDetailsButton from "../../../../shared/UI/buttons/MoreDetailsButton";
import OurEventsCard from "../../../../shared/UI/singleElements/ourEventsCard/OurEventsCard";
import Lashes from "../../../../shared/UI/singleElements/lashes/Lashes";

interface OurEventsProps {
   ourEventsCards: { alt: string; src: string }[];
}

const OurEvents: FC<OurEventsProps> = ({ ourEventsCards }) => {
   return (
      <ScrollComponentWrapper header={"Наши мероприятия"} className="our-events">
         <div>
            <Lashes className="curve-shape-top" />
            <div className="our-events-container">
               {ourEventsCards.map((card, i) => (
                  <OurEventsCard key={i} src={card.src} alt={card.alt} />
               ))}
            </div>
            <Lashes className="curve-shape-bottom" />
         </div>

         <MoreDetailsButton />
      </ScrollComponentWrapper>
   );
};

export default OurEvents;
