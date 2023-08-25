/*scope
global scope
function scope
block scope
*/

// hoisting - var only declaration part not the value
// example - 1
function hoisting(x) {
    if (x > 5) {
        var hoist = 'value: ' + x
    }
    console.log(hoist); // output undefined instead of error or the value
}
hoisting(3)
// example - 2
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log('hoisting of:', i);

// hoisting - function also gets hoisted thats why we can call it before initialization
hoistedFn(1, 2)
function hoistedFn(a, b) {
    console.log(`hoisted function: ${a + b}`);
}
// function expression declared with let or const won't hoist
// functionExpression(5, 5) // error: Cannot access 'nonHoistedFn' before initialization
const functionExpression = function (a, b) {
    console.log(`non-hoisted function expression: ${a + b}`);
}
// pass by value - only for primitive data types
let num1 = 1
let num2 = 2
function passBy(a, b) {
    a = 5
    b = 6
}
console.log(num1, num2);
passBy(num1, num2)
// value of num1 and num2 did not changed due to pass by value
console.log(num1, num2);

// pass by reference - only for non-primitive types
let arr1 = [1, 2, 3]
let arr2 = [7, 8, 9]
function passBy(a, b) {
    a.push(333)
    b.push(333)
}
console.log(arr1, arr2);
passBy(arr1, arr2)
// value of arr1 and arr2 is changed due to pass by reference
console.log(arr1, arr2);

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