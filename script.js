const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const operate = (operator, x, y) => {
    x = parseInt(x);
    y = parseInt(y);
    if (operator === '+') {
        return add(x, y);
    }
    else if (operator === '-') {
        return subtract(x, y);
    }
    else if (operator === 'X') {
        return multiply(x, y);
    }
    else if (operator === '/') {
        return divide(x, y);
    }
}

const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.operator');
const equalsTo = document.querySelector('.equals');
const clearnScr = document.querySelector('.clear');

let firstNumber = 0, secondNumber = 0, answer = 0;
let operator = '';
let firstOperatorPresent = false;
let secondOperatorPresent = false;
let screenCleared = false;
let flag = 0;

function numberInput() {
    numbers.forEach((num) => {
        num.addEventListener('click', storeNumbers)
    })
}

function storeNumbers(numberBtn) {
    if (!firstOperatorPresent) {
        display.textContent += numberBtn.target.textContent;
        firstNumber = display.textContent;
    } else {
        if (flag === 0) {
            display.textContent = '';
            flag = 1;
        }
        display.textContent += numberBtn.target.textContent;
        secondNumber = display.textContent;
    }
}

function operatorInput(targetOperator) {
    if(operator!==''){
        getAnswer();
    }
    operator = targetOperator.target.textContent;
    firstOperatorPresent = true;
}

operators.forEach(op => {
    op.addEventListener('click', operatorInput)
})
function isInteger(n) {
    return n % 1 === 0;
 }

function getAnswer() {
    if(isInteger(operate(operator, firstNumber, secondNumber))) answer = operate(operator, firstNumber, secondNumber);
    else answer = operate(operator, firstNumber, secondNumber).toFixed(2);
    display.textContent = answer.toString();
    if (!screenCleared && firstOperatorPresent) {
        firstNumber = answer;
        flag = 0;
    }
}

equalsTo.addEventListener('click', getAnswer);


function clearDisplay() {
    display.textContent = ''
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
    firstOperatorPresent = false;
    screenCleared = true;
    flag = 0;
}

clearnScr.addEventListener('click', clearDisplay);

numberInput();
operatorInput();
getAnswer();