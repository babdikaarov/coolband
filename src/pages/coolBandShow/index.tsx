import { Outlet } from "react-router-dom";
import HeaderContainer from "./header/containers/HeaderContainer";
import FooterContainer from "./footer/containers/FooterContainer";

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
