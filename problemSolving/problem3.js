// bad data in an array
function findingBadData(array) {
    if (!Array.isArray(array)) {
        return 'Please provide a valid array!'
    }
    const badDataArray = [];
    let badDataCount = 0;
    for (let element of array) {
        if (element < 0) {
            badDataArray.push(element);
            badDataCount++;
        }
    }
    const badData = { badData: badDataArray, count: badDataCount };
    return badData;
}

const array = [-3, -9, 5, -33, 55];
const badDataCount = findingBadData(array);
console.log(badDataCount);


// are you hungry?
function pandaCost(singaraQuantity, somucaQuantity, jilapiQuantity) {
    if ((!Number.isInteger(singaraQuantity) || singaraQuantity < 0) || (!Number.isInteger(somucaQuantity) || somucaQuantity < 0) || (!Number.isInteger(jilapiQuantity) || jilapiQuantity < 0)) {
        return 'Please provide a non-negative whole number';
    }
    const singaraPrice = 7;
    const somucaPrice = 10;
    const jilapiPrice = 15;

    const totalPrice = (singaraPrice * singaraQuantity) + (somucaPrice * somucaQuantity) + (jilapiPrice * jilapiQuantity);

    return totalPrice;
}

const singaraQuantity = 1, somucaQuantity = 2, jilapiQuantity = 1;
const totalPrice = pandaCost(singaraQuantity, somucaQuantity, jilapiQuantity);
console.log(totalPrice);


// 