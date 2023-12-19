import { FC } from "react";
import TeamCard from "../../../../shared/UI/teamCard/TeamCard";
import ScrollComponentWrapper from "../../../../shared/UI/sharedComponent.tsx/ScrollComponentWrapper";

interface OurTeamProps {
   cards: {
      src: string;
      role: string;
      name: string;
   }[];
}
const OurTeam: FC<OurTeamProps> = ({ cards }) => {
   return (
      <ScrollComponentWrapper header={"Наша команда"}>
         <div className="team-cards">
            {cards.map((card, i) => (
               <TeamCard key={i} src={card.src} role={card.role} name={card.name} />
            ))}
            <div style={{ minWidth: "100px" }}></div>
         </div>
      </ScrollComponentWrapper>
   );
};

export default OurTeam;
