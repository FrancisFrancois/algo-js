const readlineSync = require("readline-sync");

let name = readlineSync.question('Enter your name ?');
let firstName = readlineSync.question('Enter your Fist Name ?');
let city = readlineSync.question('Enter the city ?');
console.log(name + " " + firstName + " " + city);