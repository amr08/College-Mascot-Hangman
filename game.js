//Your game.js file will randomly select a word for the player.





	global.word = ["seminoles"];
	global.wordPicked = "";
    global.letters = [];
   


exports.wordSetUp = function() {

	wordPicked = word[Math.floor(Math.random() * 1)];
	letters = wordPicked.split("");

};
