import { FC } from "react";
import ClientCard from "../../../../shared/UI/clientCard/ClientCard";
import ScrollComponentWrapper from "../../../../shared/UI/BlockWrapper/BlockWrapper";
interface OurClientsProps {
   clientCards: {
      src: string;
      alt: string;
   }[];
}
const OurClients: FC<OurClientsProps> = ({ clientCards }) => {
   return (
      <ScrollComponentWrapper header={"Наши клиенты"} id="partners">
         <article className="our-clients-qty">
            <h2>500+</h2>
            <h3 className="h3">Более 500 корпоративов и мероприятий</h3>
         </article>
         <div className="our-client-cards">
            {clientCards.map((card, i: number) => (
               <ClientCard key={i} card={card} />
            ))}
         </div>
      </ScrollComponentWrapper>
   );
};

export default OurClients;
