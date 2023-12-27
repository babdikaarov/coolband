import { FC } from "react";
import CollabCard from "../../../../shared/UI/collabCard/CollabCard";
import ScrollComponentWrapper from "../../../../shared/UI/BlockWrapper/BlockWrapper";

interface CollabProps {
   cards: {
      src: string;
      alt: string;
      firstName: string;
      lastName: string;
   }[];
}
const Collab: FC<CollabProps> = ({ cards }) => {
   return (
      <ScrollComponentWrapper header={"Коллаборации"} id="collaboration">
         <div className="collab-cards">
            {cards.map((card, i) => (
               <CollabCard
                  key={i}
                  src={card.src}
                  alt={card.alt}
                  firstName={card.firstName}
                  lastName={card.lastName}
               ></CollabCard>
            ))}
            {/* Check with designers for below element */}
            <div style={{ minWidth: "100px" }}></div>
         </div>
      </ScrollComponentWrapper>
   );
};

export default Collab;
