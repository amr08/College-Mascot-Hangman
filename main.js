

// //main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.

	var word = require("./word.js");
	var game = require("./game.js");

	


//if the letter is in word switches out placeholders "_" for actual letter
	global.inWord = function() {

		if(global.isInWord) {

	 		for(var k = 0; k < global.nums; k++) {

	            if (global.wordPicked[k] == global.userInput) {
	                global.holders[k] = global.userInput;

	            }
	        }

	    }   

	    else  {
	            global.guessesLeft--;
	            console.log("Your Guesses Left " + guessesLeft)
	         	alreadyGuessed.push(global.userInput)
	          	console.log("letters already guessed: " + global.alreadyGuessed)

	    }

 		
		global.rounds();
		console.log(global.holders)
		global.getInput();	


    }


//keeps track of guesse and right answers.  Ends and sends game back to game.js
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
