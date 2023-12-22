import { FC } from "react";
import { markIcon } from "../../../../shared/UI/icons/WhyUsIcon";

import ScrollComponentWrapper from "../../../../shared/UI/sharedComponent.tsx/ScrollComponentWrapper";
import React from "react";
import { NavLink } from "react-router-dom";

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
        {whyUsData.map((element, i) => {
          const anchoredParagraph = (
            <p>
              {element.paragraph.split("Cool Studio").map((part, index) =>
                index < element.paragraph.split("Cool Studio").length - 1 ? (
                  <React.Fragment key={index}>
                    {part}
                    <NavLink to="./studio/#edu">Cool Studio</NavLink>
                  </React.Fragment>
                ) : (
                  part
                ),
              )}
            </p>
          );
          return (
            <article key={i}>
              <h4 className="h3-medium">
                <span>{markIcon}</span>
                {element.header}
              </h4>
              <p className="h5-medium">{anchoredParagraph}</p>
            </article>
          );
        })}
      </div>
    </ScrollComponentWrapper>
  );
};

export default WhyUs;
