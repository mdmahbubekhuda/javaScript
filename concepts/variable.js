// variable naming convention 
// 1. can't use reserved keywords (such as, var let true etc);
// 2. can't have white spaces in between words - has to be a single word;
// 3. can't have quotation;
// 4. can't have numbers at start;
// 5. can't use dash(-) but underscore is allowed;
// 6. can use camelCasing, PascalCasing, snake_casing;
// 7. variable names are case sensitive 

// variable declaration
let tomatoPrice = 20;
// variable value update
tomatoPrice = 25;
// add to the value
tomatoPrice = tomatoPrice + 10;

// primitive type
// numeric variable
const price = 33;
// string variable
const welcomeMessage = 'hello world';
// boolean-(true or false)
const areYouSerious = true;
// undefined
let variableWithoutValue;
// null

// non-primitive type
// array
const arr = [1, 'hello', true, '2']

// object
const obj = {
    // key: value,
    name: 'Rnk',
}

// variable swap - using temp variable 
let x = 'a'
let y = 'b'
let z // temp variable
z = x
x = y
y = z
console.log(x, y);

// variable swap only for number value
let num1 = 1
let num2 = 2
num1 = num1 + num2
num2 = num1 - num2
num1 = num1 - num2
console.log(num1, num2);






