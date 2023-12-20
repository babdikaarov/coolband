import { FC } from "react";
import FooterBox from "../../../../shared/UI/footerBox/FooterBox";
import Logo from "../../../../shared/UI/logo/Logo";

type content = {
   p: string;
   li: string[];
};
type LogoProps = {
   src: string;
   alt: string;
   color: string;
};

interface FooterProps {
   mainLogo: LogoProps;
   secondLogo: LogoProps;
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
               <Logo
                  className="footer-passive-logo"
                  src={mainLogo.src}
                  alt={mainLogo.alt}
                  mainLogo={false}
                  logoColor={""}
               />
               <Logo
                  className="footer-passive-logo"
                  src={secondLogo.src}
                  alt={secondLogo.alt}
                  mainLogo={false}
                  logoColor={""}
               />
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
