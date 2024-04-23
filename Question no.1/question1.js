document.write(
  "<h1>Write a program that takes a positive integer from user & <br> display the following in your browser. <br>a)Number <br>b)Roundoff Value <br>c)Ceil Value <br>d)Floor Value</h1>"
);

var userInput = Number(prompt("Enter Any Number"));
if (userInput >= 0) {
  document.write("<h2>Number: " + userInput + "</h2>");

  var userInput2 = Math.round(userInput);
  document.write("<h2>Roundoff Value: " + userInput2 + "</h2>");

  var userInput3 = Math.ceil(userInput);
  document.write("<h2>Ceil Value: " + userInput3 + "</h2>");

  var userInput4 = Math.floor(userInput);
  document.write("<h2>Floor Value: " + userInput4 + "</h2>");
} else {
  alert("Enter Any Positive Integer!");
}
