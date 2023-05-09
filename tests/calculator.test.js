const Calculator = require('../tasks/calculator.js');

const calculator = new Calculator();

describe('Addition', () => {
  test('1 + 1 evaluates to 2', () => {
    expect(calculator.add(1, 1)).toBe(2);
  });

  test('-15 + (-5) evaluates to -20', () => {
    expect(calculator.add(-15, -5)).toBe(-20);
  });

  test('evaluates to undefined', () => {
    expect(calculator.add('jest', 'testing')).toBeUndefined();
  });
});

describe('Subtraction', () => {
  test('1 - 1 evaluates to 0', () => {
    expect(calculator.subtract(1, 1)).toBe(0);
  });

  test('-15 - (-5) evaluates to -10', () => {
    expect(calculator.subtract(-15, -5)).toBe(-10);
  });

  test('evaluates to undefined', () => {
    expect(calculator.subtract('jest', 'testing')).toBeUndefined();
  });
});

describe('Multiplication', () => {
  test('1 * 1 evaluates to 1', () => {
    expect(calculator.multiply(1, 1)).toBe(1);
  });

  test('(-15) * (-5) evaluates to 75', () => {
    expect(calculator.multiply(-15, -5)).toBe(75);
  });

  test('evaluates to undefined', () => {
    expect(calculator.multiply('jest', 'testing')).toBeUndefined();
  });
});

describe('Division', () => {
  test('1 / 1 evaluates to 1', () => {
    expect(calculator.divide(1, 1)).toBe(1);
  });

  test('(-15) / (-5) evaluates to 75', () => {
    expect(calculator.divide(-15, -5)).toBe(3);
  });

  test('evaluates to undefined', () => {
    expect(calculator.divide('jest', 'testing')).toBeUndefined();
  });
});