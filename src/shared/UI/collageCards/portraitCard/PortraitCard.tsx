import React from "react";

const PortraitCard = () => {
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
};

export default PortraitCard;
