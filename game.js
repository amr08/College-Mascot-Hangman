//Your game.js file will randomly select a word for the player.





	global.word = ["seminoles"];
	global.wordPicked = "";
    global.letters = [];
    
    global.wins = 0;
	global.losses = 0;
	global.guessesLeft = 5;
   


exports.wordSetUp = function() {

	wordPicked = word[Math.floor(Math.random() * 1)];
	letters = wordPicked.split("");

};
