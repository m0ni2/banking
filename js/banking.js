/* 
    // deposite button
    document.getElementById('deposite-button').addEventListener('click', function () {
        // get deposite input field value
        const depositeInput = document.getElementById('deposite-input');
        const depositeAmount = parseFloat(depositeInput.value);

        // get previous deposite value
        const depositePrev = document.getElementById('deposited-amount');
        const depositePrevAmount = parseFloat(depositePrev.innerText);

        // set new deposite total and clear input field
        depositePrev.innerText = depositePrevAmount + depositeAmount;
        depositeInput.value = '';

        // get prev balance
        const balancePrev = document.getElementById('total-balance');
        const balancePrevAmount = parseFloat(balancePrev.innerText);

        // set total balance
        balancePrev.innerText = balancePrevAmount + depositeAmount;
    })

    // withdraw button event handler
    document.getElementById('withdraw-button').addEventListener('click', function () {
        const withdrawInput = document.getElementById('withdraw-input');
        const newWithdrawAmount = withdrawInput.value;

        const previousWithdraw = document.getElementById('withdrawed-amount');
        const previousWithdrawAmount = previousWithdraw.innerText;

        const totalWithdraw = parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawAmount);

        previousWithdraw.innerText = totalWithdraw;
        withdrawInput.value = '';

        const balance = document.getElementById('total-balance');
        const previousBalanceAmount = balance.innerText;

        const newBalance = parseFloat(previousBalanceAmount) - parseFloat(newWithdrawAmount);
        balance.innerText = newBalance;
    })
*/

function getInputAmount(inputId) {
    // get input field value
    const inputField = document.getElementById(inputId);
    const inputAmount = parseFloat(inputField.value);

    // clear input field value
    inputField.value = '';

    return inputAmount;
}

function updateTotalAmount(totalFieldId, inputAmount) {
    // get prev total
    const totalField = document.getElementById(totalFieldId);
    const prevAmount = parseFloat(totalField.innerText);

    // calulate total and change totalField value
    totalField.innerText = prevAmount + inputAmount;
}

function updateTotalBalance(inputAmount, isAdd) {
    // get prev balance
    const balanceField = document.getElementById('total-balance');
    const prevBalanceAmount = parseFloat(balanceField.innerText);

    if (isAdd == true) {
        balanceField.innerText = prevBalanceAmount + inputAmount;
    }
    else {
        // validation
        if (inputAmount <= prevBalanceAmount) {
            balanceField.innerText = prevBalanceAmount - inputAmount;
        }
        else {
            console.log('Please Enter Withdraw Amount less than Balance')
        }
    }

}

// deposite button
document.getElementById('deposite-button').addEventListener('click', function () {
    // get inputField value
    const inputAmount = getInputAmount('deposite-input');

    // validation
    if (inputAmount > 0) {
        // calculate total deposite and update deposite field value
        updateTotalAmount('deposited-amount', inputAmount);

        // calculate total balance and update balance field value
        updateTotalBalance(inputAmount, true);
    }
    else {
        console.log('Please Enter Positve Deposite Value');
    }

})


// withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get inputField value
    const inputAmount = getInputAmount('withdraw-input');

    // validation
    if (inputAmount > 0) {
        // calculate total withdraw and update withdraw field value
        updateTotalAmount('withdrawed-amount', inputAmount);

        // calculate total balance and update balance field value
        updateTotalBalance(inputAmount, false);
    }
    else {
        console.log('Please Enter Positve Withdraw Value');
    }
})