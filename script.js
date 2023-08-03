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

let firstOperand = '';
let secondOperand = '';
let currentOperator = ''; 




//Numbers Button Functions

number.forEach(button => {
    button.addEventListener('click', () => displayNumbers(button.textContent))
}) 

function displayNumbers(number) {
    let numberDisplayed = currentNumber.textContent;
    //let historyDisplayed = numberHistory.textContent;
    if (numberDisplayed === '0') {
        currentNumber.textContent = number;
    } else {
        currentNumber.textContent = numberDisplayed + number;
    }
}

//Decimal Button
decimal.addEventListener('click', addDecimal);

function addDecimal() {
    if(!currentNumber.textContent.includes('.')) {
        currentNumber.textContent += '.';
    }
}

//Operator Button
operator.forEach(button => {
    button.addEventListener('click', () => addOperator(button.textContent))
})

function addOperator(operation) {
    currentOperator += operation;
    firstOperand += currentNumber.textContent;
    numberHistory.textContent = `${firstOperand} ${currentOperator}`;
    getSecondOperand();
    console.log(firstOperand);
    console.log(secondOperand);

}

//The Second Operand
function getSecondOperand() {
    if (numberHistory.textContent.includes('+') || numberHistory.textContent.includes('-') ||numberHistory.textContent.includes('x') || numberHistory.textContent.includes('÷') ) {
        resetCurrentNum();
    }
}

function resetCurrentNum() {
    currentNumber.textContent = '';
    secondOperand += currentNumber.textContent;
}

console.log(firstOperand);
console.log(secondOperand);
























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


//Calculator Function (For Single Operatos)

function operate(numA, operator, numB) {
    switch(operator) {
        case '+':
            return add(numA, numB);
            break;
        case '-':
            return subtract(numA, numB);
            break;
        case '*':
            return multiply(numA, numB);
            break;
        case '/':
            return divide(numA, numB);
            break;
        default:
            return 'Please select a math operator';
            break;
    }
}

