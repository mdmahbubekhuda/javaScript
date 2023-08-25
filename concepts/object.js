// object declaration - properties/keys and vlues
const objectName = {
    name: 'Ronok', //property(key): value,
    height: 6,
    marks: 99,
};
console.log(objectName);

// get key and set value - using dot notation (when property/key name is known)
let myName = objectName.name; // get key name in a variable
objectName.name = 'rnk'; // set key value
console.log(objectName.name);

// alternate way to get keys (known) and set values - using bracket notation
let myHeight = objectName['height']; // get key in variable
objectName['height'] = "6 feet"; // set value
console.log(myHeight);

// another way - to get and set keys and values -using variable
let myMarks = 'marks';
objectName[myMarks] = 100;
console.log(objectName);

// when property/key names are unknown
const objectProperties = Object.keys(objectName) //returns all keys in an array
console.log(objectProperties);
// to get the 'unknown' values of objects
const objectValues = Object.values(objectName) //returns all values in an array
console.log(objectValues);
// object array of array (two dimensional array)
const objectPair = Object.entries(objectName) // returns all keys and values 
console.log(objectPair)

// loop through object
let shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
};
let shoppingCartKeys = Object.keys(shoppingCart);
let shoppingCartValues = Object.values(shoppingCart);
// console.log(shoppingCartKeys, shoppingCartValues);
for (i = 0; i < shoppingCartKeys.length; i++) {
    let keys = shoppingCartKeys[i];
    let values = shoppingCartValues[i];
    console.log(keys, values);
}
// another method (for in loop)
for (let propertyName in shoppingCart) {
    let values = shoppingCart[propertyName];
    console.log(propertyName, values);
}

const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
// delete a key in object
delete obj.c
console.log(obj);
// spread operator - create a new object excluding desired key or keys
const { b, d, ...newObj } = obj
console.log(newObj);
// seal - only value can be modified
Object.seal(newObj)
newObj.e = 999
console.log(newObj);
// freeze - no changes to the object is possible (add, delete, or value)
Object.freeze(newObj)
delete newObj.e
console.log(newObj);
