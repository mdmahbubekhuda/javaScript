const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //shoud be after function declaration

// sum of array
function sumOfArray(arr) {
    let sum = 0;
    for (const element of arr) {
        sum += element;
    }
    return sum;
}

let sumArray = sumOfArray(array);
console.log(sumArray);

// sum of odd numbers
function sumOfOdd(arr) {
    let sumOfOddNumbers = 0;
    for (const element of arr) {
        (element % 2 === 1) ? sumOfOddNumbers += element : null;
    }
    return sumOfOddNumbers;
}

let sumOfOddNumbers = sumOfOdd(array);
console.log(sumOfOddNumbers);

// factorial reverse with integer and 0! validation
// 5! = 5*4*3*2*1
// 1! = 1
// 0! = 0

function factorial(num) {
    if (typeof num === "number" && num % 1 === 0 && parseInt(num) > 0) { //validation
        let factorial = 1;
        for (let i = num; i >= 1; i--) {
            factorial *= i;
        }
        return factorial;
    }
    else if (num === 0) {
        return 1;
    }
    else {
        return 'Please provide a positive whole number!!!';
    }
}

let number = 5;
let factorialResult = factorial(number);
console.log(factorialResult);

// largest number of an array (simplified)
function largestOfArray(arr) {
    let largest = 0;
    for (const element of arr) {
        (element > largest) ? largest = element : null;
    }
    return largest;
}

const largest = largestOfArray(array);
console.log(largest);

// largest number of an array (complex)
function largestOfArrayComlx(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        (arr[i] > largest) ? largest = arr[i] : null;
    }
    return largest;
}

const largestComlx = largestOfArrayComlx(array);
console.log(largestComlx);

// largest string in array (simplified)
function largestStringArray(arr) {
    let largestString = '';
    for (let element of arr) {
        (element.length > largestString.length) ? largestString = element : null;
    }
    return largestString;
}

const string = ['Rnk', 'Ronok', 'Ripa', 'Lopa'];
const largestString = largestStringArray(string);
console.log(largestString);