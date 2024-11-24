import React from "react";
import "./CardWithImage.css";

const CardWithImage = ({ imageSrc, title, description }) => {
  return (
    <div className="cardWithImage">
      <img src={imageSrc} alt={title} className="cardWithImage-image" />
      <h2 className="cardWithImage-title">{title}</h2>
      <p className="cardWithImage-description">{description}</p>
      <div className="justify-between bottomContent">
        <span>01.01.2024.</span>
        <span className="bold">Show more</span>
      </div>
    </div>
  );
};

export default CardWithImage;
