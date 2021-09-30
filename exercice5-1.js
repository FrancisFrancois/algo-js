const readlineSync = require("readline-sync");
let tvshow = {};
function askTvSerie () {
    tvshow.name = readlineSync.question('Quelle est le nom de ta série favorite : ');
    tvshow.year = readlineSync.question("Quelle est l'année de production : ");
    tvshow.actor = [];

      let actorPlus = true;
          while(actorPlus) {

      let add = readlineSync.question('Donnez le nom des acteurs de la série ( Ecrire "stop" pour arrêter la question)  :')

          if (add != "stop") {
            tvshow.actor.push(add);

        } else actorPlus = false;
      }
    
    return tvshow;
}
console.log(`Ta série préferé (données) : ${JSON.stringify(askTvSerie())}`);


