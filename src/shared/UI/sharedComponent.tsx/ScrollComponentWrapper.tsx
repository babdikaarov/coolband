import { FC, ReactNode } from "react";
interface ScrollComponentWrapperProps {
   header: string;
   children: ReactNode;
}
const ScrollComponentWrapper: FC<ScrollComponentWrapperProps> = ({ header, children }) => {
   return (
      <div className="shared-scroll-wrapper">
         <h3 className="global-component-header">{header}</h3>
         {children}
      </div>
   );
};

export default ScrollComponentWrapper;
