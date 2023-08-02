// object declaration - properties/keys and vlues
let objectName = {
    name: 'Ronok', //property(key): value,
    height: 6,
    marks: 99,
};

console.log(objectName);

// get key and set value - using dot notation (when property/key name is known)
let myName = objectName.name; // get key name in a variable
objectName.name = 'rnk'; // set key value
console.log(objectName.name);

// alternate way to get keys (knwon) and set values - using array
let myHeight = objectName['height']; // get key in variable
objectName['height'] = "6 feet"; // set value
console.log(myHeight);

// when property/key names are unknown
let objectProperties = Object.keys(objectName); //returns keys in an array
console.log(objectProperties);
// to get the 'unknown' key values of objects
let objectValues = Object.values(objectName); //returns values in an array
console.log(objectValues);

// another way - to get and set keys and values
let myMarks = 'marks';
objectName[myMarks] = 100;
console.log(objectName);

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
