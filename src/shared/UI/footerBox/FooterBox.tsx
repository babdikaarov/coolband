import React, { FC } from "react";

interface FooterBoxProps extends React.HTMLAttributes<HTMLLIElement> {
   text: {
      p: string;
      li: string[];
   };
}

const FooterBox: FC<FooterBoxProps> = ({ text, ...props }) => {
   return (
      <li {...props}>
         <p>{text.p}</p>
         <ul>
            {text.li.map((el, i) => (
               <li key={i}>{el}</li>
            ))}
         </ul>
      </li>
   );
};

export default FooterBox;
