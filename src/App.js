import "./App.css";
import HighScoresTable from "./HighScoresTable";
import allCountryScores from "./scores";

function App() {
  return (
    <div className="App">
      <HighScoresTable allScores={allCountryScores} />
    </div>
  );
}

export default App;
