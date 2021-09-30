const readlineSync = require("readline-sync");

let age = readlineSync.question ('Enter your age ?');
if ( age >= 18 ) {
console.log("Your are an adult");
} else {
console.log("Your are not yet an adult");
}