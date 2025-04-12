import { useState } from "react";
import { useEffect } from "react";
import "./styles/ImageCard.css";
import "./styles/Game.css";
import ArrayUtils from "./utils/ArrayUtils";
import Game from "./components/Game";

export default function App() {
  const [memoryCardData, setMemoryCardData] = useState([]);
  const [memoryCardsToDisplay, setMemoryCardsToDisplay] = useState([]);

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

  return (
    <Game
      memoryCardsToDisplay={memoryCardsToDisplay}
      setMemoryCardsToDisplay={setMemoryCardsToDisplay}
    />
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
