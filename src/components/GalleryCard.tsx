import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GalleryOverlay from "./GalleryOverlay";
const data: number[] = Array(30)
  .fill(1)
  .map((el, i) => el + i);

export default function GalleryCard() {
  const [cards, setCards] = useState<number[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [togle, setTogle] = useState<boolean>(true);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [visibleCards, setVisibleCards] = useState<number>(8);
  const { id } = useParams();
  const navigate = useNavigate();

  const showMore = () => {
    setVisibleCards((prev) => prev + 8);
    setTogle(!togle);
  };
  const showLess = () => {
    setVisibleCards((prev) => prev - 8);
    setTogle(!togle);
  };

  const handleClickCard = (data: number) => {
    setIndex(data);
    setShowOverlay(!showOverlay);
  };

  useEffect(() => {
    setCards(data);
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="gallery-card">
      <button onClick={() => navigate(-1)} className="gallery-card-button-back">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="arrow_left_circle_fill" clipPath="url(#clip0_561_2732)">
            <g id="Group">
              <path
                id="Vector"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22ZM11.995 16.242C12.1825 16.0545 12.2878 15.8002 12.2878 15.535C12.2878 15.2698 12.1825 15.0155 11.995 14.828L10.168 13H16.244C16.5092 13 16.7636 12.8946 16.9511 12.7071C17.1386 12.5196 17.244 12.2652 17.244 12C17.244 11.7348 17.1386 11.4804 16.9511 11.2929C16.7636 11.1054 16.5092 11 16.244 11H10.168L11.997 9.171C12.1845 8.98336 12.2898 8.72892 12.2897 8.46365C12.2896 8.19838 12.1841 7.94401 11.9965 7.7565C11.8089 7.56899 11.5544 7.4637 11.2891 7.4638C11.0239 7.46389 10.7695 7.56936 10.582 7.757L7.047 11.293C6.85953 11.4805 6.75421 11.7348 6.75421 12C6.75421 12.2652 6.85953 12.5195 7.047 12.707L10.582 16.242C10.6749 16.335 10.7852 16.4087 10.9066 16.4591C11.028 16.5094 11.1581 16.5353 11.2895 16.5353C11.4209 16.5353 11.551 16.5094 11.6724 16.4591C11.7938 16.4087 11.9041 16.335 11.997 16.242H11.995Z"
                fill="#FCFCFC"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_561_2732">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <p>Date</p>
      <h3>Name of event {id}</h3>
      <p>Description</p>

      <div className="image-collage">
        {cards.slice(0, visibleCards).map((el, index) => {
          const validIndices = [0, 4, 5, 6, 8, 12, 13, 14];
          const spanClass = validIndices.includes(index) ? "spanClass" : "";
          return (
            <div
              key={index}
              className={`image-collage-card ${spanClass}`}
              onClick={() => handleClickCard(index)}
            >
              <img
                // src="../../public/assets/images/about-image.jpeg"
                alt={`${el}`}
              />
            </div>
          );
        })}
      </div>
      {togle ? (
        <button onClick={() => showMore()} className="gallery-card-button-more">
          Показать
        </button>
      ) : (
        <button onClick={() => showLess()} className="gallery-card-button-less">
          Скрыть
        </button>
      )}

      <GalleryOverlay
        setIndex={setIndex}
        cards={cards}
        index={index}
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
      />
    </main>
  );
}
