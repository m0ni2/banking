// deposite button
document.getElementById('deposite-button').addEventListener('click', function () {
    // get deposite input field value
    const depositeInput = document.getElementById('deposite-input');
    const depositeInputAmount = parseFloat(depositeInput.value);

    // get previous deposite value
    const depositePrev = document.getElementById('deposited-amount');
    const depositePrevAmount = parseFloat(depositePrev.innerText);

    // set new deposite total and clear input field
    depositePrev.innerText = depositePrevAmount + depositeInputAmount;
    depositeInput.value = '';

    // get prev balance
    const balancePrev = document.getElementById('total-balance');
    const balancePrevAmount = parseFloat(balancePrev.innerText);

    // set total balance
    balancePrev.innerText = balancePrevAmount + depositeInputAmount;
})

// withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get withdraw input field value
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputAmount = parseFloat(withdrawInput.value);

    // get previous withdraw value
    const withdrawPrev = document.getElementById('withdrawed-amount');
    const withdrawPrevAmount = parseFloat(withdrawPrev.innerText);

    // set new withdraw total and clear input field
    withdrawPrev.innerText = withdrawPrevAmount + withdrawInputAmount;
    withdrawInput.value = '';

    // get prev balance
    const balancePrev = document.getElementById('total-balance');
    const balancePrevAmount = parseFloat(balancePrev.innerText);

    // set total balance
    balancePrev.innerText = balancePrevAmount - withdrawInputAmount;

})