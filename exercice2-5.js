const readlineSync = require("readline-sync");
let i = 0 ;



while ( i!=42 ) {
    
    i = readlineSync.question('What is your favorite number?');


if ( i!=42 )
console.log('Are you sure ?');

else
console.log('OK');


}







