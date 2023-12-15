import { Outlet } from "react-router-dom";
import BandHeader from "../../components/BandHeader";
const CoolBand = () => {
  return (
    <>
      <BandHeader />
      <Outlet />
    </>
  );
};

export default CoolBand;
