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
// toggle form
function formToggle(id) {
  const forms = document.getElementsByClassName("forms");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// toggle button
function toggleButton(id) {
  const formBtns = document.getElementsByClassName("form-btn");

  for (btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }

  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  console.log(id);
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
  toggleButton("add-button");
  formToggle("add-money-parent");
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    toggleButton("cash-out-button");

    formToggle("cash-out-parent");
  });

document
  .getElementById("transfer-money-button")
  .addEventListener("click", function () {
    toggleButton("transfer-money-button");
    formToggle("transfer-money-parent");
  });
