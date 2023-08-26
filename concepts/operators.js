// math operators
console.log(1 + 2); // addition
console.log(2 - 2); // subtraction  
console.log(1 * 2); // multiplication
console.log(1 / 2); // division
console.log(1 % 2); // modulus
console.log(1 < 2); //lesser than
console.log(1 > 2); //greater than
// increment (++) or decrement (--)
let a = 1;
console.log(++a); // pre-incremental
console.log(a++); // post-incremental

// comparison operators
console.log(1 == 2); //equal to ( === equal value and equal data type)
console.log(1 != 2); //not equal to ( !== not equal value nor equal data type)
console.log(1 <= 2); //lesser than or equal to
console.log(1 >= 2); //greater than or equal to

// multiple condition
const variable1 = 1
const variable2 = 2
// and (&&) - has to fulfill all conditions 
if (variable1 === 1 && variable2 === 2) console.log('both condition is true');
// or ('||') - can fulfill either conditions 
if (variable1 === 1 || variable2 === 1) console.log('either condition is true');

// ternary (?) - evaluates true or false
const x = 2;
(x === 2) ? console.log('true') : console.log('false')
// optional chaining (?) - used for error checking (Cannot read properties of undefined (reading 'zxcv'))
const obj = { name: 'Rnk', age: 35, height: "6'", interest: 'software engineering' }
console.log(obj.asdf?.zxcv);

// spread (...) - for array and object - returns the values - solves reference issue
const arr = [11, 22, 333, 44, 55]
// spread - passing an array as arguments
const maxNum = Math.max(...arr) // returns array values
console.log(maxNum);
// spread - to copy
const [j, l, ...rest] = [1, 2, 3, 4, 5] // creates new array that solves reference issue
console.log(j, l, rest);
// spread - to copy with added
const arr2 = [1, ...arr, 2] // creates new array that solves reference issue
console.log(arr2);
// spread - to merge
const arr3 = [...arr, ...arr2]
console.log(arr3);
