const num1 = 2;
const num2 = -3;
const num3 = 5.1234597654;

// Math.pow(base, exponent)
console.log(Math.pow(num1, 2));

// Math.sqrt(x)
console.log(Math.sqrt(9));

// Math.abs(x)
console.log(Math.abs(num2));

// Math.round(x) / Math.ceil(x) / Math.floor(x)
console.log(Math.round(num3));

// Math.random(x)
console.log(Math.random());
console.log(Math.round(Math.random() * 6));

// Math.max(x) / Math.min(x) - can be used in conditionals
console.log(Math.max(num1, num2, num3));

// get the highest number in array
function highNum(num1, num2, num3) {
    switch (Math.max(num1, num2, num3)) {
        case num1:
            return num1 + 'is the highest';
        case num2:
            return num2 + 'is the highest';
        default:
            return num3 + 'is the highest';
    }
}

const highestNumber = highNum(num1, num2, num3);
console.log(highestNumber);