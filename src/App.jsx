import { useMemo, useState } from "react";
import { useEffect } from "react";
import ImageCard from "./components/ImageCard";
import "./styles/ImageCard.css";
import ArrayUtils from "./utils/ArrayUtils";

export default function App() {
  const [memoryCardData, setMemoryCardData] = useState([]);

  const memoryCardsToDisplay = useMemo(
    () => ArrayUtils.getRandomElementsFromArray(memoryCardData, 15),
    [memoryCardData],
  );

  useEffect(() => {
    let active = true;

    async function getData() {
      const response = await fetch(
        "https://botw-compendium.herokuapp.com/api/v3/compendium/all",
      );
      if (response.ok && active) {
        const responseJson = await response.json();
        setMemoryCardData(responseJson.data);
      }
    }

    getData();

    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      {memoryCardsToDisplay.map((entry) => (
        <ImageCard key={entry.name} imageUrl={entry.image} title={entry.name} />
      ))}
    </>
  );
}
