// centimeter to meter conversion
function centimeterToMeter(num) {
    if (num < 0 || !Number.isInteger) {
        return "Please provide a non-negative integer";
    }
    return num / 100;
}

const centimeter = 110;
const meter = centimeterToMeter(centimeter);
console.log(meter + " meter");

// paper count
function paperRequirements(book1Qty, book2Qty, book3Qty) {
    const book1Paper = 100;
    const book2Paper = 200;
    const book3Paper = 300;

    const totalPaperRequired =
        book1Qty * book1Paper + book2Qty * book2Paper + book3Qty * book3Paper;

    return totalPaperRequired;
}

const book1Qty = 1,
    book2Qty = 1,
    book3Qty = 1;
const totalPaperRequired = paperRequirements(book1Qty, book2Qty, book3Qty);
console.log(totalPaperRequired);


// only positive
function onlyPositive(arr) {
    let positiveNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            break;
        } else positiveNumbers.push(arr[i]);
    }
    return positiveNumbers;
}

const positiveArray = [1, 2, -3, 4, 5];
const positiveNumbers = onlyPositive(positiveArray);
console.log(positiveNumbers);


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


// 
