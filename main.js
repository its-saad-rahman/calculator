const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const equalButton = document.querySelector('[data-equals]');
const currentOperand = document.querySelector('[data-current]');
const previousOperand = document.querySelector('[data-previous]');
const percentButton = document.querySelector('[data-percent]');

let prev = '';
let curr = '';
let operation = undefined;

function calculate() {
  let calculation;
  const previous = parseFloat(prev);
  const current = parseFloat(curr);
  if (isNaN(previous) || isNaN(current)) return;
  switch (operation) {
    case 'add':
      calculation = previous + current;
      break;
    case 'subtract':
      calculation = previous - current;
      break;
    case 'multiply':
      calculation = previous * current;
      break;
    case 'divide':
      calculation = previous / current;
      break;
    case 'exponentiation':
      calculation = previous ** current;
      break;
    default:
      return;
  }
  curr = calculation;
  operation = undefined;
  prev = '';
}

function clear() {
  prev = '';
  curr = '';
  operation = undefined;
}
function remove() {
  curr = curr.toString().slice(0, -1);
}
function appendNumber(number) {
  if (number === '.' && curr.includes('.')) return;
  curr = curr.toString() + number.toString();
}
function chooseOperation(sign) {
  if (curr === '') return;
  if (prev !== '') {
    calculate();
  }
  operation = sign;
  prev = curr;
  curr = '';
  console.log(curr);
}
function updateDisplsy() {
  let convertOperator = showOpreator();
  currentOperand.innerText = curr;
  if (operation != null) {
    previousOperand.innerText = `${prev} ${convertOperator}`;
  } else {
    previousOperand.innerText = '';
  }
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

equalButton.addEventListener('click', () => {
  calculate();
  updateDisplsy();
});
clearButton.addEventListener('click', () => {
  clear();
  updateDisplsy();
});
deleteButton.addEventListener('click', () => {
  remove();
  updateDisplsy();
});

function showOpreator() {
  switch (operation) {
    case 'add':
      return '+';
    case 'subtract':
      return '-';
    case 'multiply':
      return 'x';
    case 'divide':
      return '÷';
    case 'exponentiation':
      return '^';
    default:
      return;
  }
}
