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


// multi layer discount 
function ticketPrice(ticketQty) {

    const first100rate = 100;
    const second100rate = 90;
    const restTicketsRate = 70;

    if (ticketQty <= 100) {
        const price = ticketQty * first100rate;
        return price;
    }
    else if (ticketQty <= 200) {
        const first100 = 100 * first100rate;
        const rest = (ticketQty - 100) * second100rate;
        const price = first100 + rest;
        return price;
    }
    else {
        const first100 = 100 * first100rate;
        const second100 = 100 * second100rate;
        const rest = (ticketQty - 200) * restTicketsRate;
        const price = first100 + second100 + rest;
        return price;
    }
}

const ticketQty = 201;
const totalTicketPrice = ticketPrice(ticketQty);
console.log(totalTicketPrice);



















