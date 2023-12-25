import { NavLink, useLocation } from "react-router-dom";

const TopButtons = () => {
   const { pathname } = useLocation();

   return (
      <div className="top-buttons">
         <NavLink to={"/"}>
            <button className={`top-buttons-main-${pathname === "/" ? "active" : "notActive"}`}>Cool Band</button>
         </NavLink>
         <NavLink to={"/studio"}>
            <button className={`top-buttons-secondary-${pathname === "/studio" ? "active" : "notActive"}`}>
               Cool Studio
            </button>
         </NavLink>
      </div>
   );
};

export default TopButtons;
