// import { Outlet } from "react-router-dom";

import About from "../../components/About";
import Collab from "../../components/Collab";
import Hero from "../../components/Hero";
import OurEvents from "../../components/OurEvents";
import OurTeam from "../../components/OurTeam";
import WhyUs from "../../components/WhyUs";

const Main = () => {
  return (
    <>
      <Hero />
      <About />
      <WhyUs />
      <OurEvents />
      <OurTeam />
      <Collab />
    </>
  );
};

export default Main;
