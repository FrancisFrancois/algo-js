const readlineSync = require("readline-sync");

function rand10 () {
    return Math.floor((Math.random() * 10) + 1);
}

function multiRand (n) {
    let array = [];
    for (i=0;i<n;i++) {
        array.push(rand10());
    }
    return array;
}

let amount = readlineSync.question('Nombres de chiffres dans le tableau :');
console.log(multiRand(amount));



    



    









    