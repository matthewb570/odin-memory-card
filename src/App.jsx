import { useState } from "react";
import { useEffect } from "react";

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
        <div>
          <img src={entry.image}></img>
          <div>{entry.name}</div>
        </div>
      ))}
    </>
  );
}
