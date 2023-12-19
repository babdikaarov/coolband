import { FC } from "react";
interface CollabCardProps extends React.HTMLAttributes<HTMLDivElement> {
   src: string;
   alt: string;
   firstName: string;
   lastName: string;
}

const CollabCard: FC<CollabCardProps> = ({ src, alt, firstName, lastName, ...props }) => {
   return (
      <div className="collab-card-container" {...props}>
         <div
            className="collab-card"
            title={alt}
            style={{
               background: `url(${src}) center / cover no-repeat`,
            }}
         >
            {/* <div className="shadow"></div> */}
         </div>
         <p className="h5">
            {firstName} {lastName}
         </p>
      </div>
   );
};

export default CollabCard;
