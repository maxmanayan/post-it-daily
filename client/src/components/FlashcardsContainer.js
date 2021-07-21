import React, { useState } from "react";
import FlashcardsSubjects from "./FlashcardsSubjects";

const FlashcardsContainer = () => {
  const [screen, setScreen] = useState("subjects");
  return (
    <div className="flashcards-container">
      <h1>FlashcardsContainer</h1>
      <div className="flashcards-searchbar">
        <h3>[Search Bar Here]</h3>
      </div>
      <div className="flashcards-viewbox">
        <FlashcardsSubjects />
      </div>
    </div>
  );
};

export default FlashcardsContainer;
