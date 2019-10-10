

$(document).ready(function() {
$("#input-number").sumbit(function(event) {
  event.preventDefault();
   var inputtedNumber = parseInt($("input#number").val());
   $("#return-numbers").append("<li>" + returnNumbers + "</li>");

 });
});
