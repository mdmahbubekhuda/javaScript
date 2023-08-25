// array declaration
let arrayName = ['Ronok', 'Rnk', 'Ripa', 'Lopa'];
let friendsAge = [21, 45, 55, 68];
console.log(arrayName);

//length of array
console.log(arrayName.length);

// get element's value by index
console.log(arrayName[1]); //array index

// set element's value by index
arrayName[1] = 'Faraz';
console.log(arrayName);

// to find out index of an array element
console.log(arrayName.indexOf(55));

// add element at the beginning of array
arrayName.unshift('Ammu');
console.log(arrayName);

// add element to the last position of array
arrayName.push('Prince'); //array push
console.log(arrayName);

// remove the first element of array
arrayName.shift();
console.log(arrayName);

// remove the last element from array 
arrayName.pop(); //array pop
console.log(arrayName);

// storing the popped element into a variable
let poppedElement = arrayName.pop();
console.log(poppedElement);

// slice() -syntax => array.slice(start, end) - returns new array
let number = [0, 1, 2, 3, 4, 5];
let firstPartOfNumber = number.slice(0, 5);
console.log(firstPartOfNumber);

// splice() -syntax => array.splice(index, howMany, item1, ....., itemX)
let splice = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // changes original array
splice.splice(0, 5); // only to remove elements
splice.splice(1, 0, 123, 987); // added 2 new elements
console.log(splice);

// array validation
let obj = {
    name: 'RnK',
    sex: 'male'
}
console.log(Array.isArray(splice)); // returns true
console.log(Array.isArray(obj)); // returns false

// map - array>loops>callback>return new array
const arr = [11, 65, 24, 3, 94, 2, 897, 984, 5, 86, 21, 49, 928, 95, 1, 97, 22]
const map = arr.map(num => num * 2)
console.log(map);

// forEach - array>loops>callback>return not possible
arr.forEach(element => {
    element * 2
});

// filter - returns new array based on condition
const filter = arr.filter(n => n > 10 && n % 2 === 0)
console.log(filter);

// find - returns only the first element that matches condition
const find = arr.find(n => n > 900)
console.log(find);

// reduce - (previousValue(accumulator), currentValue), initialValue(previousValue)
const sum = arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
console.log(sum);
