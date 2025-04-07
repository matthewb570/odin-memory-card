export default class StringUtils {
  // TODO: Fix roman numerals
  static convertToTitleCase(string) {
    return string.replace(
      /\b[A-Za-z']+/g,
      (match) =>
        match.charAt(0).toUpperCase() + match.substring(1).toLowerCase(),
    );
  }
}
