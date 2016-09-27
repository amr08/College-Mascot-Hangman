// //constructor files

// //should conttrol whether or not a letter appears as "_" or as itself on -screen


var word = require('./word.js');
var main = require('./main.js');



function Placeholder(holders, nums) {
	this.holders = holders;
	this.nums = nums;
	this.replace = function (){
        for(var i = 0; i <this.nums; i++) {
		global.holders.push("_")
		}
	}


};
	


global.newWord = new Placeholder([],nums)


newWord.replace();




