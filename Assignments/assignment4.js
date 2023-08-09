// problem-1
function cubeNumber(number) {
    if (typeof number !== 'number' || number < 0) {
        return 'Please provide a positive number as input!';
    }
    else {
        const cubeResult = Math.pow(number, 3);
        return cubeResult;
    }
}

console.log(cubeNumber(3));

// problem-2
function matchFinder(string1, string2) {
    if (!(typeof string1 === 'string') || !(typeof string2 === 'string')) {
        return 'Please provide string as inputs';
    }
    else if (string1.includes(string2)) {
        return true;
    }
    else return false;
}

const string1 = 'John Doe';
const string2 = 'ohn';
console.log(matchFinder(string1, string2));

// problem-3
function sortMaker(arr) {
    if (arr.length > 2) {
        return 'Please provide only 2 numbers in the array'
    }
    else if (arr[0] < 0 || arr[1] < 0) {
        return 'Invalid Input';
    }
    else if (arr[0] === arr[1]) {
        return 'equal';
    }
    else if (arr[0] >= 0 && arr[1] >= 0) {
        function compareSort(a, b) {
            return b - a;
        }
        const sortedArray = arr.sort(compareSort);
        return sortedArray;
    }
}

const sortArray = [2, 3];
console.log(sortMaker(sortArray));

// problem-4
function findAddress(obj) {
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';

    const result = street + ',' + house + ',' + society;
    return result;
}

const obj = {
    street: 10,
    house: '15A',
    society: 'Planet Earth'
}
console.log(findAddress(obj));

// problem-5
function canPay(changeArray, totalDue) {

    if (!Array.isArray(changeArray) || !changeArray.length) {
        return "You don't have any change!";
    }
    else {
        let sumOfChange = 0;
        for (let element of changeArray) {
            sumOfChange += element;
        }
        if (sumOfChange > totalDue) {
            return true;
        }
        else return false;
    }
}

const change = [3, 3, 3];
const price = 10;
console.log(canPay(change, price));