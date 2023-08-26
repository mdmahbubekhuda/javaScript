// object destructure
const obj = {
    myName: 'Rnk',
    age: 35,
    gender: 'male',
    occupation: 'web-dev'
}
// object destructure
const { age } = obj
// spread
const { myName, ...restObj } = obj
// alias - occupation's alias is work
const { occupation: work } = obj
console.log(restObj);

// array destructure
const arr = [1, 2, 3]
const [x, y, z] = arr
// can also be used
const [a, b, c] = [1, 2, 3]
// spread
const [j, , l, ...restArr] = [4, 5, 6, 7, 8, 9] // skips 5
console.log(j, l, restArr);

// function to destructure
function doubleIt(a, b) {
    return [a * 2, b * 2]
}
const [num1, num2] = doubleIt(2, 3)
console.log(num1, num2);