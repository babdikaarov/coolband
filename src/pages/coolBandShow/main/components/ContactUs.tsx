import ContactUsButton from "../../../../shared/UI/buttons/ContactUsButton";
import TwoGis from "../../../../shared/UI/map/TwoGis";

const ContactUs = () => {
   return (
      <div className="contact-us">
         <div className="contact-us-content">
            <h3 className="global-component-header">Связаться с нами</h3>
            <h4>🎸 Не теряй связь с музыкой! 🎤</h4>
            <p className="global-component-p">
               Ты готов к невероятной волне музыки, которая перенесет тебя в мир незабвенных хитов? Наши кавер-мастера
               ждут тебя на борту!
            </p>
            <ContactUsButton />
         </div>
         <div className="contact-us-map">
            <TwoGis />
         </div>
      </div>
   );
};

export default ContactUs;
