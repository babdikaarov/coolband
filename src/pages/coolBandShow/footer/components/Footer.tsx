import React, { FC } from "react";
import LogoCB from "../../../../shared/UI/logoCB/LogoCB";
import LogoCS from "../../../../shared/UI/logoCS/LogoCS";
import FooterBox from "../../../../shared/UI/footerBox/FooterBox";

type content = {
   p: string;
   li: string[];
};

interface FooterProps {
   mainLogo: {
      src: string;
      alt: string;
   };
   secondLogo: {
      src: string;
      alt: string;
   };
   content: {
      service: content;
      education: content;
      address: content;
      contact: content;
   };
}

const Footer: FC<FooterProps> = ({ mainLogo, secondLogo, content }) => {
   return (
      <footer>
         <div className="footer-container">
            <div className="footer-logos">
               <LogoCB className="footer-passive-logo" src={mainLogo.src} alt={mainLogo.alt} />
               <LogoCS className="footer-passive-logo" src={secondLogo.src} alt={secondLogo.alt} />
            </div>
            <ul className="footer-content">
               <FooterBox className="footer-box-services" text={content.service} />
               <FooterBox className="footer-box-edu" text={content.education} />
               <FooterBox className="footer-box-address" text={content.address} />
               <FooterBox className="footer-box-contacts" text={content.contact} />
            </ul>
         </div>
      </footer>
   );
};

export default Footer;
