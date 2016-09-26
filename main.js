



//main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.

var letter = require('./letter.js');




// console.log(global.letters.toString())
// console.log(newWord.holders.toString())

function rounds() {


   
        if(global.letters.toString() == newWord.holders.toString()) {
            wins++
            console.log("AWESOME!")
          
    
        }


        else if (global.guessesLeft===0) {
            losses++
            gameStart();
            wordSetUp();

        }

};


rounds();