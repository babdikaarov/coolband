import { FC } from "react";
import ReserveUsButton from "../../UI/HeroUI/buttons/ReserveUsButton";
import HeroText from "../../UI/HeroUI/heroText/HeroText";
import StudioButton from "../../UI/HeroUI/buttons/StudioButton";

interface HeroProps {
   contacts: string;
   video: {
      src: string;
      type: string;
   }[];
   image: {
      src: string;
      alt: string;
   }[];
   text: {
      header: string;
      paragraph: string;
   };
   mainPage: boolean;
}
const Hero: FC<HeroProps> = ({ mainPage, ...props }) => {
   return (
      <section className="hero">
         <video id="videoTag" autoPlay muted loop playsInline className="hero-video">
            {props.video.map((src, i) => (
               <source key={i} src={src.src} type={src.type} />
            ))}
         </video>
         <HeroText header={props.text.header} paragraph={props.text.paragraph} />
         {!mainPage ? <StudioButton /> : <ReserveUsButton whatsapp={props.contacts} />}
      </section>
   );
};

export default Hero;
