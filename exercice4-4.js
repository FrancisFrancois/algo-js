const readlineSync = require("readline-sync");

function average (arr) {
    let result = 0;
    for (item of arr) {
        result += item;
    }
    return result / arr.length;
}

function min (arr) {
    let result = arr[0];
    for (item of arr) {
        if (result > item) result = item;
    }
    return result;
}
function max  (arr) {
    let result = arr[0];
    for (item of arr) {
        if (result < item) result = item;
    }
    return result;
}

function rand10 () {
    return Math.floor((Math.random() * 10) + 1);
}

function multiRand (n) {
    let result = [];
    for (i=0;i<n;i++) {
        result.push(rand10());
    }
    return result;
}

let amount = readlineSync.question('Nombres de chiffres dans le tableau : ');
let arr1 = multiRand(amount);


console.log(`Ton tableau est : [${arr1}]`);
console.log(`La moyenne est : ${average(arr1)}`);
console.log(`Le minimum est : ${min(arr1)}`);
console.log(`Le maximum est : ${max(arr1)}`);

