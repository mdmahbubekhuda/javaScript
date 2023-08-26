// // function declaration
// function functionName() {
//     console.log('functionBody');
// }
// // function call
// functionName();

// // function expression
// const expression = function () {
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

// default parameter
function defaultParameter(num = 0, str = '', arr = [], obj = {}) {
    console.log(num, str, arr, obj);
}
defaultParameter() // if no argument is passed default will be applied

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
    if (n === 0) return 'Recursive end'
    console.log('Recursion:', n);
    return recursive(n - 1);
}
console.log(recursive(3))

// recursion sum
function sumOfN(n) {
    if (n === 1) return 1
    return n + sumOfN(n - 1)
}
const n = 5;
console.log(sumOfN(n))

// arrow function
const arrowFn = () => 1 + 2
console.log(arrowFn());

// 'arguments' keyword - returns an array like object
function getAllArguments() {
    const args = [...arguments]
    for (const arg of args) {
        console.log('args:', arg);
    }
}
getAllArguments(1, 2, 3, 4, 5)
console.log(getAllArguments.length); // returns argument length

/* callback - function passed as argument for another function */

// callback - 1
function morning(name) {
    console.log('Good morning,', name);
}
// callback - 2
function night(name) {
    console.log('Good night,', name);
}
// main function
function greetings(name = 'Rnk', callback) {
    callback(name)
}
// When you pass a function as an argument, remember not to use parenthesis"()"
greetings('Mahbub', morning)
greetings('Ronok', night)


// closure - inner function has access to outer function variables as well as global variables
function count() {
    let count = 0
    return () => count++
}
const counter1 = count() // call function using the variable
const counter2 = count() // call function using the variable
console.log('counter1', counter1());
console.log('counter1', counter1());
console.log('counter2', counter2());
console.log('counter2', counter2());
console.log('counter1', counter1());
console.log('counter1', counter1());
console.log('counter1', counter1());
console.log('counter2', counter2());
console.log('counter2', counter2());
console.log('counter1', counter1());
// each time the function is called it creates its own instance that has its own private variable

/**
 * closure - A closure is formed when a nested function (inner function) has access to the variables of its containing function (outer function), even after the outer function has finished executing. This means that the inner function 'closes over' the variables of the outer function, giving it the ability to use those variables even outside the context of the outer function.
 * 
 * encapsulation - is a programming principle that involves bundling data (variables) and the methods (functions) that operate on the data into a single unit, often referred to as an 'object' or a 'module'. The key idea is to hide the internal implementation details and expose only a controlled interface for interacting with the data and methods. This promotes data privacy, prevents unintended modifications, and allows for better organization of code.
 * 
 * private variables - are variables that are not directly accessible from the scope they are defined. They are hidden from external access to prevent unintended modifications and to provide better control over how the data is used. In javaScript closures are often used to create private variables within functions.
 */