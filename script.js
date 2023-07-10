//Buttons and Variables

const display = document.querySelector('.bottomScreen');
const buttons = document.querySelector('.buttons_group');
const numberBtn = document.querySelector('.number')
//display.innerHTML = numberBtn.value;

buttons.addEventListener('click', (e) => {
    const key = e.target;
    const numberContent = key.textContent;
    if (e.target.matches('.number')) {
        return display.textContent = numberContent;
    }
})




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

console.log(operate(100, '+', 100));