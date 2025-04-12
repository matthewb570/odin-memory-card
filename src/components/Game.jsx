import ArrayUtils from "../utils/ArrayUtils";
import ImageCard from "./ImageCard";

export default function Game({
  memoryCardsToDisplay,
  setMemoryCardsToDisplay,
}) {
  function handleImageCardClick() {
    setMemoryCardsToDisplay(ArrayUtils.shuffleArray(memoryCardsToDisplay));
  }

  return (
    <div className="game">
      <div className="image-card-list">
        {memoryCardsToDisplay.map((entry) => (
          <ImageCard
            key={entry.name}
            imageUrl={entry.image}
            title={entry.name}
            onClick={handleImageCardClick}
          />
        ))}
      </div>
    </div>
  );
}
