

// //main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.

	var word = require("./word.js");
	var game = require("./game.js");


//if the letter is in word switches out placeholders "_" for actual letter
	global.inWord = function() {

		if(isInWord) {

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

 		
		rounds();
		console.log(global.holders)
		global.getInput();	


    }


//keeps track of guesse and right answers.  Ends and sends game back to game.js
	var rounds = function() {

        if(global.letters.toString() == global.holders.toString()) {
        	console.log(global.holders)
            wins++
            console.log("-------------------------------")
            console.log("Answer: '" + wordPicked + "', Nice job!")
            game.wordSetUp();
    
        }	

        else if (global.guessesLeft===0) {
        	console.log("-------------------------------")
        	console.log("Aww, try again...")
        	console.log("-------------------------------")
            losses++
            game.wordSetUp();

        }

	};

	inWord();
