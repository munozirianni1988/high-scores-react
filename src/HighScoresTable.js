import React from "react";
import PlayerScore from "./PlayerScore";

function HighScoresTable(props) {
  return (
    <table>
      <tbody>
        {props.allScores.map((item) => {
          return (
            <>
              <tr>
                <td>High Scores: {item.name}</td>
              </tr>
              {item.scores.map((element) => {
                return (
                  <tr>
                    <td>
                      <PlayerScore score={element} />
                    </td>
                  </tr>
                );
              })}
            </>
          );
        })}
      </tbody>
    </table>
  );
}

export default HighScoresTable;
