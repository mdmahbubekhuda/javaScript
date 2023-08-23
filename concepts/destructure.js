// object destructure
const obj = {
    myName: 'Rnk',
    age: 35,
    gender: 'male',
    occupation: 'web-dev'
}
const { myName, age } = obj
// alias - occupation's alias is work
const { occupation: work } = obj
console.log(work);

// array destructure
const arr = [1, 2, 3]
const [x, y, z] = arr // can use directly [x, y, z] = [1, 2, 3]
console.log(y);

// function to destructure
function doubleIt(a, b) {
    return [a * 2, b * 2]
}
const [num1, num2] = doubleIt(2, 3)
console.log(num1);