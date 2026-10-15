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

function handleNumber(updateResult) {
  result.textContent += updateResult;
}

function handleClear() {
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
  updateDisplay("");
}

function updateDisplay(displayMsg) {
  result.textContent = displayMsg;
}

function handleOperation(target) {
  if (!operator) {
    num1 = Number(result.textContent);
    operator = target;
    updateDisplay("");
  } else {
    handleEquals();
  }
  console.log(num1, num2, operator);
}

function handleEquals() {
  if (!operator || result.textContent === "") return;

  num2 = Number(result.textContent);
  total = operate(operator, num1, num2);
  handleClear();
  updateDisplay(total);
  num1 = total;
  console.log(num1, num2, operator);
}

buttons.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("btn")) {
    if (target.classList.contains("number")) {
      handleNumber(target.textContent);
    } else if (target.classList.contains("clear")) {
      handleClear();
    } else if (target.classList.contains("operator")) {
      handleOperation(target.textContent);
    } else if (target.classList.contains("equals")) {
      handleEquals();
    }
  }
});
