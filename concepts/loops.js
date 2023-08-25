// while loop
let x = 0; //loop variable
while (x < 7) {  //loop condition
    console.log("'1' is added to x, so x is: " + x); //loop body
    x++;
    //changes loop variable (to break out infinite loop press ctrl+c)
}

// for loop
for (let i = 0; i < 7; i++) {
    console.log(i);
}

// for loop - array element
let arrayName = [11, 22, 33, 44, 55];
for (let i = 0; i < arrayName.length; i++) {
    let arrayElement = arrayName[i];
    console.log(arrayElement);
}

// break - stops loop
let firstNames = ['rnk', 'rips', 'loops'];
for (let i = 0; i < firstNames.length; i++) {
    let elementName = firstNames[i];
    if (elementName === 'rips') {
        break;
    }
    console.log('stops at rnk - ', elementName);
}

// continue - skips condition and continue loop
for (i = 0; i < firstNames.length; i++) {
    let elementName = firstNames[i];
    if (elementName == 'rnk') {
        continue;
    }
    console.log('skips rnk - ' + elementName);
}

// reverse loop
for (i = 10; i >= 1; i--) {
    console.log(i);
}

// for in loop (property) - only for object
let object = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
};
for (let keys in object) {
    let values = object[keys];
    console.log(keys, values);
}

// for of loop (values) - only for array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let elements of array) {
    sum += elements;
}
console.log(sum);



