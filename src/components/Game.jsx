import { useEffect, useState } from "react";
import ArrayUtils from "../utils/ArrayUtils";
import GameBoard from "./GameBoard";

export default function Game() {
  const [memoryCardData, setMemoryCardData] = useState([]);
  const [memoryCardsToDisplay, setMemoryCardsToDisplay] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    let active = true;

    async function getData() {
      const response = await fetch(
        "https://botw-compendium.herokuapp.com/api/v3/compendium/all",
      );
      if (response.ok && active) {
        const responseJson = await response.json();
        setMemoryCardData(responseJson.data);
        setMemoryCardsToDisplay(
          ArrayUtils.getRandomElementsFromArray(responseJson.data, 12).map(
            (element) => new MemoryCard(element.name, element.image),
          ),
        );
      }
    }

    getData();

    return () => {
      active = false;
    };
  }, []);

  function handleImageCardClick(index) {
    if (memoryCardsToDisplay[index].isClicked) {
      setIsGameOver(true);
    }

    const newArray = [...memoryCardsToDisplay];
    newArray[index].isClicked = true;
    setMemoryCardsToDisplay(ArrayUtils.shuffleArray(newArray));
  }

  return (
    <div className="game">
      {isGameOver && <div className="game-status">Game Over</div>}
      <GameBoard
        memoryCardsToDisplay={memoryCardsToDisplay}
        handleImageCardClick={handleImageCardClick}
      />
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
