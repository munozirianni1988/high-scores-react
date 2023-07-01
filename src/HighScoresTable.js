import React from "react";
import BlockOfRows from "./BlockOfRows";
import allCountryScores from "./scores";

function HighScoresTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <h1>High Scores: {props.allCountryScores.name}</h1>
        </tr>
      </thead>
      <BlockOfRows allCountryScores={allCountryScores.scores} />
    </table>
  );
}

export default HighScoresTable;
