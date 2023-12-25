import { FC } from "react";
import ScrollComponentWrapper from "../../UI/sharedComponent.tsx/ScrollComponentWrapper";

interface AboutProps {
   img: string;
   alt: string;
   paragraphList: string[];
}

const About: FC<AboutProps> = ({ img, alt, paragraphList }) => {
   return (
      <section className="about" id="about">
         <ScrollComponentWrapper header="Cool Show band" className="about-content">
            <div>
               {paragraphList.map((p, i) => (
                  <p key={i} className="about-content-text">
                     {p}
                  </p>
               ))}
            </div>
         </ScrollComponentWrapper>
         <div className="about-image">
            <img src={img} alt={alt} />
         </div>
      </section>
   );
};

export default About;
