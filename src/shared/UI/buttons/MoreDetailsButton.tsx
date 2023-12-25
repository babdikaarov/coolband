import { arrowIconMoreDetails } from "./arrowIconMoreDetails";
const MoreDetailsButton = () => {
   return (
      <div className="moreDetailButton">
         <a href="#">
            Подробнее
            {arrowIconMoreDetails}
         </a>
      </div>
   );
};

export default MoreDetailsButton;
