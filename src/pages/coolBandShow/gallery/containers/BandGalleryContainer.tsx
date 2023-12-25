import getGalleryData from "../../../../temp/getGalleyData";
import BandGallery from "../components/BandGallery";

const BandGalleryContainer = () => {
   return <BandGallery galleryData={getGalleryData} />;
};

export default BandGalleryContainer;
