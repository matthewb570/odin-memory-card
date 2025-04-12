import ImageCard from "./ImageCard";

export default function GameBoard({
  memoryCardsToDisplay,
  handleImageCardClick,
}) {
  return (
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
  );
}
