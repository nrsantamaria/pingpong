// business logic
var numbersTest = function(goal) {
  var output = [];
  var pingsArray = ["ping", "pong"];
  for (var i = 1; i <= goal; i ++) {
    if (i % 15 === 0) {
      output.push(pingsArray.join(''));
    } else if (i % 3 === 0) {
      output.push(pingsArray[0]);
    } else if (i % 5 === 0) {
      output.push(pingsArray[1]);
    } else {
      output.push(i);
    }
  }
  return output;
};
//user interface logic
$(document).ready(function(){
  $("form#number-form").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    var result = numbersTest(userInput);
    $(".results").show();
    result.forEach(function(element){
      $(".results").append("<li>" + element +"</li>");
    });
    this.reset();
  });
});
