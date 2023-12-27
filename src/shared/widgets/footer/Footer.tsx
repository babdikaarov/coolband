import { FC } from "react";
import FooterBox from "../../UI/FooterUI/FooterBox/FooterBox";
import Logo from "../../UI/singleElements/Logo/Logo";

type content = {
   education: FooterBox;
   address: FooterBox;
   contact: FooterBox;
};
type logos = {
   bandLogo: Logo;
   studioLogo: Logo;
};

interface FooterProps {
   content: content;
   pageLogos: logos;
}

const Footer: FC<FooterProps> = ({ pageLogos, content }) => {
   return (
      <footer>
         <div className="footer-logos">
            <Logo logo={pageLogos.bandLogo} />
            <Logo logo={pageLogos.studioLogo} />
         </div>
         <ul className="footer-content">
            <FooterBox className="footer-box-edu" text={content.education} />
            <FooterBox className="footer-box-address" text={content.address} />
            <FooterBox className="footer-box-contacts" text={content.contact} />
         </ul>
      </footer>
   );
};

export default Footer;
