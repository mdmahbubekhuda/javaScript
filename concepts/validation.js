// Number.isInteger(value) - returns boolean
const number = 1;
console.log(Number.isInteger(number));

// Number.isNaN - returns boolean
const case1 = 123;
const case2 = '123';
const case3 = 'hello';
const case4 = true;
const case5 = undefined;
const case6 = null;
console.log(Number.isNaN(NaN)); // .isNaN - global

// Array.isArray() - returns boolean
const array = [1, 2, 3];
console.log(Array.isArray(array));

// validation - object
function validObject(obj) {
    return (typeof obj === 'object' && obj !== null && !Array.isArray(obj))
        ? 'is a object'
        : 'is not a object'
}
const obj = { key: 'value' }
console.log(validObject(obj));

// validation - number
function validNum(x, y) {
    return (typeof x !== 'number'
        || typeof y !== 'number')
        ? 'please provide a number'
        : x + y;
}
console.log(validNum(1, '2'));

// validation - array
function validArray(arr) {
    return (!Array.isArray(arr)) ? 'it is not an array' : 'it is an array'
}
const array2 = '[1, 2, 3, 4, 5, 6, 7, 8, 9]';
console.log(validArray(array2));

// check if number is integer 
function isInteger(num) {
    if (typeof num !== 'number') return 'Please provide a number!'
    return (num % 1 !== 0) ? 'float number' : 'integer number'
}
const checkInteger = 1.2
console.log(isInteger(checkInteger));

// check positive number
function validPositiveNumber(num) {
    if (!(num >= 0) || typeof num !== 'number') return 'Provide a positive number'
}
const positiveNumber = 5;
const checkPositiveNumber = validPositiveNumber(positiveNumber);
console.log(checkPositiveNumber);


// check if the file is a javaScript file (string)
function isJavaScriptFile(fileName) {
    if (typeof fileName !== 'string') return 'Please provide a string'

    // endsWith() method
    return (fileName.toLowerCase().endsWith('.js')) ? 'javaScript file' : 'not a javaScript file'

    // split() method
    // const fileExtension = fileName.split('.').pop();
    // return (fileExtension.toLowerCase() === 'js') ? 'javaScript file' : 'not a javaScript file'
}
const fileName = 'rnk.js';
const javaScriptFile = isJavaScriptFile(fileName);
console.log(javaScriptFile);


// finding bad data (negative numbers)
function findingBadData(arr) {
    let badDataCount = 0;
    for (let element of arr) {
        if (!Array.isArray(arr) || typeof element !== 'number') return 'provide an array containing only numbers';
        (element < 0) ? badDataCount++ : null;
    }
    return badDataCount;
}
const dataSet = [2, -5, '-7', -13];
const checkBadData = findingBadData(dataSet);
console.log(checkBadData);
