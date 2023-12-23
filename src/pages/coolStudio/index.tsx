import { Outlet } from "react-router";
import HeaderStudioContainer from "./header/HeaderStudioContainer";
import FooterStudioContainer from "./footer/FooterStudioContainer";

function CoolStudio() {
  return (
    <>
      <HeaderStudioContainer />
      <Outlet />
      <FooterStudioContainer />
    </>
  );
}

export default CoolStudio;
