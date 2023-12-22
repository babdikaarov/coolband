import React, { FC, ReactNode } from "react";
interface ScrollComponentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  header: string;
  children: ReactNode;
}
const ScrollComponentWrapper: FC<ScrollComponentWrapperProps> = ({ header, children, ...props }) => {
  return (
    <div className={`shared-scroll-wrapper ${props.className}`}>
      <h3 className="global-component-header">{header}</h3>
      {children}
    </div>
  );
};

export default ScrollComponentWrapper;
