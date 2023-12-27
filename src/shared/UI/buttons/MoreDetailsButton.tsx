import { Link } from "react-router-dom";
import { arrowIconMoreDetails } from "./arrowIconMoreDetails";
const MoreDetailsButton = () => {
   return (
      <Link to="/gallery" className="more-events">
         Подробнее
         {arrowIconMoreDetails}
      </Link>
   );
};

export default MoreDetailsButton;
