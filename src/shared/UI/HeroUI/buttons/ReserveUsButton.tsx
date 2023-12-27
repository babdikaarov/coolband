import { FC } from "react";
import { iconPhone } from "../../icons/iconPhone";
type whatsapp = {
   whatsapp: string;
};
const ReserveUsButton: FC<whatsapp> = (whatsapp) => {
   return (
      <a href={`${whatsapp}`} className="reserve-us-button">
         <button>Заказать Шоу {iconPhone}</button>
      </a>
   );
};

export default ReserveUsButton;
