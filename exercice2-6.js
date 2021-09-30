const readlineSync = require("readline-sync");
let i = readlineSync.question('Enter a number between 1 and 7?');

if (i==1) {
    console.log('lundi');
}
else if (i==2) {
    console.log('mardi');
}
    
else if (i==3) {
    console.log('mercredi');
}
    
else if(i==4) {
    console.log('jeudi');
}
    
else if(i==5) {
    console.log('vendredi');
}
    
else if(i==6) {
    console.log('samedi');
}
    
else if(i==7) {
    console.log('dimanche');
}
   
else if (i>7) {
    console.log('Error')
}









