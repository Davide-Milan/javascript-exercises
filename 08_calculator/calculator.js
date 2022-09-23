const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  let result = 0;
  arr.forEach(x => result += x);
  return result; 
};

const multiply = function(arr) {
  let result = 1;
  arr.forEach(x => result *= x);
  return result; 
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(fac) {
	if(fac == 0 || fac == 1) return 1;
  return factorial(fac-1)*fac;
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
