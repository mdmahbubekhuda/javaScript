// array declaration
let arrayStr = ['Ronok', 'Rnk', 'Ripa', 'Lopa'];
let arrayNum = [1, 2, 3, 4, 5];
console.log(arrayStr);

console.log(arrayStr.length) //length of array
console.log(arrayStr[1]) // get element's value by index
console.log(arrayStr[1] = 'Faraz') // set element's value by index
console.log(arrayStr.indexOf(55)) // get index of an array element
console.log(arrayStr.unshift('Ammu')) // add element at the beginning of array
console.log(arrayStr.push('Prince')) // add element at the end of array
console.log(arrayStr.shift()) // remove the first element of array
console.log(arrayStr.pop()) // remove the last element from array 
// storing the popped element into a variable
let poppedElement = arrayStr.pop();
console.log(poppedElement);

// slice() -syntax => array.slice(start, end) - returns new array
let firstPartOfNumber = arrayNum.slice(0, 3);
console.log(firstPartOfNumber);

// splice() -syntax => array.splice(index, howMany, item1, ....., itemX)
let splice = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // changes original array
splice.splice(0, 5); // only to remove elements
splice.splice(1, 0, 123, 987); // added 2 new elements
console.log(splice);

// array validation - Array.isArray()
let obj = { name: 'RnK', sex: 'male' }
console.log(Array.isArray(obj)); // returns true or false

// array methods do not change original array - do not use pass by reference
// arr.method((element, index, mainArray) => {}) - for all of the methods
const arr = [11, 65, 24, 3, 94, 2, 897, 984, 5, 86, 21, 49, 928, 95, 1, 97, 22]
// forEach - array>loops>callback>return not possible
arr.forEach(element => element * 2);
// map - array>loops>callback>return new array
const map = arr.map(num => num * 2)
console.log(map);
// filter - returns new array based on condition
const filter = arr.filter(n => n > 10 && n % 2 === 0)
console.log(filter);
// find - returns only the first element that matches condition
const find = arr.find(n => n > 900)
console.log(find);
// reduce - (previousValue(accumulator), currentValue), initialValue(previousValue)
const sum = arr.reduce((previous, current) => previous + current, 0)
console.log(sum);
