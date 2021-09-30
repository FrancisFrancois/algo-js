const readlineSync = require("readline-sync");

let number1 = new Number(readlineSync.question ('Enter a number entier ?'));
let number2 = new Number(readlineSync.question ('Enter a second number enier ?'));
let total = number1 / number2;
console.log(total);