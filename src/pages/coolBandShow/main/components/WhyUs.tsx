import { FC } from "react";
import { markIcon } from "../../../../shared/UI/icons/whyUsIcon";
import ScrollComponentWrapper from "../../../../shared/UI/sharedComponent.tsx/ScrollComponentWrapper";

type whyData = {
  header: string;
  paragraph: string;
};

interface WhyUsProps {
  whyUsData: whyData[];
}

const WhyUs: FC<WhyUsProps> = ({ whyUsData }) => {
  return (
    <ScrollComponentWrapper header="Почему выбирают нас">
      <div className="why-us">
        {whyUsData.map((el, i) => (
          <article key={i}>
            <h4 className="h3-medium">
              <span>{markIcon}</span>
              {el.header}
            </h4>
            <p className="h5-medium">{el.paragraph}</p>
          </article>
        ))}
      </div>
    </ScrollComponentWrapper>
  );
};

export default WhyUs;
