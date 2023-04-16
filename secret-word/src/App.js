
// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from "react";

// data
import { wordsList } from "./data/words";

// Componentes
import StartScreen from './componentes/StartScreen';
import Game from './componentes/Game';
import GameOver from './componentes/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);


  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomWord = words[randomCategory][Math.floor(Math.random() * words[randomCategory].length)];

    return {randomCategory, randomWord};
  }

  // Starts the game
  const startGame = () => {
    // Pick a random word and category
    const { randomCategory, randomWord } = pickWordAndCategory();
    let wordLetters = randomWord.split("").tolowerCase();

    // fill states
    setLetters(wordLetters);
    setPickedCategory(randomCategory);
    setPickedWord(randomWord);

    setGameStage(stages[1].name);
  };


  // Process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };


  // Restarts the game
  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
