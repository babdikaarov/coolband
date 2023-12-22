import AboutBandContainer from "./containers/AboutBandContainer";
import CollabContainer from "./containers/CollabContainer";
import ContactUsContainer from "./containers/ContactUsContainer";
import HeroContainer from "./containers/HeroContainer";
import OurClientsContainer from "./containers/OurClientsContainer";
import OurEventsContainer from "./containers/OurEventsContainer";
import OurTeamContainer from "./containers/OurTeamContainer";
import WhyUsContainer from "./containers/WhyUsContainer";

function CBMain() {
  return (
    <>
      <HeroContainer />
      <AboutBandContainer />
      <WhyUsContainer />
      <OurEventsContainer />
      <OurTeamContainer />
      <CollabContainer />
      <OurClientsContainer />
      <ContactUsContainer />
    </>
  );
}

export default CBMain;
