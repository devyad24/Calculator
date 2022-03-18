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

let firstNumber = 0, secondNumber = 0, answer=0;
let operator = '';
let operatorPresent = false;
let screenCleared = false;

function numberInput() {
    let flag = 0;
    numbers.forEach((num) => {
        num.addEventListener('click', (e) => {
            if (!operatorPresent) {
                display.textContent += e.target.textContent;
                firstNumber = display.textContent;
            } else {
                if (flag === 0) {
                    display.textContent = '';
                    flag++;
                }
                display.textContent += e.target.textContent;
                secondNumber = display.textContent;
            }
        })
    })
}
function operatorInput() {
    operators.forEach(op => {
        op.addEventListener('click', (e) => {
            operator = e.target.textContent;
            operatorPresent = true;

        })
    })
}

function getAnswer() {
    if(!screenCleared && operatorPresent) firstNumber = answer;
    equalsTo.addEventListener('click', () => {
        answer = (operate(operator, firstNumber, secondNumber).toString());
        display.textContent = answer;
    });
}

function clearDisplay(){
    clearnScr.addEventListener('click',()=>display.textContent='');
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
    operatorPresent = false;
    screenCleared = true;
}

numberInput();
operatorInput();
getAnswer();
clearDisplay();