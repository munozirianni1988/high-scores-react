import React from "react";
import "./App.css";
import allCountryScores from "./scores";
import HighScoresTable from "./HighScoresTable";

function App() {
  return (
    <>
      <HighScoresTable allCountryScores={allCountryScores} />
    </>
  );
}

export default App;
