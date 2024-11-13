import React from "react";
import Cards from "../../components/general/Cards/Cards.tsx";
import Sidebar from "../../components/general/Sidebar/Sidebar.tsx";

const HomePage = () => {
  return (
    <div className="flex-row">
      <Sidebar />
      <Cards
        title="Last Dataset"
        description="Dataset 1"
        color="var(--primary-color)"
      />
      <Cards
        title="Latest Model Details"
        description="Model 1"
        color="var(--secondary-color)"
      />
      <Cards
        title="Total datasets"
        description="2"
        color="var(--primary-color-darker)"
      />
      <Cards
        title="Total models"
        description="2"
        color="var(--secondary-color-darker)"
      />
    </div>
  );
};

export default HomePage;
