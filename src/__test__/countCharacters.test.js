'use strict';

const BracketValidation = require('../countCharacters');

describe('countCharacters.js', () => {
  test('Returned true if valid', () => {
    const result = BracketValidation('({[]})');
    expect(result).toEqual(true);
  });
});
