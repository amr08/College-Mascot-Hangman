


// //main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.

 var letter = require('./letter.js');
 var word = require("./word.js");
 var game = require("./game.js");




	global.inWord = function() {
  
		if(global.isInWord) {
			 
	 		
	 		 for(var k = 0; k < nums; k++) {

	             if (global.wordPicked[k] == global.userInput) {

	                  global.holders[k] = global.userInput;
	                 

	                console.log(global.holders)


	                }

	         }

	    }  else  {
	            global.guessesLeft--;
	            console.log("Your Guesses Left " + guessesLeft)
	         	alreadyGuessed.push(global.userInput)
	          	console.log("letters already guessed: " + global.alreadyGuessed)

	        }

	  
	   
	  global.rounds();
	 global.getInput();
	             
    }

global.rounds = function() {

   
        if(global.letters.toString() == global.holders.toString()) {
            global.wins++
            game.wordSetUp();
      
    
        }


        else if (global.guessesLeft===0) {
            global.losses++
            game.wordSetUp();

        }

};

inWord();
