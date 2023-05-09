const capitalizeFirstLetter = require('../tasks/capitalize.js');

describe('Capitalize the first letter', () => {
  test('First letter of a string should be capital', () => {
    expect(capitalizeFirstLetter('string')).toBe('String');
  });

  test('Input should be a string', () => {
    expect(() => {
      capitalizeFirstLetter(1);
    }).toThrow('Not a string');
  });
});