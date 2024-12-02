const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	const result = arr.reduce( (sum, item) => { return sum + item }, 0 );
  return result
};

const multiply = function(arr) {
  const result = arr.reduce( (sum, item) => { return sum * item } );
  return result;
};

const power = function(number, power) {
	return Math.pow(number, power);
};

const factorial = function(factor) {
  let result = 1;
	for (let index = factor; index > 0; index--) {
    result = result * index;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
