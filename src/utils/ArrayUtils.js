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
}
