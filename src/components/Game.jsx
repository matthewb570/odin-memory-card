import { useMemo } from "react";
import ArrayUtils from "../utils/ArrayUtils";
import ImageCard from "./ImageCard";

export default function Game({ memoryCardData }) {
  const memoryCardsToDisplay = useMemo(
    () => ArrayUtils.getRandomElementsFromArray(memoryCardData, 12),
    [memoryCardData],
  );

  return (
    <div className="game">
      <div className="image-card-list">
        {memoryCardsToDisplay.map((entry) => (
          <ImageCard
            key={entry.name}
            imageUrl={entry.image}
            title={entry.name}
          />
        ))}
      </div>
    </div>
  );
}
