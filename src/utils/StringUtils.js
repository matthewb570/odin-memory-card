export default class StringUtils {
  static convertToTitleCase(string) {
    return string.replace(
      /\b\w+/g,
      (match) =>
        match.charAt(0).toUpperCase() + match.substring(1).toLowerCase(),
    );
  }
}
