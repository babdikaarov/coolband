import { useState, useEffect } from "react";
import Hero from "../../../../shared/widgets/hero/Hero";
import { getHeroData } from "../../../../temp/getHeroData";

type HeroData = {
   contacts: string;
   video: {
      src: string;
      type: string;
   }[];
   image: {
      src: string;
      alt: string;
   }[];
   text: {
      header: string;
      paragraph: string;
   };
};

const HeroContainer = () => {
   const [dataHero, setDataHero] = useState<HeroData>(getHeroData.bandHero);
   useEffect(() => {
      if (getHeroData) {
         setDataHero(getHeroData.bandHero);
      }
   }, [getHeroData]);
   return <Hero {...dataHero} mainPage={true} />;
};

export default HeroContainer;
