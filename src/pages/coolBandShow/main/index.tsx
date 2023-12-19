import CollabContainer from "./containers/CollabContainer";
import ContactUsContainer from "./containers/ContactUsContainer";
import OurClientsContainer from "./containers/OurClientsContainer";
import OurEventsContainer from "./containers/OurEventsContainer";
import OurTeamContainer from "./containers/OurTeamContainer";

function CBMain() {
   return (
      <>
         <OurEventsContainer />
         <OurTeamContainer />
         <CollabContainer />
         <OurClientsContainer />
         <ContactUsContainer />
      </>
   );
}

export default CBMain;
