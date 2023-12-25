import { FC } from "react";
import { iconPhone } from "./iconPhone";
type whatsapp = {
   whatsapp: string;
};
const ReserveUsButton: FC<whatsapp> = (whatsapp) => {
   return (
      <button className="reserve-us-button">
         <a href={`${whatsapp}`}>Заказать Шоу {iconPhone}</a>
      </button>
   );
};

export default ReserveUsButton;
