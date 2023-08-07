// Number.isInteger(value) - returns boolean
const number = 1;
console.log(Number.isInteger(number));

// Array.isArray(value) - returns boolean
const array = [1, 2, 3];
console.log(Array.isArray(array));


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
