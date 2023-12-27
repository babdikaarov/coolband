import { FC } from "react";
import { iconPhone } from "../icons/iconPhone";
type whatsapp = {
   whatsapp: string;
};
const ContactUsButton: FC<whatsapp> = ({ whatsapp }) => {
   return (
      <a href={whatsapp}>
         <button className="contact-us-button">Связаться с нами {iconPhone}</button>
      </a>
   );
};

export default ContactUsButton;
