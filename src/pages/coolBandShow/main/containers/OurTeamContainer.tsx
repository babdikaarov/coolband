import OurTeam from "../components/OurTeam";
import teamList from "../../../../temp/teamList";
import { useEffect, useState } from "react";

type Team = {
   src: string;
   role: string;
   name: string;
}[];

const OurTeamContainer = () => {
   const [team, setTeam] = useState<Team>(teamList);
   useEffect(() => {
      if (teamList) {
         setTeam(teamList);
      }
   }, [teamList]);

   return <OurTeam cards={team} />;
};

export default OurTeamContainer;
