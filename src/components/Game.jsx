import { useEffect, useState } from "react";
import ArrayUtils from "../utils/ArrayUtils";
import GameBoard from "./GameBoard";

export default function Game() {
  const [memoryCardData, setMemoryCardData] = useState([]);
  const [memoryCardsToDisplay, setMemoryCardsToDisplay] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    let active = true;

    async function getData() {
      const response = await fetch(
        "https://botw-compendium.herokuapp.com/api/v3/compendium/all",
      );
      if (response.ok && active) {
        const responseJson = await response.json();
        setMemoryCardData(responseJson.data);
        startNewGame(responseJson.data);
      }
    }

    getData();

    return () => {
      active = false;
    };
  }, []);

  function handleMemoryCardClick(index) {
    if (memoryCardsToDisplay[index].isClicked) {
      endGame();
    } else {
      setCurrentScore(currentScore + 1);

      let newArray = [...memoryCardsToDisplay];

      const clickedMemoryCard = newArray.splice(index, 1)[0];
      clickedMemoryCard.isClicked = true;

      newArray = ArrayUtils.shuffleArray(newArray);
      newArray.splice(index, 0, clickedMemoryCard);
      setMemoryCardsToDisplay(newArray);
    }
  }

  function handleNewGameClick() {
    startNewGame(memoryCardData);
  }

  function startNewGame(memoryCardData) {
    setCurrentScore(0);
    setMemoryCardsToDisplay(
      ArrayUtils.getRandomElementsFromArray(memoryCardData, 12).map(
        (element) => new MemoryCard(element.name, element.image),
      ),
    );
  }

  function endGame() {
    setIsGameOver(true);
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }

  return (
    <div className="game">
      {isGameOver && <div className="game-status">Game Over</div>}
      <div className="scores">
        <div>{`Current Score: ${currentScore}`}</div>
        <div>{`High Score: ${highScore}`}</div>
      </div>
      <GameBoard
        memoryCardsToDisplay={memoryCardsToDisplay}
        handleMemoryCardClick={handleMemoryCardClick}
      />
      <button disabled={!isGameOver} onClick={handleNewGameClick}>
        New Game
      </button>
    </div>
  );
}

class MemoryCard {
  name;
  imageUrl;
  isClicked;

  constructor(name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.isClicked = false;
  }
}
