import { FC } from "react";
import GalleryCollage from "../../../../shared/widgets/galleryCollage/GalleryCollage";
import { backIcon } from "../../../../shared/UI/icons/backForwardIcon";
import { useNavigate, useParams } from "react-router-dom";
interface BandCollageProps {
   galleryData: {
      eventID: number;
      name: string;
      date: string;
      description: string;
      poster: string;
      items: {
         alt: string;
         src: string;
         view: string;
      }[];
   }[];
}

const BandCollage: FC<BandCollageProps> = ({ galleryData }) => {
   const navigate = useNavigate();
   const { id } = useParams();
   const sorted = galleryData.find((el) => el.eventID === Number(id))!;

   function sortArrayWithPortraitEveryThird(arr: {
      eventID: number;
      name: string;
      date: string;
      description: string;
      poster: string;
      items: { alt: string; src: string; view: string }[];
   }) {
      const portraitObjects = arr?.items.filter((obj: { view: string }) => obj.view === "portrait");
      const landscapeObjects = arr?.items.filter((obj: { view: string }) => obj.view === "landscape");

      const sortedArray = [];

      // Alternate between portrait and landscape
      while (portraitObjects.length || landscapeObjects.length) {
         if (portraitObjects.length) {
            sortedArray.push(portraitObjects.shift());
         }

         if (landscapeObjects.length) {
            sortedArray.push(landscapeObjects.shift());
            landscapeObjects.length && sortedArray.push(landscapeObjects.shift());
         }
      }
      return sortedArray;
   }

   const sortedArray = sortArrayWithPortraitEveryThird(sorted);
   //   console.log(sortedArray);

   return (
      <main>
         <div className="band-collage">
            <button onClick={() => navigate(-1)} className="band-collage-button">
               {backIcon}
            </button>
            <div>
               <p>{sorted?.date}</p>
               <h3> {sorted?.name} </h3>
               <p>From id {sorted?.eventID}</p>
            </div>
            <div></div>
         </div>
         <GalleryCollage items={sortedArray} />
      </main>
   );
};

export default BandCollage;
