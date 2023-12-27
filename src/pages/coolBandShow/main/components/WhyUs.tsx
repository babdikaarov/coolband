import { FC } from "react";
import { markIcon } from "../../../../shared/UI/icons/whyUsIcon";
import ScrollComponentWrapper from "../../../../shared/UI/BlockWrapper/BlockWrapper";

type whyData = {
   header: string;
   paragraph: string;
};

interface WhyUsProps {
   whyUsData: whyData[];
}

const WhyUs: FC<WhyUsProps> = ({ whyUsData }) => {
   return (
      <ScrollComponentWrapper header="Почему выбирают нас" className="why-us">
         <section className="why-us-grid">
            {whyUsData.map((el, i) => (
               <article key={i}>
                  <h3>
                     <span>{markIcon}</span>
                     {el.header}
                  </h3>
                  <p>{el.paragraph}</p>
               </article>
            ))}
         </section>
      </ScrollComponentWrapper>
   );
};

export default WhyUs;
