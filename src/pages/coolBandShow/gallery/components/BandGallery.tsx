import { FC } from "react";
// import Gallery from "../../../../shared/widgets/gallery/Gallery";
import Gallery from "../../../../shared/widgets/gallery/Gallery";
interface BandGalleryProps {
  galleryData: {
    eventID: number;
    name: string;
    date: string;
    description: string;
    poster: string;
    items: { alt: string; src: string; view: string }[];
  }[];
}
const BandGallery: FC<BandGalleryProps> = (galleryData) => {
  return <Gallery {...galleryData} />;
};

export default BandGallery;
