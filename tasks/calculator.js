class Calculator {
    add = (a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
      } return undefined;
    }

    subtract = (a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
      } return undefined;
    }

    multiply = (a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
      } return undefined;
    }

    divide = (a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a / b;
      } return undefined;
    }
}

module.exports = Calculator;