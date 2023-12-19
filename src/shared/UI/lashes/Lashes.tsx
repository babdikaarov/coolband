import { FC, ReactNode } from "react";
interface LashesProps {
   children: ReactNode;
}
const Lashes: FC<LashesProps> = ({ children }) => {
   return (
      <>
         <div className="curve-shape-top">
            <svg
               data-name="Layer 1"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 1200 120"
               preserveAspectRatio="none"
            >
               <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"></path>
            </svg>
         </div>
         {children}
         <div className="curve-shape-bottom">
            <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
               <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"></path>
            </svg>
         </div>
      </>
   );
};

export default Lashes;
