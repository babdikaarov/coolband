import { Outlet } from "react-router-dom";
import HeaderContainer from "./header/HeaderContainer";
import FooterContainer from "./footer/FooterContainer";

function CoolBandShow() {
   return (
      <>
         <HeaderContainer />
         <Outlet />
         <FooterContainer />
      </>
   );
}

export default CoolBandShow;
