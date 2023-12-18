import Header from "../components/Header";

const tempLinks = {
   telegram: "https://wa.me/+97433344627?text=some%20how%20its%20workingCoolBand",
   whatsapp: "https://wa.me/+97433344627?text=some%20how%20its%20workingCoolBand",
   instagram: "https://wa.me/+97433344627?text=some%20how%20its%20workingCoolBand",
   youtube: "https://wa.me/+97433344627?text=some%20how%20its%20workingCoolBand",
   tiktok: "https://wa.me/+97433344627?text=some%20how%20its%20workingCoolBand",
};

const lyrics = "";

const mainLogo = {
   src: "/coolbandLogo.png",
   alt: "CoolBand",
};

const secondLogo = {
   src: "/coolStudioLogo.png",
   alt: "CoolStudio",
};

const HeaderContainer = () => {
   return <Header secondLogo={secondLogo} mainLogo={mainLogo} lyrics={lyrics} links={tempLinks} />;
};

export default HeaderContainer;
