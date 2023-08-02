// variable naming convention 
// 1. can't use reserved keywords (such as, var let true etc);
// 2. can't have whitespaces in between words - has to be a single word;
// 3. can't have quotation;
// 4. can't have numbers at start;
// 5. can't use dash(-) but underscore is allowed;
// 6. can use camelCasing, PascalCasing, snake_casing;
// 7. variable names are case sensitive 

// numeric variable
var price = 89;

// string variable
let welcomeMessage = 'hello world';

// boolean-(true or false)
let areYouSerious = true;

// undefined
let variableWithoutValue;
// null

// operators
let onionPrice = 20;
let eggPrice = 10;
let addition = onionPrice + eggPrice;
let substraction = onionPrice - eggPrice;
let multiplication = onionPrice * eggPrice;
let division = onionPrice / eggPrice;

// variable declaration
let tomatoPrice = 20;
// variable value update
tomatoPrice = 25;
// add to the value
tomatoPrice = tomatoPrice + 10;

// shorthand 

// operation on the same variable
tomatoPrice += 25;
tomatoPrice -= 30;
tomatoPrice *= 2;
tomatoPrice /= 2;

// increase or decrease value by 1
tomatoPrice++;
tomatoPrice--;

// concatenate
console.log('Tomato price is: ' + tomatoPrice);

// parseInt & parseFloat function to convert data type
let price1 = '11.67';

let roundedPrice = parseInt(price1);
let decimelPrice = parseFloat(price1);

// to check types of data type 
console.log(typeof tomatoPrice);

let x = 0.1;
let y = 0.2;
let z = x + y;
z = z.toFixed(2);
z = parseFloat(z);

// to assertain decimal places note: it returns string value
console.log(typeof z);

// reminder use %-modulus
let a = 7;
let b = 3;
let reminder = a % b;

// practice problem-1
let moneyReceived = 1000;
let moneySpent = 700;
let shopkeeperReturned = moneyReceived - moneySpent;

console.log(shopkeeperReturned);

// practice problem-2
let mathmatics = 75.25;
let biology = 65;
let chemistry = 80;
let physics = 35.45;
let bangla = 99.50;

let totalMarks = mathmatics + biology + chemistry + physics + bangla;
let numberOfSubjects = 5;
let average = totalMarks / numberOfSubjects;
average = average.toFixed(2);
average = parseFloat(average);

// console.log(typeof average);
console.log(average);

// practice problem-3
let firstString = 'I am going to be';
let secondString = 'an awesome web developer';

console.log(firstString + ' ' + secondString);

// practice problem-4
let theNumber = 119;
console.log(theNumber % 5);





