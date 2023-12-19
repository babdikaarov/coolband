import OurEvents from "../components/OurEvents";
import eventCards from "../../../../temp/eventCards";

const OurEventsContainer = () => {
   const eventPhotos = [...eventCards, ...eventCards];

   return <OurEvents ourEventsCards={eventPhotos} />;
};

export default OurEventsContainer;
