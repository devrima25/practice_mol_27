// 1 add event listener to the deposit button

document.getElementById('btn_deposit').addEventListener('click', function(){

// 2 get deposit amount from the deposit input field

const depositField = document.getElementById('deposit_field');
const newDepositAmountString = depositField.value;

// 2.5 convert string deposit amount to a number type

const newDepositAmount = parseFloat(newDepositAmountString);


// 3 clear the deposit input field after getting the value 

depositField.value = '';

// 4 get the previous deposit total 

const depositTotalElement = document.getElementById('deposit_total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);

// 5 calculate new deposit total and set the value to the depodit total

const newDepositTotal = previousDepositTotal + newDepositAmount;
depositTotalElement.innerText = newDepositTotal;

// 6 


})
