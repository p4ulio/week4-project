function logger(value) {
  console.log(value);
}

function calculate(num1, num2) {
  let sum = num1 + num2;
  logger(sum);
  return sum;
}

function calculateWithCallback(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
  return sum;
}

calculate(5, 5);
// Send logger as callback (no parentheses)
calculateWithCallback(5, 5, logger);
// Send empty function as callback so nothing logs
calculateWithCallback(5, 5, () => {});