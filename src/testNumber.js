// write a function testNumber that takes a number and returns a Promise
// that test if the value is less than or greater than the value 10
export default class NumberClass {
  constructor() {
    return true;
  }

  static testNumber(number) {
    return new Promise((resolve, reject) => {
      if (typeof number !== 'number') {
        reject(new Error('Value is not a number'));
      }

      if (number > 10) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }
}
