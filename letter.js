//constructor files

//should conttrol whether or not a letter appears as "_" or as itself on -screen


var word = require('./word.js');






function Placeholder(holders, nums) {
	this.holders = holders;
	this.nums = nums;
	this.replace = function (){
        for(var i = 0; i <this.nums; i++) {
		this.holders.push("_")
		}
	}
	this.inWord = function() {
  
		if(global.isInWord) {
	 		
	 		 for(var k = 0; k < nums; k++) {

	             if (global.wordPicked[k] == global.userInput) {

	                  this.holders[k] = global.userInput;
	                  
	                  this.print();

	                }

	         }

	    }  else {
	            global.guessesLeft--;
	            console.log("Your Guesses Left " + guessesLeft)
	         	alreadyGuessed.push(global.userInput)
	          	console.log("Letters already guessed letter(s) " + alreadyGuessed)

	        }

	     getInput();
	             
    }

	this.print = function () {
		console.log(this.holders)
		}

};
	



global.newWord = new Placeholder([],nums)

// main.rounds();
global.newWord.replace();

getInput();

