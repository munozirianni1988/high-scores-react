import React from "react";
import PlayerScore from "./PlayerScore";

function BlockOfRows(props) {
  return (
    <div>
      {props.allCountryScores.map((score) => {
        <PlayerScore score={score} />;
      })}
    </div>
  );
}

export default BlockOfRows;
