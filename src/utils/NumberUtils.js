export default class NumberUtils {
  /*
    Returns a random integer between min (inclusive) and max (inclusive)
   */
  static getRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
