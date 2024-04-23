document.write(
  "<h1> Write a program that simulates a coin toss using random() method <br> of JS Math class. Display the value of coin in yourbrowser </h1>"
);

var coin1 = Math.random();
var coin2 = Math.random();

if (coin1 <= coin2) {
  document.write("<h2>Heads</h2>");
} else {
  document.write("<h2>Tails</h2>");
}
