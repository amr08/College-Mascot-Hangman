//constructor files

//should contain all of the methods wich will check the letters guess vs the random word selected

var game = require('./game.js');

game.wordSetUp();


global.userInput = process.argv[2];
global.nums = letters.length;
global.isInWord = false;




exports.checkLetter = function() {


    for (var j = 0; j < global.nums; j++) {

		if(userInput == global.wordPicked[j]) {
 			isInWord = true;
 			console.log("working")
 		}
 	}

 };


