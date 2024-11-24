import React from "react";
import "./CardWithImage.css";

const CardWithImage = ({ imageSrc, title, description }) => {
  return (
    <div className="cardWithImage">
      <img src={imageSrc} alt={title} className="cardWithImage-image" />
      <h2 className="cardWithImage-title">{title}</h2>
      <p className="cardWithImage-description">{description}</p>
    </div>
  );
};

export default CardWithImage;
