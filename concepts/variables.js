// variable naming convention 
// 1. can't use reserved keywords (such as, var let true etc);
// 2. can't have white spaces in between words - has to be a single word;
// 3. can't have quotation;
// 4. can't start with numbers;
// 5. can't use dash (-) but underscore (_) is allowed;
// 6. can use camelCasing, PascalCasing, snake_casing;
// 7. variable names are case sensitive 
let variable = 20 // variable declaration
variable = 25 // variable value update
variable = variable + 10; // add to the value
console.log(variable);

// strict typed programming language (c++, java) - need to declare data type before initialize
// javaScript is dynamic typed programming language - no need to declare data type before initialize

// primitive data types 
const number = 123
const string = 'string'
const boolean = true // or false
// trivial data type
const specialTypeI = undefined
const specialTypeII = null // typeof null is object - javaScript creator's mistake
// non-primitive data types
const array = ['index-0', 'index-1', 'index-n']
const object = { key: 'value' }
console.log(typeof specialTypeII);

// memory reference value - only for non primitive type
const objX = { name: 'Ronok' }
const objY = objX
objY.name = 'Rnk'
console.log(objX, objY);

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

/* 8 ways to get undefined */
// 1. when variable is not initialized
let a
console.log('1. ' + a);
// 2. when value is set as undefined
const b = undefined
console.log('2. ' + b);
// 3. function that return nothing
function c() {
    return
}
console.log('3. ' + c());
// 4. function that returns nothing but stored in a variable
function d(x, y) {
    const sum = x + y
}
const result = d(1, 1)
console.log('4.', result);
// 5. argument is not passed as parameter of function
function e(x, y) {
    console.log('5.', x, y);
}
e()
// 6. accessing object property that doesn't exist
const f = { x: 123, y: 123 }
console.log('6.', f.x, f.y, f.z);
// 7. accessing array with index number that doesn't exist
const g = [1, 2, 3]
console.log('7.', g[3]);
// 8. delete an item of array - not recommended at all
const h = [1, 2, 3]
delete h[1]
console.log('8.', h);
