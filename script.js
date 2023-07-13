//Buttons and Variables

const currentNumber = document.querySelector('.bottomScreen');
const numberHistory = document.querySelector('.topScreen');
const buttons = document.querySelector('.buttons_group');

const operator = document.querySelectorAll('.operator');
const number = document.querySelectorAll('.number');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.material-symbols-outlined');
const decimal = document.querySelector('.decimal');

let firstOperand = '';
let secondOperand = '';
let currentOperator = ''; 




//Button Functions

//Display Numbers in Current Number Area

number.forEach(function(btnNum) {
    btnNum.addEventListener('click', () => appendNum(btnNum.textContent))
});

function appendNum(number) {
    let numberDisplayed = currentNumber.textContent;
    if (numberDisplayed === '0') {
        currentNumber.textContent = number;
    } else {
        currentNumber.textContent = numberDisplayed + number;
    }
}

//Display Decimal Point

decimal.addEventListener('click', appendDecimal);

function appendDecimal(point) {
    if (!currentNumber.textContent.includes('.')) {
        return currentNumber.textContent += '.';
    }
}

//Display and Save Operator with the First Operand

operator.forEach(function(operatorBtn) {
    operatorBtn.addEventListener('click', () => startOperator(operatorBtn.textContent))
});

function startOperator(selection) {
    firstOperand += currentNumber.textContent;
    currentOperator += selection;
    numberHistory.textContent = `${firstOperand} ${currentOperator}`;
}

//Display the Second Operand and number history from previous step


























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

