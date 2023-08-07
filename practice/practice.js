// centimeter to meter conversion
function centimeterToMeter(num) {
  if (num < 0 || !Number.isInteger) {
    return "Please provide a non-negative integer";
  }
  return num / 100;
}

const centimeter = 110;
const meter = centimeterToMeter(centimeter);
console.log(meter + " meter");

// paper count
function paperRequirements(book1Qty, book2Qty, book3Qty) {
  const book1Paper = 100;
  const book2Paper = 200;
  const book3Paper = 300;

  const totalPaperRequired =
    book1Qty * book1Paper + book2Qty * book2Paper + book3Qty * book3Paper;

  return totalPaperRequired;
}

const book1Qty = 1,
  book2Qty = 1,
  book3Qty = 1;
const totalPaperRequired = paperRequirements(book1Qty, book2Qty, book3Qty);
console.log(totalPaperRequired);


// only positive
function onlyPositive(arr) {
  let positiveNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      break;
    } else positiveNumbers.push(arr[i]);
  }
  return positiveNumbers;
}

const positiveArray = [1, 2, -3, 4, 5];
const positiveNumbers = onlyPositive(positiveArray);
console.log(positiveNumbers);


// factorial-forward
function factorial(num) {
  let factorialResult = 1;
  for (let i = 1; i <= num; i++) {
    factorialResult *= i;
    // console.log(factorialResult);
  }
  return factorialResult;
}

const num = 5;
const factorialResult = factorial(num);
console.log(factorialResult);

// factorial-reverse
function factorialReverse(num) {
  let factorialReverseResult = 1;
  for (i = num; i >= 1; i--) {
    factorialReverseResult *= i;
    // console.log(factorialReverseResult);
  }
  return factorialReverseResult;
}

const num2 = 5;
const factorialReverseResult = factorialReverse(num2);
console.log(factorialReverseResult);

// sum of array
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const arraySum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = sumOfArray(arraySum);
console.log(sum);

// sum of odd numbers in an array
function sumOfOdd(arr) {
  let sumOfOddNumbers = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sumOfOddNumbers += arr[i];
    }
  }
  return sumOfOddNumbers;
}

const arrayOdd = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const sumOfOddNumbers = sumOfOdd(arrayOdd);
console.log(sumOfOddNumbers);

// largest number in an array
function largestNumberArray(arr) {
  let largestNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}

const arrayLarge = [123, 2, 31, 231, 333, 23, 1, 231, 23];
const largestNumber = largestNumberArray(arrayLarge);
console.log(largestNumber);

// largest string in an array
function largestStr(arr) {
  let largestString = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > largestString.length) {
      largestString = arr[i];
    }
  }
  return largestString;
}

const arrayString = ['rnk', 'ronok', 'mohammad', 'mahbub'];
const largestString = largestStr(arrayString);
console.log(largestString);


// find vowel and consonant in a string and count them separately
function vowelAndConsonant(str) {

  let vowelCount = 0;
  let consonantCount = 0;
  let whiteSpaceCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u') {
      vowelCount++;
    }
    else if (str[i].toLowerCase() !== ' ' && str[i].toLowerCase() !== ',' && str[i].toLowerCase() !== '.') {
      consonantCount++;
    }
    else whiteSpaceCount++;
  }
  const countObj = { Vowels: vowelCount, Consonants: consonantCount, WhitSpaces: whiteSpaceCount }
  return countObj;
}

const vowelConsonantString = 'a, sjdf.';
const countObj = vowelAndConsonant(vowelConsonantString);
console.log(countObj);


// remove duplicate from an array
function removeDuplicate(arr) {
  let uniqueNames = [];
  for (let element of arr) {
    if (!uniqueNames.includes(element)) {
      uniqueNames.push(element);
    }
  }
  return uniqueNames;
}

const duplicateArray = ['ronok', 'rnk', 'ronok', 'lopa', 'rnk', 'ripa'];
const uniqueNames = removeDuplicate(duplicateArray);
console.log(uniqueNames);