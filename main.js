const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const equalButton = document.querySelector('[data-equals]');
const currentOperand = document.querySelector('[data-current]');
const previousOperand = document.querySelector('[data-previous]');

let prev = '';
let curr = '';
let operation = undefined;

function calculate() {
  let calculation;
  const num1 = parseFloat(prev);
  const num2 = parseFloat(curr);
  if (isNaN(num1) || isNaN(num2)) return;
  switch (operation) {
    case 'add':
      calculation = num1 + num2;
      break;
    case 'subtract':
      calculation = num1 - num2;
      break;
    case 'multiply':
      calculation = num1 * num2;
      break;
    case 'divide':
      calculation = num1 / num2;
      break;
    default:
      return;
  }
}

function clear() {
  prev = '';
  curr = '';
  operation = undefined;
}
function remove() {}
function appendNumber(number) {
  if (number === '.' && curr.includes('.')) return;
  curr = curr.toString() + number.toString();
}
function chooseOperation(sign) {
  // if (curr === '') return;
  // if (prev !== '') {
  //   calculate();
  // }
  operation = sign;
  prev = curr;
  curr = '';
  console.log(curr);
}
function updateDisplsy() {
  currentOperand.innerText = curr;
  previousOperand.innerText = prev;
}

numberButtons.forEach((button) =>
  button.addEventListener('click', () => {
    appendNumber(button.innerText);
    updateDisplsy();
  })
);

operationButtons.forEach((button) =>
  button.addEventListener('click', () => {
    chooseOperation(button.dataset.operation);
    updateDisplsy();
  })
);
