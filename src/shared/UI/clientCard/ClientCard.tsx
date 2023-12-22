import { FC } from "react";

interface ClientCardProps {
  card: {
    src: string;
    alt: string;
  };
}

const ClientCard: FC<ClientCardProps> = ({ card }) => {
  function checkFileExtension(src: string): string {
    const regex = /\.png$/;
    return regex.test(src) ? "png" : "NoPng";
  }
  return <img className={`client-card ${checkFileExtension(card.src)}`} src={card.src} alt={card.alt}></img>;
};

export default ClientCard;
