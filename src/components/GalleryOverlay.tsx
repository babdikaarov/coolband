import React from "react";

interface GalleryOverlayProps {
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  showOverlay: boolean;
  index: number;
  cards: number[];
}

const GalleryOverlay: React.FC<GalleryOverlayProps> = ({
  index,
  cards,
  showOverlay,
  setIndex,
  setShowOverlay,
}) => {
  if (!showOverlay) return null;

  return (
    <>
      <div
        className="overlay"
        onClick={() => setShowOverlay(!showOverlay)}
      ></div>
      <div
        className={
          !showOverlay ? "gallery-overlay modal-active" : "gallery-overlay"
        }
      >
        <button
          className="gallery-overlay-left"
          onClick={() => setIndex((prev) => prev - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <g clipPath="url(#clip0_561_1767)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44ZM23.99 32.484C24.3649 32.1089 24.5756 31.6003 24.5756 31.07C24.5756 30.5397 24.3649 30.0311 23.99 29.656L20.336 26H32.488C33.0184 26 33.5271 25.7893 33.9022 25.4142C34.2773 25.0391 34.488 24.5304 34.488 24C34.488 23.4696 34.2773 22.9609 33.9022 22.5858C33.5271 22.2107 33.0184 22 32.488 22H20.336L23.994 18.342C24.369 17.9667 24.5796 17.4578 24.5794 16.9273C24.5792 16.3968 24.3683 15.888 23.993 15.513C23.6177 15.138 23.1088 14.9274 22.5783 14.9276C22.0478 14.9278 21.539 15.1387 21.164 15.514L14.094 22.586C13.7191 22.9611 13.5084 23.4697 13.5084 24C13.5084 24.5303 13.7191 25.0389 14.094 25.414L21.164 32.484C21.3497 32.67 21.5703 32.8175 21.8131 32.9181C22.0559 33.0188 22.3162 33.0706 22.579 33.0706C22.8418 33.0706 23.1021 33.0188 23.3449 32.9181C23.5877 32.8175 23.8083 32.67 23.994 32.484H23.99Z"
                fill="#151515"
              />
            </g>
            <defs>
              <clipPath id="clip0_561_1767">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <div className="gallery-overlay-img">
          <img src="#" alt={`${cards[index]}`} />
        </div>
        <button
          className="gallery-overlay-right"
          onClick={() => setIndex((prev) => prev + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <g clipPath="url(#clip0_561_1771)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44ZM24.01 15.516C23.6351 15.8911 23.4244 16.3997 23.4244 16.93C23.4244 17.4603 23.6351 17.9689 24.01 18.344L27.666 22H15.514C14.9836 22 14.4749 22.2107 14.0998 22.5858C13.7247 22.9609 13.514 23.4696 13.514 24C13.514 24.5304 13.7247 25.0391 14.0998 25.4142C14.4749 25.7893 14.9836 26 15.514 26H27.666L24.01 29.658C23.6457 30.0352 23.4441 30.5404 23.4487 31.0648C23.4532 31.5892 23.6635 32.0908 24.0344 32.4616C24.4052 32.8325 24.9068 33.0428 25.4312 33.0473C25.9556 33.0519 26.4608 32.8503 26.838 32.486L33.908 25.414C34.2829 25.0389 34.4936 24.5303 34.4936 24C34.4936 23.4697 34.2829 22.9611 33.908 22.586L26.84 15.516C26.4649 15.1411 25.9563 14.9304 25.426 14.9304C24.8957 14.9304 24.3851 15.1411 24.01 15.516Z"
                fill="#151515"
              />
            </g>
            <defs>
              <clipPath id="clip0_561_1771">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </>
  );
};

export default GalleryOverlay;
