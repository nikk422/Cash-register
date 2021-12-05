var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");

var availableNotes = [2000, 500, 100, 20, 10, 5, 1];

var cash=cashGiven.value;
var bill=billAmount.value

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (cash>= bill) {
      var amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Do you wanna wash plates?");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(amountToBeReturned) {
  for (var i = 0; i < availableNotes.length; i++) {
    var numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

    amountToBeReturned = amountToBeReturned % availableNotes[i];
    if (numberOfNotes >=0){
      amountToBeReturned = amountToBeReturned % availableNotes[i];
      noOfNotes[i].innerText = numberOfNotes;
    }else{
      showMessage("Do you wanna wash plates?");
    }    
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
