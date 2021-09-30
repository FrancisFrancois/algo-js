const readlineSync = require("readline-sync");

let userName = readlineSync.question('Enter your name please?');
console.log("Hello " + userName);

