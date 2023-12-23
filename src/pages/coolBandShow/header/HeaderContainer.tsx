import BandNavList from "../../../shared/UI/pageNavigation/BandNavList";
import { lyrics, pageLogos, tempLinks } from "../../../temp/headerData";
// import Header from "../../../shared/widgets/header/Header";
// import Header2 from "../../../shared/widgets/header2/Header2";
import Header3 from "../../../shared/widgets/header3/Header3";

const HeaderContainer = () => {
  return <Header3 pageLogos={pageLogos} lyrics={lyrics} links={tempLinks} NavList={BandNavList} />;
  // return <Header2 pageLogos={pageLogos} lyrics={lyrics} links={tempLinks} NavList={BandNavList} />;
  // return <Header pageLogos={pageLogos} lyrics={lyrics} links={tempLinks} NavList={BandNavList} />;
};

export default HeaderContainer;
