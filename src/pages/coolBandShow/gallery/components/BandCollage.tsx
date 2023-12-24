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
  const sorted = galleryData.find((el) => el.eventID === Number(id));

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
      <GalleryCollage items={sorted?.items} />
    </main>
  );
};

export default BandCollage;
