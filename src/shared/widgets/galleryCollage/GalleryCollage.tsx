import { FC, useState } from "react";
import Modal from "../../UI/modal/Modal";
interface GalleryCollageProps {
   items:
      | {
           alt: string;
           src: string;
           view: string;
        }[]
      | undefined;
}

// type Item = {
//   alt: string;
//   src: string;
//   view: string;
// };

const GalleryCollage: FC<GalleryCollageProps> = ({ items }) => {
   const [indexImage, setIndexImage] = useState<number>(Number);
   const modal = document.getElementById("modal") as HTMLDialogElement;

   const handleOpen = (index: number) => {
      setIndexImage(index);
      modal && modal.showModal();
   };

   return (
      <div className="collage">
         {items &&
            items.map((data, i) => (
               <div key={i} className={`${data.view} collage-item `} onClick={() => handleOpen(i)}>
                  <p>{i}</p>
                  <img src={data.src} alt={data.alt} />
               </div>
            ))}
         <Modal images={items} index={indexImage} />
      </div>
   );
};

export default GalleryCollage;
