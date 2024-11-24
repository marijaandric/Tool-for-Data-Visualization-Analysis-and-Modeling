import React from "react";
import Card from "../../components/general/Cards/Card.tsx";
import CardWithImage from "../../components/general/CardWithImage/CardWithImage.tsx";
import welcomeHome from "../../assets/images/welcomeHome.png";

import "./HomePage.css";
import useAppInfo from "../../globalInfo/AppInfo.tsx";

const HomePage = () => {
  const { randomWelcomeMessage } = useAppInfo();

  return (
    <div className="flex-col">
      <div className="flex-row firstPartHome">
        <div className="relative">
          <div className="image-container">
            <img src={welcomeHome} alt="Welcome Home" />
            <div className="welcomeText">
              <h1>Welcome, Name</h1>
              <p>{randomWelcomeMessage}</p>
            </div>
          </div>
        </div>
        <div className="history">
          <h2>Team Activity Log</h2>
        </div>
      </div>

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
      <div className="flex-row">
        <div className="flex-col firstPart">
          <h2>News</h2>
          <div className="flex-row">
            <div className="flex-col containerCards">
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
            </div>
            <div className="flex-col">
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
        <div className="flex-col secondPart">
          <h2>Questions</h2>
          <div className="flex-col">
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
