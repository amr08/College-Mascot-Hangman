//constructor files

//should contain all of the methods wich will check the letters guess vs the random word selected

var game = require('./game.js');
var letter = require('./letter.js');


global.userInput = process.argv[2];

console.log(userInput)

 global.isInWord = false;

    for (var j = 0; j < global.nums; j++) {

		if(userInput == global.wordPicked[j]) {
 			isInWord = true;
 		}
 	}

console.log(isInWord)
 	
