const readlineSync = require("readline-sync");

let number1 = readlineSync.question ('Enter the length of rectangle :');
let number2 = readlineSync.question ('Enter the width of rectangle :');


function calculeSurface(largeur, hauteur) {
    return largeur * hauteur; 
}

console.log(calculeSurface(number1, number2));