// // function declaration
// function functionName() {
//     console.log('functionBody');
// }
// // function call
// functionName();

// funtion parameter & argument
function functionName(parameter) {
    console.log('argument value is passed to parameter:', parameter);
}
functionName('value');

//note value can be a variable also
let variableAsValue = 'value stored in variable';
functionName(variableAsValue);

// fuction return
function functionReturn(parameter1, parameter2) {
    let sum = parameter1 + parameter2;
    return sum;
}

let argument1 = 10;
let argument2 = 20;
let returnedValue = functionReturn(argument1, argument2);
console.log(returnedValue);
