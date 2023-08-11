// // function declaration
// function functionName() {
//     console.log('functionBody');
// }
// // function call
// functionName();

// Four types of function are -
// 1. parameter return;
// 2. no parameter return;
// 3. parameter no return;
// 4. no parameter no return;


// function parameter & argument
function functionName(parameter) {
    console.log('argument value is passed to parameter:', parameter);
}
functionName('value');

//note value can be a variable also
let variableAsValue = 'value stored in variable';
functionName(variableAsValue);

// use arguments key word to get all arguments
function getAllArguments() {
    const getArgumentValues = arguments // arguments keyword to get all values
    console.log(getArgumentValues);
}
getAllArguments(1, 2, 3, 4, 5);

// function return
function functionReturn(parameter1, parameter2) {
    let sum = parameter1 + parameter2;
    return sum;
}
let argument1 = 10;
let argument2 = 20;
let returnedValue = functionReturn(argument1, argument2);
console.log(returnedValue);

// return multiple values from function as array or object
function returnMultiValues() {
    const name = 'Rnk';
    const age = 33;
    // return [name, age]; // array returned
    return { name, age }; // object returned 
}
console.log(returnMultiValues());

// recursive function - function that calls itself
function recursive(n) {
    if (n <= 0) {
        return 'Recursive end';
    }
    console.log('Recursion:', n);
    recursive(n - 1);
}
recursive(3);

// recursion sum
function sumOfN(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumOfN(n - 1);
    }
}
const n = 5;
console.log(sumOfN(n))