import { useState, useEffect } from "react";

const useAppInfo = () => {
  const appTitle = "Dataly";
  const appDescription = "Tool for data analysis, visualization, and modeling.";

  const welcomeMessages = [
    "Welcome to " + appTitle + " - your data analysis companion!",
    "Discover your data like never before with " + appTitle + "!",
    "Analyze, visualize, and model your data effortlessly.",
    "Turn your data into actionable insights with " + appTitle + ".",
    "Your journey to better insights starts here.",
    "" + appTitle + ": Where data meets intelligence.",
    "Unlock the potential of your data with ease.",
    "Simplify data analysis and modeling with " + appTitle + ".",
  ];

  const [randomWelcomeMessage, setRandomWelcomeMessage] = useState("");

  useEffect(() => {
    const message =
      welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    setRandomWelcomeMessage(message);
  }, []);

  return {
    appTitle,
    appDescription,
    randomWelcomeMessage,
    allWelcomeMessages: welcomeMessages,
  };
};

export default useAppInfo;
