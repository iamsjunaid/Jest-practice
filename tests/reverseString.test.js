const reverseString = require('../tasks/reverseString.js');

test('The string should be reversed', () => {
  expect(reverseString('test-string')).toBe('gnirts-tset');
});