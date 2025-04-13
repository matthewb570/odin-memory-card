import ImageCard from "./ImageCard";

export default function GameBoard({
  memoryCardsToDisplay,
  handleMemoryCardClick,
}) {
  return (
    <div className="image-card-list">
      {memoryCardsToDisplay.map((memoryCard, index) => (
        <ImageCard
          key={memoryCard.name}
          imageUrl={memoryCard.imageUrl}
          title={memoryCard.name}
          onClick={() => handleMemoryCardClick(index)}
        />
      ))}
    </div>
  );
}
