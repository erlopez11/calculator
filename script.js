//Buttons and Variables

const currentNumber = document.querySelector('.bottomScreen');
const numberHistory = document.querySelector('.topScreen');
const buttons = document.querySelector('.buttons_group');
const screen = document.querySelector('.screen');


const operator = document.querySelectorAll('.operator');
const number = document.querySelectorAll('.number');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.material-symbols-outlined');
const decimal = document.querySelector('.decimal');

let resetScreen = false;
let firstOperand = '';
let secondOperand = '';
let currentOperator = ''; 


//Event Listeners
number.forEach(button => {
    button.addEventListener('click', () => displayNumbers(button.textContent))
}) 
decimal.addEventListener('click', addDecimal);
operator.forEach(button => {
    button.addEventListener('click', () => addOperator(button.textContent))
})
equal.addEventListener('click', evaluate);
clear.addEventListener('click', clearAll);
backspace.addEventListener('click', backspaceClear);


//Numbers Button Functions
function displayNumbers(number) {
    let numberDisplayed = currentNumber.textContent;
    if (currentNumber.textContent === '0' || resetScreen) {
        reset();
        currentNumber.textContent = number;
    } else {
        currentNumber.textContent = numberDisplayed + number;
    }
}

//Decimal Button
function addDecimal() {
    if(!currentNumber.textContent.includes('.')) {
        currentNumber.textContent += '.';
    }
}

//Operator Button
function addOperator(operation) {
    if (firstOperand !== '' && currentOperator !== '') {
        currentNumber.textContent = operate(currentOperator, firstOperand, currentNumber.textContent);
        firstOperand = currentNumber.textContent;
        currentOperator = operation;
        numberHistory.textContent = `${firstOperand} ${currentOperator}`;
        resetScreen= true;
    } else {
        currentOperator = operation;
        firstOperand += currentNumber.textContent;
        numberHistory.textContent = `${firstOperand} ${currentOperator}`;
        resetScreen = true;
    }
}

//Clear All Button
function clearAll() {
    numberHistory.textContent = '';
    currentNumber.textContent = '0';
    currentOperator = '';
    firstOperand = '';
    secondOperand = '';
}

//BackSpace Button

function backspaceClear() {
    currentNumber.textContent = currentNumber.textContent.toString().slice(0, -1);
}

//Reset
function reset() {
    currentNumber.textContent = '';
    resetScreen = false;
}

//Second operand and Complete Operation
function evaluate() {
    if (!numberHistory.textContent.includes('=') && currentOperator !== '') {
        secondOperand = currentNumber.textContent
        currentNumber.textContent = roundNumber(operate(currentOperator, firstOperand, secondOperand));
        numberHistory.textContent = `${firstOperand} ${currentOperator} ${secondOperand} =`;
        currentOperator = '';
        firstOperand = '';
    }
}
//Math Operation
function operate(operator, a, b) {
    numA = Number(a);
    numB = Number(b);
    switch(operator) {
        case '+':
            return add(numA, numB);
            break;
        case '-':
            return subtract(numA, numB);
            break;
        case 'x':
            return multiply(numA, numB);
            break;
        case '÷':
            return divide(numA, numB);
            break;
        default:
            return 'Please select a math operator';
            break;
    }
}

//Round Function

function roundNumber(number) {
    return Math.round(number * 100000)/100000;
}

//Functions for Basic Math Operators

// Addition

function add(...args) { 
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

//Subtraction

function subtract(...args) {
    let difference = args[0];
    for (let i = 1; i < args.length; i++) {
        difference -= args[i];
    }
    return difference;
}

//Multiplication

function multiply(...args) {
    let product = 1;
    for (let i = 0; i < args.length; i++) {
        product *= args[i];
    }
    return product;
}

//Division

function divide(...args) {
    let quotient = args[0];
    for (let i = 1; i < args.length; i++) {
        if (quotient === 0) {
            return 0;
        } else  if (args[i] === 0){
            return 'ERROR';
        } else {
            quotient /= args[i];
        }
    }
    return quotient;
}
