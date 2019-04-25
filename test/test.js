import { assert } from 'chai';
import lengthOf from '../src';

describe('Test lengthOf().', () => {
  const lengthExpected = [
    {}, { a: 1, b: 2 },
    [], [1, '2', true, undefined],
    '', "I'm a string!"
  ];
  const undefinedExpected = [0, true, undefined, null];

  lengthExpected.forEach((v) => {
    const expectedLength = typeof v === 'object' ? Object.keys(v).length : v.length;
    it(`Should return ${expectedLength} for ${JSON.stringify(v)}.`, () => {
      assert(lengthOf(v) === expectedLength, ':(');
    });
  });

  undefinedExpected.forEach((v) => {
    it(`Should return undefined for ${JSON.stringify(v)}.`, () => {
      assert(lengthOf(v) === undefined, ':(');
    });
  });
});
