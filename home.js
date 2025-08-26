const validPin = 1234;

function getInputValueNumberById(id) {
  const inputField = document.getElementById(id);
  const inputFieldValueNumber = parseInt(inputField.value);
  return inputFieldValueNumber;
}

function getInputValueById(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}
// function to get inner text
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementInnerText = element.innerText;
  const elementInnerTextNumber = parseInt(elementInnerText);
  return elementInnerTextNumber;
}
// function to set inner text

function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

// add money
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = getInputValueById("bank");
    const bankAccount = getInputValueById("bank-account");
    const addAmount = getInputValueNumberById("add-amount");
    const pinNumber = getInputValueNumberById("pin-number");
    const availableBalance = getInnerText("available-balance");

    if (bankAccount.length < 11) {
      alert("Please provide valid account number");
      return;
    }
    if (pinNumber != validPin) {
      alert("Please provide valid pin number");
    }
    const newAvailableBalance = availableBalance + addAmount;
    setInnerText(newAvailableBalance);
    // console.log(bank, bankAccount, addAmount, pinNumber, availableBalance);
  });

// cash out
document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const withdrawAmount = getInputValueById("withdraw-amount");
  const availableBalance = getInnerText("available-balance");

  const newAvailableBalance = availableBalance - withdrawAmount;
  setInnerText(newAvailableBalance);
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
