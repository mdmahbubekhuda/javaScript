// string includes of
let x = 'hello world';
console.log(x.includes('world'));
console.log(x.includes('has'));

// sub string
let y = x.substring(0, 4);
console.log(y);

// slice() -syntax => array.slice(start, end) 
let slice = 'hello world' ;
slice = slice.slice(1, 4);
console.log(slice);
