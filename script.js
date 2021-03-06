const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const operate = (operator, x, y) => {
    x = parseFloat(x);
    y = parseFloat(y);
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
const decimalSign = document.querySelector('.dot');
const percentage = document.querySelector('.percentage');
const deleteExpression = document.querySelector('.delete');
const negateExpression = document.querySelector('.negate');

let firstNumber = 0, secondNumber = 0, answer = 0;
let operator = '';
let operatorPresent = false;
let secondOperatorPresent = false;
let screenCleared = false;
let flag = 0;
let toggleNegateBtn = false;
negateExpression.addEventListener('click', e => {
    if (firstNumber == display.textContent) {
        firstNumber = (-(parseFloat(display.textContent)));
        display.textContent = firstNumber.toString();
    } else if (secondNumber == display.textContent) {
        secondNumber = (-(parseFloat(display.textContent)));
        display.textContent = secondNumber.toString();
    }
})

decimalSign.addEventListener('click', e => {
    if (!display.textContent.includes('.')) display.textContent += e.target.textContent;
});
percentage.addEventListener('click', e => {
    firstNumber = (parseFloat(display.textContent) / 100);
    firstNumber = Math.round(firstNumber * 100) / 100;
    display.textContent = firstNumber.toString();
})
function deleteExprs() {
    if (display.textContent.length === 1) {
        if (display.textContent == firstNumber) {
            firstNumber = 0;
            display.textContent = firstNumber;
        } else {
            secondNumber = 0;
            display.textContent = secondNumber;
        }
    }
    else if (parseFloat(display.textContent) == firstNumber) {

        firstNumber = parseFloat(display.textContent.slice(0, -1));
        display.textContent = firstNumber.toString();


    }
    else {
        secondNumber = parseFloat(display.textContent.slice(0, -1));
        display.textContent = secondNumber.toString();
    }


}
deleteExpression.addEventListener('click', deleteExprs);


numbers.forEach((num) => {
    num.addEventListener('click', storeNumbers)
})


function storeNumbers(numberBtn) {
    if (!operatorPresent) {
        if (screenCleared) {
            display.textContent = '';
            screenCleared = false;
        }
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
    if (targetOperator.target.textContent !== '') {
        getAnswer();
    }
    operator = targetOperator.target.textContent;
    operatorPresent = true;
}

operators.forEach(op => {
    op.addEventListener('click', operatorInput)
})
function isZero(num) {
    num = parseFloat(num);
    return subtract(num, 0) === 0 ? true : false;
}
function getAnswer() {
    if (firstNumber === null || operator === '' || secondNumber === null) return;
    if (isZero(secondNumber) && operator === '/') answer = 'OOPSIE!';
    else answer = Math.round(operate(operator, firstNumber, secondNumber) * 100) / 100;
    display.textContent = answer.toString();
    if (operatorPresent) {
        firstNumber = answer;
        secondNumber = 0;
        flag = 0;
    }
}

equalsTo.addEventListener('click', getAnswer);


function clearDisplay() {
    firstNumber = 0;
    secondNumber = 0;
    answer = 0;
    operator = '';
    operatorPresent = false;
    flag = 0;
    screenCleared = true;
    display.textContent = answer;
}

clearnScr.addEventListener('click', clearDisplay);