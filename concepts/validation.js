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
console.log(Number.isNaN(NaN));

// Array.isArray() - returns boolean
const array = [1, 2, 3];
console.log(Array.isArray(array));

// Object.isObject() -returns boolean

// validation - number
function validNum(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return 'please provide a number';
    }
    return x + y;
}
console.log(validNum(1, '2'));

// validation - array
function validArray(arr) {
    if (!Array.isArray(arr)) {
        return 'it is not an array';
    }
    return 'it is an array';
}
const array2 = '[1, 2, 3, 4, 5, 6, 7, 8, 9]';
console.log(validArray(array2));


// check if number is integer 
function isInteger(num) {
    if (typeof num !== 'number') {
        return 'Please provide a number!'
    }
    else {
        if (num % 1 !== 0) {
            return false;
        }
        return true;
    }
}
const floatNumber = 1.2;
const checkInteger = isInteger(floatNumber);
console.log(checkInteger);


// check positive number
function mindGame(num) {
    if (!(num >= 0) || typeof num !== 'number') {
        return 'Provide a positive number';
    }
    return ((((num * 3) + 10) / 2) - 5);
}
const positiveNumber = 5;
const checkPositiveNumber = mindGame(positiveNumber);
console.log(checkPositiveNumber);


// check if the file is a javaScript file (string)
function isJavaScriptFile(fileName) {

    if (typeof fileName !== 'string') {
        return 'Please provide a string';
    }
    // endsWith() method
    // return (fileName.toLowerCase().endsWith('.js'));

    // split() method
    const splitArray = fileName.split('.');
    return (splitArray.pop().toLowerCase() === 'js') ? true : false;
}
const fileName = 'rnk.js';
const javaScriptFile = isJavaScriptFile(fileName);
console.log(javaScriptFile);


// finding bad data (negative numbers)
function findingBadData(arr) {
    let badDataCount = 0;
    for (let element of arr) {
        if (!Array.isArray(arr) || typeof element !== 'number') {
            return 'provide an array containing only numbers';
        }
        else (element < 0) ? badDataCount++ : null;
    }
    return badDataCount;
}
const dataSet = [2, -5, '-7', -13];
const checkBadData = findingBadData(dataSet);
console.log(checkBadData);
