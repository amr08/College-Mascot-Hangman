



//main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.

var letter = require('./letter.js');
var word = require("./word.js")




function rounds() {


   
        if(global.letters.toString() == newWord.holders.toString()) {
            wins++
            console.log("AWESOME!")
             wordSetUp();
      
    
        }


        else if (global.guessesLeft===0) {
            losses++
            wordSetUp();

        }

};


