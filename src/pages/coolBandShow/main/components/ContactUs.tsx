import BlockWrapper from "../../../../shared/UI/BlockWrapper/BlockWrapper";
import ContactUsButton from "../../../../shared/UI/buttons/ContactUsButton";
import TwoGis from "../../../../shared/UI/singleElements/map/TwoGis";

const ContactUs = () => {
   return (
      <section className="contact-us">
         <BlockWrapper className="contact-us-content" header="Связаться с нами">
            <h3>Не теряй связь с музыкой!</h3>
            <p>
               Чтобы забронировать выступление Coolshowband отправьте нам сообщение на WhatsApp. Мы свяжемся с вами в
               ближайшее время и ответим на все интересующие вас вопросы
            </p>
            <ContactUsButton whatsapp="{ }" />
         </BlockWrapper>
         <div className="contact-us-map">
            <TwoGis />
         </div>
      </section>
   );
};

export default ContactUs;
