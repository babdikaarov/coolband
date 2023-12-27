import React, { FC, ReactNode } from "react";
interface ScrollComponentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
   header: string;
   children: ReactNode;
}
const ScrollComponentWrapper: FC<ScrollComponentWrapperProps> = ({ header, className = "", id, children }) => {
   return (
      <section className={`${className} section_wrapper`} id={id}>
         <h2>{header}</h2>
         {children}
      </section>
   );
};

export default ScrollComponentWrapper;
