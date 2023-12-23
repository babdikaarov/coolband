import React, { FC, ReactNode } from "react";
interface ScrollComponentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  header: string;
  children: ReactNode;
}
const ScrollComponentWrapper: FC<ScrollComponentWrapperProps> = ({ header, className = "", id, children }) => {
  return (
    <div className={`shared-scroll-wrapper ${className}`}>
      <div id={id} className="anchor" />
      <h3 className="global-component-header">{header}</h3>
      {children}
    </div>
  );
};

export default ScrollComponentWrapper;
