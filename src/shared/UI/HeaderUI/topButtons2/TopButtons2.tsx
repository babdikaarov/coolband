import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const TopButtons = () => {
   const { pathname } = useLocation();
   const [activeButton, setActiveButton] = useState<boolean>();
   useEffect(() => {
      const studioPathRegex = /^\/studio($|\/.*|#.*)/;

      if (studioPathRegex.test(pathname)) {
         setActiveButton(true);
      } else {
         setActiveButton(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [pathname]);
   return (
      <div className="nav-buttons">
         <Link to={"/"} className={`nav-buttons-main-${!activeButton ? "active" : "notActive"}`}>
            <p>Cool Band</p>
         </Link>
         <Link to={"/studio"} className={`nav-buttons-secondary-${activeButton ? "active" : "notActive"}`}>
            <p>Cool Studio</p>
         </Link>
      </div>
   );
};

export default TopButtons;
