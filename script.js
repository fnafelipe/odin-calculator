let operator;
let num1;
let num2;

const buttons = document.querySelector(".buttons");

const result = document.querySelector(".result");

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
  result.textContent += updateResult;
  num1 = result.textContent;
}

function clearResultDisplay() {
  result.textContent = "";
}

buttons.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("btn")) {
    if (target.classList.contains("number")) {
      updateResultDisplay(target.textContent);
    } else if (target.classList.contains("clear")) {
      clearResultDisplay();
    }
  }
});
