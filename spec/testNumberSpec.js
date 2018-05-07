import TestNumber from '../src/testNumber';

describe('Testnumber', () => {
  it('is a function', () => {
    expect(typeof TestNumber === 'function').toBe(true);
  });

  it('returns a promise', () => {
    try {
      expect(TestNumber.testNumber(11) instanceof Promise).toBe(true);
    } catch (error) {
      console.warn(error);
    }
  });

  it('Promise returns true if a number is above 10', () => {
    TestNumber.testNumber(11).then((result) => {
      expect(result).toBe(true);
    });
  });

  it('Promise returns false if a number is below 10', () => {
    TestNumber.testNumber(9).then((result) => {
      expect(result).toBe(false);
    });
  });

  it('Throws an exception is the value passed is not a number', () => {
    TestNumber.testNumber('error').catch((error) => {
      expect(error).toEqual(new Error('Value is not a number'));
      done();
    });
  });
});
