const readlineSync = require("readline-sync");
let n = readlineSync.question('Enter a number ');
let result = 0;

for (i=0; i<n; i++) {
    result += Number(readlineSync.question('Enter a number '));
}
console.log(result);