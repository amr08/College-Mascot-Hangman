




//Your game.js file will randomly select a word for the player.





	global.word = ["seminoles"];
	global.wordPicked = "";
    global.letters = [];
    global.alreadyGuessed = []
    global.holders = [];

    global.wins = 0;
	global.losses = 0;
	global.guessesLeft = 5;




exports.wordSetUp = function() {
	
    console.log("Wins: " + global.wins)
	console.log("Losses: " + global.losses)
	console.log("Yay! New word!")

	wordPicked = word[Math.floor(Math.random() * 1)];
	letters = wordPicked.split("");

	guessesLeft = 5;
	alreadyGuessed = []
	


};

