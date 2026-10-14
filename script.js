let operator;
let num1;
let num2;

const buttons = document.querySelector(".buttons");
console.log(buttons);

const result = document.querySelector(".result");
console.log(result);

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

function updateResultDisplay(updateResult) {
  result.textContent += updateResult.textContent;
  num1 = result.textContent;
}

buttons.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    updateResultDisplay(event.target);
  }
});

function teste() {
  console.log(1);
}
