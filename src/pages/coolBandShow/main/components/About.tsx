import { FC } from "react";
import ScrollComponentWrapper from "../../../../shared/UI/BlockWrapper/BlockWrapper";
import React from "react";

interface AboutProps {
   aboutData: {
      img: string;
      alt: string;
      paragraphList: string[];
   };
   header: string;
   className: string;
}

const About: FC<AboutProps> = ({ aboutData, header, className = "" }) => {
   const renderTextWithLineBreaks = (text: string) => {
      const lines = text.split("\n");
      return (
         <>
            {lines.map((line: string, index: number) => (
               <React.Fragment key={index}>
                  {line}
                  {index < lines.length && <br />}
               </React.Fragment>
            ))}
         </>
      );
   };
   return (
      <section className="about" id="about">
         <ScrollComponentWrapper header={header} className="about-content">
            <>
               {aboutData.paragraphList.map((p, i) => (
                  <p key={i} className="about-content-text">
                     {renderTextWithLineBreaks(p)}
                  </p>
               ))}
            </>
         </ScrollComponentWrapper>
         <img className={`about-${className}-image`} src={aboutData.img} alt={aboutData.alt} />
         {/* <div className="about-media">
      </div> */}
      </section>
   );
};

export default About;
