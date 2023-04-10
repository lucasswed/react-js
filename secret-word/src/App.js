
// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from "react";

// data
import { wordsList } from "./data/words";

// Componentes
import StartScreen from './componentes/StartScreen';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen />}
      {gameStage === "game"}
      {gameStage === "end"}
    </div>
  );
}

export default App;
