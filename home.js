const validPin = 1234;
// add money
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const bankAccount = document.getElementById("bank-account").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const pinNumber = parseInt(document.getElementById("pin-number").value);
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (bankAccount.length < 11) {
      alert("Please provide valid account number");
      return;
    }
    if (pinNumber != validPin) {
      alert("Please provide valid pin number");
    }
    const newAvailableBalance = availableBalance + addAmount;
    document.getElementById("available-balance").innerText =
      newAvailableBalance;
    // console.log(bank, bankAccount, addAmount, pinNumber, availableBalance);
  });

// cash out
document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const withdrawAmount = document.getElementById("withdraw-amount").value;
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  const newAvailableBalance = availableBalance - withdrawAmount;
  document.getElementById("available-balance").innerText = newAvailableBalance;
});

// toggling features

document.getElementById("add-button").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
  });
