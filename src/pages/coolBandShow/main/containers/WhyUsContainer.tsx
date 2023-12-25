import WhyUs from "../components/WhyUs";
import { getWhyUsData } from "../../../../temp/getWhyUsData";

const WhyUsContainer = () => {
   return <WhyUs whyUsData={getWhyUsData} />;
};

export default WhyUsContainer;
