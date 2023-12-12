// import { Outlet } from "react-router-dom";

import About from "../../components/About";
import Collab from "../../components/Collab";
import ContantUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import OurClients from "../../components/OurClients";
import OurEvents from "../../components/OurEvents";
import OurTeam from "../../components/OurTeam";
import WhyUs from "../../components/WhyUs";

const Main = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <WhyUs />
        <OurEvents />
        <OurTeam />
        <Collab />
        <OurClients />
        <ContantUs />
      </main>
      <Footer />
    </>
  );
};

export default Main;
