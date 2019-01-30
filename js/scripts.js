// ===================BUSINESS LOGIC========================


// ====================USER INTERFACE=====================



$(document).ready(function(){

  $("form#new-place").submit(function(event) {
    event.preventDefault();
    var inputName = $("input#firstName").val();
    var inputInitDeposit = $("input#initDeposit").val();
    var inputDeposit = $("input#deposit").val();
    var inputWithdraw = $("input#withdraw").val();

    $("input#place-name").val("");
    $("input#time-of-the-year").val("");
    $("input#location").val("");
    $("input#withdraw").val();

  });
});
