import Hero from "../../../../shared/widgets/hero/Hero";
import { getHeroData } from "../../../../temp/getHeroData";
const HeroContainer = () => {
  return <Hero {...getHeroData.bandHero} />;
};

export default HeroContainer;
