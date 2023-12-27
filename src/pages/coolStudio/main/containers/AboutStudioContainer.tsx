import About from "../../../coolBandShow/main/components/About";
import aboutContent from "../../../../temp/getAboutData";

const AboutStudioContainer = () => {
   return <About aboutData={aboutContent.aboutStudio} header={aboutContent.aboutStudio.alt} className="studio" />;
};

export default AboutStudioContainer;
