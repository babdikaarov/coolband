import { FC } from "react";
import ScrollComponentWrapper from "../../../../shared/UI/sharedComponent.tsx/ScrollComponentWrapper";
import MoreDetailsButton from "../../../../shared/UI/buttons/MoreDetailsButton";
import OurEventsCard from "../../../../shared/UI/ourEventsCard/OurEventsCard";
import Lashes from "../../../../shared/UI/lashes/Lashes";

interface OurEventsProps {
   ourEventsCards: { alt: string; src: string }[];
}

const OurEvents: FC<OurEventsProps> = ({ ourEventsCards }) => {
   return (
      <ScrollComponentWrapper header={"Наши мероприятия"}>
         <Lashes>
            <div className="our-events-container">
               {ourEventsCards.map((card, i) => (
                  <OurEventsCard key={i} src={card.src} alt={card.alt} />
               ))}
            </div>
         </Lashes>

         <MoreDetailsButton />
      </ScrollComponentWrapper>
   );
};

export default OurEvents;
