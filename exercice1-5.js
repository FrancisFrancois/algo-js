const readlineSync = require("readline-sync");

let number1 = new Number(readlineSync.question ('Enter a number with decimal ?'));
let number2 = Math.trunc(readlineSync.question ('Enter a second number with decimal ?'));
let total = number1 + number2;
console.log(total);
