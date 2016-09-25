//constructor files

//should conttrol whether or not a letter appears as "_" or as itself on -screen

var game = require('./game.js');



global.nums = letters.length


	

console.log(global.userInput)


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

	 	}

	}
	this.print = function () {
		console.log(this.holders)
		}

};
	


var newWord = new Placeholder([],nums)


// Placeholder.prototype.print = function() {
// 	console.log(this.holders)

// }

newWord.replace();
newWord.print();
newWord.inWord();


