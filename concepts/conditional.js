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

// switch (faster version of if-else)
let color = ' ';

switch (color) {
    case 'green':
        console.log('you are green');
        break;
    case 'black':
        console.log('you are black');
        break;
    case 'white':
        console.log('you are white');
        break;
    default:
        console.log('im blue la lald dlalaldl lad dallad da');
}

// ternary conditional operator
let isMan = true;
const ternary = isMan === true ? 'You are a man' : 'You are a boy';
console.log(ternary);

// guard clause - better readability
function canDrink(person) {
    if (!Object.is(person) || person.age == null) return 'You are not a person';
    return canDrinkResponse(person.age);
}
function canDrinkResponse(age) {
    if (age < 18) return 'Nope kiddo';
    if (age < 21) return 'Not in the US';
    return "Let's burn down the tavern";
}
const person = { name: 'Rnk', age: 22 };
console.log(canDrink(person));
