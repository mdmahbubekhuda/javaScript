// array declaration
let arrayName = ['Ronok', 'Rnk', 'Ripa', 'Lopa'];
let friendsAge = [21, 45, 55, 68];

// console.log(arrayName);

//length of array
console.log(arrayName.length);

// get element's value by index
console.log(arrayName[1]); //array index

// set element's value by index
arrayName[1]='Faraz';
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

// array slice
let number = [0, 1, 2, 3, 4, 5];
let firstPartOfNumber = number.slice(0, 5);
console.log(firstPartOfNumber);




