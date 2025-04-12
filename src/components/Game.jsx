import { useState } from "react";
import ArrayUtils from "../utils/ArrayUtils";
import ImageCard from "./ImageCard";

export default function Game({
  memoryCardsToDisplay,
  setMemoryCardsToDisplay,
}) {
  const [isGameOver, setIsGameOver] = useState(false);

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
      <div className="image-card-list">
        {memoryCardsToDisplay.map((memoryCard, index) => (
          <ImageCard
            key={memoryCard.name}
            imageUrl={memoryCard.imageUrl}
            title={memoryCard.name}
            onClick={() => handleImageCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
