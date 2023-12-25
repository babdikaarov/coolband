import { FC, useEffect } from "react";
import ReserveUsButton from "../../UI/buttons/ReserveUsButton";
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
}
const Hero: FC<HeroProps> = ({ ...props }) => {
   // const video = useRef(null)

   useEffect(() => {
      // if (VideoColorSpace.current) {
      //   video play
      // }
      // video
      // const video = document.getElementById("videoTag");
      // video?.onload(() => {
      //   plasad;
   });
   // });
   return (
      <div className="hero">
         <video id="videoTag" autoPlay muted loop playsInline className="hero-video">
            {props.video.map((src, i) => (
               <source key={i} src={src.src} type={src.type} />
            ))}
         </video>
         <ReserveUsButton whatsapp={props.contacts} />
      </div>
   );
};

export default Hero;
