import React from "react";
import Card from "../../components/general/Cards/Card.tsx";

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
