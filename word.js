// //constructor files




// //should contain all of the methods wich will check the letters guess vs the random word selected
var inquirer = require("inquirer");
var game = require('./game.js');
var letter = require('./letter.js');
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
userGuessWord.push(user.letter);
checker();


});


}

global.checker = function() {


	isInWord = false;

		for (var j = 0; j < global.nums; j++) {

			if(userInput == global.wordPicked[j]) {
				isInWord = true;
			

				}

		}

	global.inWord();	
      
}





