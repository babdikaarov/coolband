import getGalleryData from "../../../../temp/getGalleyData";
import BandCollage from "../components/BandCollage";

const BandCollageContainer = () => {
  return <BandCollage galleryData={getGalleryData} />;
};

export default BandCollageContainer;
