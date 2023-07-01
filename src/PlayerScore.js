import React from "react";

function PlayerScore(props) {
  return (
    <div>
      <tr>
        <td>{props.score.n}</td>
        <td>{props.score.s}</td>
      </tr>
    </div>
  );
}

export default PlayerScore;
