let operator;
let num1;
let num2;
let total;

const buttons = document.querySelector(".buttons");

const result = document.querySelector(".result");

function formatResult(result) {
  return Number(result.toFixed(2));
}

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
      total = add(num1, num2);
      break;
    case "-":
      total = subtract(num1, num2);
      break;
    case "*":
      total = multiply(num1, num2);
      break;
    case "/":
      total = divide(num1, num2);
      break;
    default:
      console.log("Invalid operation");
      return null;
  }
  return formatResult(total);
}

function handleNumber(updateResult) {
  result.textContent += updateResult;
}

function handleClear() {
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
  updateDisplay("");
  console.log(num1, num2, operator);
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
    operator = target;
    updateDisplay("");
  }
  console.log(num1, num2, operator);
}

function handleEquals() {
  if (!operator || result.textContent === "") return;

  num2 = Number(result.textContent);
  total = operate(operator, num1, num2);
  console.log(num1, num2, operator, total);
  handleClear();
  updateDisplay(total);
  num1 = total;
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
