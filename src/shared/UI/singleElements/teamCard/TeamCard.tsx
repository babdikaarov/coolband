import { FC } from "react";

interface TeamCardProps {
   src: string;
   role: string;
   name: string;
}

// make lanscape and portrait logic for cards

const TeamCard: FC<TeamCardProps> = ({ src, role, name }) => {
   return (
      <div className="team-card">
         <div className="team-card-content">
            <div className="team-card-content-front">
               <div className="shadow"></div>
               <img src={src} alt={name} />
               <h3>{name}</h3>
               <p>{role}</p>
            </div>
            <div className="team-card-content-back">
               <div className="shadow"></div>
               <video src="/assets/videos/flipVideo.mp4" autoPlay muted loop></video>
               <h3>{name}</h3>
               <p>{role}</p>
            </div>
         </div>
      </div>
   );
};

export default TeamCard;
