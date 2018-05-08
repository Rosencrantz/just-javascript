// Exercise 2:
// Write two functions that use Promises that you can chain! The first function,
// makeAllCaps(), will take in an array of words and capitalize them, and then the
// second function, sortWords(), will sort the words in alphabetical order. If the
// array contains anything but strings, it should throw an error.
export default class WordUtil {
  constructor() {
    return true;
  }

  static makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(words)) {
        reject(new Error('Argument should be an array of words'));
      }

      const upperCaseWords = words.map((word) => {
        if (typeof word !== 'string') {
          reject(new Error('Array contains at least one item that is not a string'));
        }
        return word.toUpperCase();
      });
      resolve(upperCaseWords);
    });
  }

  static sortWords(words) {
    return new Promise((resolve, reject) => {

    });
  }
}
