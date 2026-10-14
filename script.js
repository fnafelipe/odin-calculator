let operator;
let num1;
let num2;

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operation, num1, num2) {
  switch (operation) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      console.log("Invalid operation");
      return null;
  }
}

console.log(operate("+", 5, 7));
console.log(operate("-", 4, 2));
console.log(operate("*", 9, 3));
console.log(operate("/", 10, 2));

