// // repetition of function  
// // function getElement by id
// function getElement(element) {
//     const selectElement = document.querySelector(element);
//     const extractElementValue = selectElement.value;
//     const elementValue = parseFloat(extractElementValue);
//     selectElement.value = '';
//     return elementValue;
// }
// // function getElement by id
// function getElement(element) {
//     const selectElement = document.querySelector(element);
//     const extractElementValue = selectElement.innerText;
//     const elementValue = parseFloat(extractElementValue);
//     return elementValue;
// }

// DRY - Version (Don't repeat yourself - DRY)
// function getElement 
function getElement(element, property) {
    const selectElement = document.querySelector(element);
    const extractElementValue = selectElement[property];
    const elementNumValue = parseFloat(extractElementValue);
    return elementNumValue;
}

// function setElement
function setElement(element, amount) {
    const selectElement = document.querySelector(element);
    selectElement.innerText = amount;
}

// deposit
document.getElementById('btn-deposit').addEventListener('click', function () {

    // get elements
    const getDepositInput = getElement('#deposit-amount', 'value');
    const getDepositDisplay = getElement('#deposit span', 'innerText');
    const getBalanceDisplay = getElement('#balance span', 'innerText');

    // validation
    if (isNaN(getDepositInput) || getDepositInput < 0) return alert('Please enter correct amount!');


    // calculate amount
    const calcDeposit = getDepositInput + getDepositDisplay;
    const calcBalance = getDepositInput + getBalanceDisplay;

    // set display value
    setElement('#deposit span', calcDeposit);
    setElement('#balance span', calcBalance);

    // clear input field
    document.getElementById('deposit-amount').value = '';

});

// withdrawal
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // get elements
    const getWithdrawInput = getElement('#withdraw-amount', 'value');
    const getWithdrawDisplay = getElement('#withdraw span', 'innerText');
    const getBalanceDisplay = getElement('#balance span', 'innerText');

    // clear input field
    document.getElementById('withdraw-amount').value = '';

    // validation
    if (isNaN(getWithdrawInput) || getWithdrawInput < 0) return alert('Please enter correct amount!');
    if (getWithdrawInput > getBalanceDisplay) return alert('Insufficient Balance!!!');

    // calculate amount
    const calcWithdraw = getWithdrawInput + getWithdrawDisplay;
    const calcBalance = getBalanceDisplay - getWithdrawInput;

    // set display value
    setElement('#withdraw span', calcWithdraw);
    setElement('#balance span', calcBalance);

});