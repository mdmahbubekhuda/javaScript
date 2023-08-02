let x = 1;
let y = 2;
let z = 3;

// single condition if statement
if (x > y) {
    console.log("'x' is greater than 'y'");
}
else {
    console.log("'x' is less than 'y'");
}

// multiple conditions if statement
if ((x == y && y == z) || z >= x) {
    console.log('&& is false but || condition is true');
}
else {
    console.log("both && and || is true");
}

// multi-stage if statement
if (x == y) {
    console.log('first condition is true');
}
else if (y == z) {
    console.log('second condition is true');
}
else if (z == x) {
    console.log('third condition is true');
}
else {
    console.log('none of the conditions are true');
}

// nested if statement
if (x == y) {
    if (y == z) {
        console.log('nested condition is true');
    }
    else {
        console.log('nested condition is false');
    }
}
else {
    console.log('main condition is false');
}




