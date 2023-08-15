// practice-1
function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(3, 3));

// practice-2
function favFruit(arr, str) {
    for (let element of arr) {
        if (element.includes(str)) {
            return element + ' is found!';
        }
    }
    return str + ' not found!'
}
const fruitName = 'orange'
const fruits = ['apple', 'mango', 'orange', 'grape', 'cherry']
console.log(favFruit(fruits, fruitName));

// practice-3
function stdProfile(obj) {
    const objValues = Object.values(obj);
    const stdProfile = objValues[0] + ', ' + objValues[1] + ', ' + objValues[2];
    return stdProfile;
}
const stdInfo = { name: 'Rnk', age: 33, grade: 'A+' };
console.log(stdProfile(stdInfo));

// practice-4
function largestElementArray(arr) {
    let largestNumber = arr[0];
    for (let element of arr) {
        if (element > largestNumber) {
            largestNumber = element;
        }
    }
    return largestNumber;
}
const numberArray = [894, 654, 984, 1, 89, 74, 61, 303, 18, 749, 874, 63, 41];
console.log(largestElementArray(numberArray));

// practice-5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// practice-6
function fizzBuzz(num) {
    if (num % 3 === 0) {
        if (num % 5 === 0) {
            return 'FizzBuzz';
        }
        return 'Fizz';
    }
    else if (num % 5 === 0) {
        return 'Buzz';
    }
    return num;
}
const number = 15;
console.log(fizzBuzz(number));

// practice-7
const arrNames = ['ronok', 'rnk', 'mohammad', 'mahbub'];
for (let element of arrNames) {
    console.log('Hello', element);
}

// practice-8
function arrayEven(arr) {
    let evenNum = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNum.push(arr[i]);
        }
    }
    return evenNum;
}
const arrNumbers = [12, 31, 65, 132, 3, 857, 9684, 36, 16, 4, 65, 16, 469, 51];
console.log(arrayEven(arrNumbers));

// practice-9


// practice-10
function ageResponse(age) {
    if (age < 18) {
        return "You're a teenager";
    }
    else if (age >= 18) {
        return "You're an adult";
    }
    else if (age > 50) {
        return "You're a senior citizen";
    }
}
const age = 23;
console.log(ageResponse(age));

// practice-11
function squareNum(arr) {
    let sqNum = [];
    for (const num of arr) {
        if (num > 50) {
            continue;
        }
        else sqNum.push(Math.pow(num, 2));
    }
    return sqNum;
}
const numArray = [20, 50, 55];
console.log(squareNum(numArray));

// practice-12
function avgGrade(obj) {
    const objGrades = obj.grade;
    let sumGrade = 0;
    for (const grade of objGrades) {
        sumGrade += grade;
    }
    const avgGrade = sumGrade / objGrades.length;
    return avgGrade;
}
const student = {
    name: 'Ronok',
    age: 30,
    grade: [92, 91, 94, 96, 98, 93],
};
console.log(avgGrade(student));

// practice-13
function sqrOfDouble(arr) {
    let numArr = [];
    for (const num of arr) {
        numArr.push(Math.pow(num * 2, 2));
    }
    return numArr;
}
const numsArr = [12, 132, 1, 21, 231, 32, 132, 1, 87, 987, 9, 798, 7, 94, 65, 456];
console.log(sqrOfDouble(numsArr));

// practice-14

// practice-15
function taxRate(inc, age) {
    let taxAmount = 0;
    if (inc < 10000 && age < 30) {
        taxAmount = inc * .05;
    }
    else if (inc < 50000 && age < 50) {
        taxAmount = inc * .1;
    }
    else if (inc >= 50000 || age >= 50) {
        taxAmount = inc * .2;
    }
    return taxAmount;
}
const incomeOf = 45000;
const ageOf = 25;
console.log(taxRate(incomeOf, ageOf));
