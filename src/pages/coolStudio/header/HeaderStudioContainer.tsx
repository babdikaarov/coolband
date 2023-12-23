// import Header from "../../../shared/widgets/header/Header";
import StudioNavList from "../../../shared/UI/pageNavigation/StudioNavList";
// import Header2 from "../../../shared/widgets/header2/Header2";
import Header3 from "../../../shared/widgets/header3/Header3";
import { lyrics, pageLogos, tempLinks } from "../../../temp/headerData";

const HeaderStudioContainer = () => {
  return <Header3 pageLogos={pageLogos} lyrics={lyrics} links={tempLinks} NavList={StudioNavList} />;
  // return <Header2 pageLogos={pageLogos} lyrics={lyrics} links={tempLinks} NavList={StudioNavList} />;
  // return <Header pageLogos={pageLogos} lyrics={lyrics} links={tempLinks} NavList={StudioNavList} />;
};

export default HeaderStudioContainer;
