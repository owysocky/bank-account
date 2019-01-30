// ===================BUSINESS LOGIC========================
function Account (name, balance){
  this.name = name,
  this.balance = balance
}

Account.prototype.addFunds = function (deposit){
  if(deposit){
    return this.balance += deposit;
  } else {
    return balance;
  }
}

Account.prototype.withdrawFunds = function (withdraw){
  if (!withdraw){
    return balance;
  } else {
    if (this.balance < withdraw){
      alert("You don't have enough money.")
    } else {
        return this.balance -= withdraw;
    }
  }
}

// ====================USER INTERFACE=====================


function displayBalance(balanceToDisplay){
  var balancePrintout = $("h2#display");
  var htmlBalanceToDisplay = "<h2>" + balanceToDisplay.balance + "</h2>";
  balancePrintout.html(htmlBalanceToDisplay);
};

$(document).ready(function(){
  $("form#formBank").submit(function(event) {
    event.preventDefault();
    var inputName = $("input#name").val();
    var inputBalance = parseInt($("input#balance").val());
    var inputDeposit = parseInt($("input#deposit").val());
    var inputWithdraw = parseInt($("input#withdraw").val());


    var newAccount = new Account(inputName, inputBalance);
    newAccount.addFunds(inputDeposit);
    newAccount.withdrawFunds(inputWithdraw);
    displayBalance(newAccount);


  });
});
