//constructor files

//should contain all of the methods wich will check the letters guess vs the random word selected
var inquirer = require("inquirer");
var game = require('./game.js');

game.wordSetUp();


// global.userInput = process.argv[2];
global.nums = letters.length;
global.isInWord = false;



// checkLetter();
// function checkLetter() {

//   for (var j = 0; j < global.nums; j++) {

// 		if(newLetter == global.wordPicked[j]) {
//  			isInWord = true;
//  			global.newWord.inWord();
//  			checkLetter();
//  		}
//  		else {
//  			console.log("try again!")
//  		}
//  	 }

// }


global.userInput = []

global.userGuessWord = []

global.alreadyGuessed = []


function getInput() {

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

function checker() {
for (var j = 0; j < global.nums; j++) {

		if(userInput == global.wordPicked[j]) {
			console.log("correct");
			// console.log(userGuessWord)
			isInWord = true;
			getInput();
			}
		}
			
}


getInput();


// String.protoype.capitalize = function(){
// 	this.charAt(0).toUpperCase();
	
// 	this.toLowerCase();
// 	var stringArray = this.split('')
// 	stringArray[0] = stringArray.toUpperCase();
// 	stringArray.join("")
// 	console.log(this)
// }

