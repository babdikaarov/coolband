import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { backIcon } from "../icons/backForwardIcon";
import GalleryModal from "../modal/GalleryModal";
const data: number[] = Array(30)
  .fill(1)
  .map((el, i) => el + i);

const GalleryCollage = () => {
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
        {backIcon}
      </button>
      <p>Date</p>
      <h3>Name of event {id}</h3>
      <p>Description</p>

      <div className="image-collage">
        {cards.slice(0, visibleCards).map((el, index) => {
          const validIndices = [0, 4, 5, 6, 8, 12, 13, 14];
          const spanClass = validIndices.includes(index) ? "spanClass" : "";
          return (
            <div key={index} className={`image-collage-card ${spanClass}`} onClick={() => handleClickCard(index)}>
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

      <GalleryModal
        setIndex={setIndex}
        imageList={cards}
        index={index}
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
      />
    </main>
  );
};

export default GalleryCollage;
