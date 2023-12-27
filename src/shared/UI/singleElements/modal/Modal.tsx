// import React from "react";
import { FC } from "react";
import { arrowLeft } from "./arrowLeft";
import { arrowRight } from "./arrowRight";

// interface GalleryModalProps {
//   setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
//   setIndex: React.Dispatch<React.SetStateAction<number>>;
//   showOverlay: boolean;
//   index: number;
//   imageList: number[];
// }
interface ModalProps {
   images: (
      | {
           alt: string;
           src: string;
           view: string;
        }
      | undefined
   )[];
   index: number;
}

const Modal: FC<ModalProps> = ({ images, index }) => {
   // const modal = document.getElementById("modal") as HTMLDialogElement;
   const image = images && images[index];

   const handleClose = () => {
      console.log("closed");
   };

   const handleLeftButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      console.log("left");
   };

   const handleRightButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      console.log("right");
   };

   const handleImageClick = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();

      console.log("image");
   };

   return (
      <dialog className="modal" id="modal">
         {/* <button id="close-modal" onClick={() => console.log("close")}></button> */}
         <div className="modal-container" onClick={handleClose}>
            <button
               className="modal-button-left"
               // onClick={() => (images && images?.length < index ? console.log(images?.length + " " + index) : " more")}
               onClick={handleLeftButtonClick}
            >
               {arrowLeft}
            </button>
            <div className={`modal-image ${image?.view}-modal`} onClick={handleImageClick}>
               <img src={image?.src} alt={image?.alt} />
            </div>
            <button className="modal-button-right" onClick={handleRightButtonClick}>
               {arrowRight}
            </button>
         </div>
      </dialog>
   );
};

export default Modal;
