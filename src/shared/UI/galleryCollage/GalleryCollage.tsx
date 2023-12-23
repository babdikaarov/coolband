import { FC } from "react";
interface GalleryCollageProps {
  items:
    | {
        alt: string;
        src: string;
        view: string;
      }[]
    | undefined;
}

const GalleryCollage: FC<GalleryCollageProps> = ({ items }) => {
  return (
    <div className="collage">
      {items &&
        items.map((data, i) => (
          <div key={i} className={`${data.view} collage-item`}>
            <p>{i}</p>
            <img src={data.src} alt={data.alt} />
          </div>
        ))}
    </div>
  );
};

export default GalleryCollage;
