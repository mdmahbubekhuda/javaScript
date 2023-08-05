// array declaration
let arrayName = ['Ronok', 'Rnk', 'Ripa', 'Lopa'];
let friendsAge = [21, 45, 55, 68];

// console.log(arrayName);

//length of array
console.log(arrayName.length);

// get element's value by index
console.log(arrayName[1]); //array index

// set element's value by index
arrayName[1] = 'Faraz';
console.log(arrayName);

// to find out index of an array element
console.log(arrayName.indexOf(55));

// add element to the last position of array
arrayName.push('Prince'); //array push
console.log(arrayName);

// add element at the begining of array
arrayName.unshift('Ammu');
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

// slice() -syntax => array.slice(start, end) 
let number = [0, 1, 2, 3, 4, 5];
let firstPartOfNumber = number.slice(0, 5);
console.log(firstPartOfNumber);

// splice() -syntax => array.splice(index, howmany, item1, ....., itemX)
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


