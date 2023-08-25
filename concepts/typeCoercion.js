// == and ===
// for non primitive types equal comparison operator doesn't work because they use reference value for comparison 
let x = []
let y = []
x = function x() { }
y = function y() { }
// x = []
// y = x
const coercion = (x === y) ? true : false
console.log(coercion);

// task compare 2 arrays and 2 objects (hint: use loops)