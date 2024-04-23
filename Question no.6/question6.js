document.write(
  "<h1>Write a program that shows a random number between 1 <br> and 100 in your browser.</h1>"
);

var randomS = Math.floor(Math.random() * 100) + 1;

document.write(
  "<h2>The Random Number Between 1 and 100 is: " + randomS + "</h2>"
);
