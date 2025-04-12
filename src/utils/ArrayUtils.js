import NumberUtils from "./NumberUtils";

export default class ArrayUtils {
  static getRandomElementsFromArray(array, numElements) {
    if (numElements >= array.length) {
      return [...array];
    }

    const randomElements = [];

    const remainingArrayEntries = [...array];
    for (let i = 0; i < numElements; i++) {
      const randomIndex = NumberUtils.getRandomIntegerInRange(
        0,
        remainingArrayEntries.length - 1,
      );

      const randomElement = remainingArrayEntries.splice(randomIndex, 1)[0];
      randomElements.push(randomElement);
    }

    return randomElements;
  }

  static shuffleArray(array) {
    if (!Array.isArray(array)) {
      return array;
    }

    if (array.length === 1) {
      return [...array];
    }

    const newArray = [...array];

    for (let i = 0; i < newArray.length; i++) {
      const randomIndex = NumberUtils.getRandomIntegerInRange(
        i,
        newArray.length - 1,
      );

      const temp = newArray[i];
      newArray[i] = newArray[randomIndex];
      newArray[randomIndex] = temp;
    }

    return newArray;
  }
}
