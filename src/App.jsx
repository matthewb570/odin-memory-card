import { useState } from "react";
import { useEffect } from "react";
import ImageCard from "./components/ImageCard";
import "./styles/ImageCard.css";

export default function App() {
  const [memoryCardData, setMemoryCardData] = useState([]);

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
      {memoryCardData.map((entry) => (
        <ImageCard key={entry.name} imageUrl={entry.image} title={entry.name} />
      ))}
    </>
  );
}
