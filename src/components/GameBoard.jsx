import ImageCard from "./ImageCard";

export default function GameBoard({
  memoryCardsToDisplay,
  handleMemoryCardClick,
  isGameOver,
}) {
  return (
    <div className="image-card-list">
      {memoryCardsToDisplay.map((memoryCard, index) => (
        <ImageCard
          key={memoryCard.name}
          imageUrl={memoryCard.imageUrl}
          title={memoryCard.name}
          onClick={() => handleMemoryCardClick(index)}
          isClicked={isGameOver ? memoryCard.isClicked : undefined}
        />
      ))}
    </div>
  );
}
