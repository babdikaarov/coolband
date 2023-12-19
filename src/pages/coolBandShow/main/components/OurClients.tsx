import { FC } from "react";
import ClientCard from "../../../../shared/UI/clientCard/ClientCard";
import ScrollComponentWrapper from "../../../../shared/UI/sharedComponent.tsx/ScrollComponentWrapper";
interface OurClientsProps {
   clientCards: {
      src: string;
      alt: string;
   }[];
}
const OurClients: FC<OurClientsProps> = ({ clientCards }) => {
   return (
      <ScrollComponentWrapper header={"Наши клиенты"}>
         <div className="our-clients-qty">
            <div>500+</div>
            <p className="h3">Более 500 корпоративов и мероприятий</p>
         </div>
         <div className="our-client-cards">
            {clientCards.map((card, i: number) => (
               <ClientCard key={i} card={card} />
            ))}
            {/* verify styling with designers */}
            <div style={{ minWidth: "76px" }}></div>
         </div>
      </ScrollComponentWrapper>

      // <div className="our-clients">
      //    <h3 className="global-component-header">Наши клиенты</h3>
      //    <div className="our-clients-qty">
      //       <div>500+</div>
      //       <p className="h3">Более 500 корпоративов и мероприятий</p>
      //    </div>
      //    <div className="our-client-cards">
      //       {clientCards.map((card, i: number) => (
      //          <ClientCard key={i} card={card} />
      //       ))}
      //       {/* verify styling with designers */}
      //       <div style={{ minWidth: "76px" }}></div>
      //    </div>
      // </div>
   );
};

export default OurClients;
