import WordUtil from '../src/wordUtil';

describe('WordUtil.makeAllCaps', () => {
  it('Contains a function makeAllCaps', () => {
    expect(typeof WordUtil.makeAllCaps).toBe('function');
  });

  it('returns a promise', () => {
    expect(WordUtil.makeAllCaps([]) instanceof Promise).toBe(true);
  });

  it('Only accepts an array', () => {
    WordUtil.makeAllCaps([]).then((success) => {
      expect(success).toEqual([]);
    });
    WordUtil.makeAllCaps('not an array').catch((exception) => {
      expect(exception).toEqual(new Error('Argument should be an array of words'));
    });
  });

  it('Only accepts words', () => {
    WordUtil.makeAllCaps(['this', 'is', {}, 7]).catch((exception) => {
      expect(exception).toEqual(new Error('Array contains at least one item that is not a string'));
    });
  });

  it('Returns a set of items that are all uppercase', () => {
    WordUtil.makeAllCaps(['case', 'face', 'race']).then((success) => {
      expect(success).toEqual(['CASE', 'FACE', 'RACE']);
    });
  });
});

describe('WordUtil.sortWords', () => {
  it('Contains a function sortWords', () => {
    expect(typeof WordUtil.sortWords).toBe('function');
  });

  it('Returns a Promise', () => {
    expect(WordUtil.sortWords([]) instanceof Promise).toBe(true);
  });
});
