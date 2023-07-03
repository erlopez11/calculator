// Addition
function add(num1, num2) { //adds only 2 numbers
    return num1 + num2;
};

function addAll(...args) { //adds list of multiple numbers; this misght be the better option?
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

//Subtraction
function subtract(num1, num2) {//subtracts only 2 numbers
    return num1 - num2;
}

function subtraction(...args) {//subtracts list of multiple numbers; better option?
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
function division(num1, num2) {// only two numbers
    return num1/num2;
}

function divisionAll(...args) { // list of multiple numbers/rules for use of 0?
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

console.log(division(9, 3));
console.log(divisionAll(0, 5, 8, 9, 0));