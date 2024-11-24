import React from "react";
import Card from "../../components/general/Cards/Card.tsx";
import CardWithImage from "../../components/general/CardWithImage/CardWithImage.tsx";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="flex-col">
      <div className="flex-row">
        <Card
          title="Last Dataset"
          description="Dataset 1"
          color="var(--primary-color)"
        />
        <Card
          title="Latest Model Details"
          description="Model 1"
          color="var(--secondary-color)"
        />
        <Card
          title="Total datasets"
          description="2"
          color="var(--primary-color-darker)"
        />
        <Card
          title="Total models"
          description="2"
          color="var(--secondary-color-darker)"
        />
      </div>
      <div className="flex-row firstPart">
        <div className="gridContainer">
          <CardWithImage
            imageSrc="https://www.securityindustry.org/wp-content/uploads/2021/10/what-ai-can-do-for-you-887x488.jpg"
            title="Beautiful Landscape"
            description="Explore the beauty of nature with this breathtaking view."
          />
          <CardWithImage
            imageSrc="https://www.securityindustry.org/wp-content/uploads/2021/10/what-ai-can-do-for-you-887x488.jpg"
            title="Urban Cityscape"
            description="Experience the energy and vibrancy of urban life. Experience the energy and vibrancy of urban life. Experience the energy and vibrancy of urban life. Experience the energy and vibrancy of urban life."
          />
          <CardWithImage
            imageSrc="https://www.securityindustry.org/wp-content/uploads/2021/10/what-ai-can-do-for-you-887x488.jpg"
            title="Beautiful Landscape"
            description="Explore the beauty of nature with this breathtaking view."
          />
          <CardWithImage
            imageSrc="https://www.securityindustry.org/wp-content/uploads/2021/10/what-ai-can-do-for-you-887x488.jpg"
            title="Urban Cityscape"
            description="Experience the energy and vibrancy of urban life. Experience the energy and vibrancy of urban life. Experience the energy and vibrancy of urban life. Experience the energy and vibrancy of urban life."
          />
          <CardWithImage
            imageSrc="https://www.securityindustry.org/wp-content/uploads/2021/10/what-ai-can-do-for-you-887x488.jpg"
            title="Beautiful Landscape"
            description="Explore the beauty of nature with this breathtaking view."
          />
          <CardWithImage
            imageSrc="https://www.securityindustry.org/wp-content/uploads/2021/10/what-ai-can-do-for-you-887x488.jpg"
            title="Urban Cityscape"
            description="Experience the energy and vibrancy of urban life. Experience the energy and vibrancy of urban life. Experience the energy and vibrancy of urban life. Experience the energy and vibrancy of urban life."
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
