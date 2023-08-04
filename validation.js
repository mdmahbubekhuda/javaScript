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

const array = '[1, 2, 3, 4, 5, 6, 7, 8, 9]';
console.log(validArray(array));

