const readlineSync = require("readline-sync");

let minAge = readlineSync.question ('Enter a minimum age ?');
let maxAge = readlineSync.question ('Enter a maximum age ?');

if (minAge>maxAge) {
console.log("Your an idiot");
return;
}

let currentAge = readlineSync.question ('Enter a current age ?');

if (( minAge < currentAge )  && (currentAge < maxAge)) {
console.log(currentAge);
}

