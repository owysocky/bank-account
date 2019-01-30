// ===================BUSINESS LOGIC========================
function Account (name, balance){
  this.name = name,
  this.balance = balance;
}

Account.prototype.addFunds = function (deposit){
  this.balance += deposit;
}

Account.prototype.withdrawFunds = function (withdraw){
  if (this.balance < withdraw){
    return "You don't have enough money."
  } else {
    this.balance -= withdraw;
  }
}

// ====================USER INTERFACE=====================


function displayBalance(balanceToDisplay){
  var balancePrintout = $("h2#display");
  var htmlBalanceToDisplay = "<h2>" + balanceToDisplay + "</h2>";
  balancePrintout.html(htmlBalanceToDisplay);
};

$(document).ready(function(){
  $("form#formBank").submit(function(event) {
    event.preventDefault();
    var inputName = $("input#name").val();
    var inputBalance = parseInt($("input#balance").val());
    var inputDeposit = parseInt($("input#deposit").val());
    var inputWithdraw = parseInt($("input#withdraw").val());

    $("input#name").val();
    $("input#deposit").val();
    $("input#withdraw").val();



    var newAccount = new Account(inputName, inputBalance);
    newAccount.addFunds(inputDeposit);
    newAccount.withdrawFunds(inputWithdraw);
    displayBalance(newAccount.balance);

  });
});
