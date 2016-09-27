//constructor files

//should contain all of the methods wich will check the letters guess vs the random word selected
var inquirer = require("inquirer");
var game = require('./game.js');
var main = require("./main.js")

game.wordSetUp();



global.nums = letters.length;



global.userInput = []

global.userGuessWord = []

global.isInWord = []


global.getInput = function() {

inquirer.prompt([
	{
		type: "input",
		message: "Guess a letter",
		name: "letter"
	}

	]).then(function (user) {

userInput = user.letter
// userGuessWord.push(user.letter);
checker();
rounds();



		// if(userGuessWord == global.wordPicked[j]) {
 	// 		isInWord = true;
 	// 		global.newWord.inWord();
 	// 		userGuessWord.push(user.letter);
 	// 		getInput();
 	// 		"working"
 	// 	}
 	// 	else {
 	// 		console.log("try again!")
 	// 		global.guessesLeft--
 	// 		getInput();
 	// 	}
 	 

});


}

global.checker = function() {



	global.newWord.inWord();

	isInWord = false;

		for (var j = 0; j < global.nums; j++) {

			if(userInput == global.wordPicked[j]) {
				isInWord = true;
				}

		


		}

			
      
}




