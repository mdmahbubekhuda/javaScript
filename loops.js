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

// continue - skips / continue loop
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






