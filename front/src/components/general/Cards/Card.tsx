import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { CardsProps } from "./models/CardProps";

const Card = ({ title, description, color }: CardsProps) => {
  return (
    <div className="card-container">
      <div className="card">
        <Link to="/" className="card-link">
          <div
            className="card-active-bg"
            style={{ backgroundColor: color }}
          ></div>

          <div className="card-title">{title}</div>

          <div className="card-bottom">{description}</div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
