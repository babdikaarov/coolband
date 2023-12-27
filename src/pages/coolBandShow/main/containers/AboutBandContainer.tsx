import About from "../components/About";
import aboutContent from "../../../../temp/getAboutData";

const AboutBandContainer = () => {
   return <About aboutData={aboutContent.aboutBand} header={aboutContent.aboutBand.alt} className="band" />;
};

export default AboutBandContainer;
