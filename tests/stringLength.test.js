const stringLength = require('../tasks/stringLength.js');

test('Length of string "micromicro" should be 10', () => {
  expect(stringLength('micromicro')).toBe(10);
});

test('Length of string should be between 1 and 10', () => {
  expect(() => {
    stringLength('Development');
  }).toThrow('Error Message');
});
