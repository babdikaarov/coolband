import Header from "../components/Header";
import { logos } from "../../../../temp/logos";
const tempLinks = {
   telegram: "https://t.me/coolbandkg/",
   whatsapp: "https://wa.me/+996755608908?text=zakazat%20CoolBand",
   instagram: "https://www.instagram.com/coolshowbandkg/",
   youtube: "https://www.youtube.com/@coolband4563",
   tiktok: "#",
};

const lyrics = "";

const HeaderContainer = () => {
   return <Header secondLogo={logos.secondLogo} mainLogo={logos.mainLogo} lyrics={lyrics} links={tempLinks} />;
};

export default HeaderContainer;
