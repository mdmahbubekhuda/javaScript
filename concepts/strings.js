// string immutable(unchangeable) object
let str = 'hello world';


// toLowerCase() / toUpperCase()
console.log(str.toUpperCase());

// toLocaleLowerCase() / toLocaleUpperCase() - localization in different countries
console.log(str.toLocaleLowerCase());

// slice(indexStart, indexEnd)
console.log(str.slice(1, 4));

// split(separator, limit) - '' splits every character returns array
console.log(str.split(' '));

// join(separator) - (, - . - ' ' - '' - / - a) - needs an array
const arr = ['Rnk', 'Ronok'];
console.log(arr.join('-'));

// concat(value0, value1, /* … ,*/ valueN) - requires array creates new array
const arr2 = ['lopa', 'ripa'];
console.log(arr.concat(arr2));

// substring(indexStart, indexEnd)
console.log(str.substring(0, 4));

// indexOf(searchElement, fromIndex) - fromIndex is optional
console.log(str.indexOf('e'));

// conditional for something doesn't exist in string/array
// str.indexOf('something') !== -1 

// startsWith(searchString, position) - returns true/false
console.log(str.startsWith('hello'));

// endsWith(searchString, position) - returns true/false
console.log(str.endsWith('hello'));

// includes(searchString, position) position is optional defaults to 0s
console.log(str.includes('world'));

// trim() / trimStart() / trimEnd() - removes whiteSpaces
const str1 = ' hello world ';
console.log(str1.trimEnd());

// string reverse
function strReverse(str) {
    let output = '';
    for (let i = str.length - 1; i >= 0; i--) {
        output += str[i];
    }
    return output;
}

const str2 = 'hello world! I am back';
const strReverseOutput = strReverse(str2);
console.log(strReverseOutput);

// string word reverse
function strWordReverse(str) {
    str = str.split(' ');
    let output = [];
    for (let i = str.length - 1; i >= 0; i--) {
        output.push(str[i]);
    }
    output = output.join(' * ');
    return output;
}

const str3 = 'hello world! Lately, you are being ruthless';
const outputWordReverse = strWordReverse(str3);
console.log(outputWordReverse);

