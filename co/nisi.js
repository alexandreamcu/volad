const BigNumber = require('bignumber.js');

// Constant for the repeated value
const repeatedValue = new BigNumber(56.78);

// Create a BigNumber object
const a = new BigNumber(123.45);

// Perform operations by chaining methods
const b = a.plus(repeatedValue);
const c = a.minus(repeatedValue);
const d = a.times(repeatedValue);
const e = a.dividedBy(repeatedValue);
const f = a.pow(2);
const g = a.round(2);
const h = a.comparedTo(repeatedValue);

// Example of error handling
try {
  const i = a.dividedBy(0); // This will throw an error
} catch (error) {
  console.error('An error occurred during division:', error.message);
}
