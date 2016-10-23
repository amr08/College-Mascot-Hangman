
//Your game.js file will randomly select a word for the player.

  var Placeholder = require("./letter.js");

  global.word = ["seminoles", "gators", "fightingirish", "ducks", "longhorns"];
  global.wordPicked = "";
  global.letters = [];
  global.alreadyGuessed = [];
  global.holders = [];

  global.nums = 0;
  global.wins = 0;
  global.losses = 0;
  global.guessesLeft = 10;

//sets up the game - randomly selects word
  exports.wordSetUp = function() {

    wordPicked = word[Math.floor(Math.random() * 5)];
    letters = wordPicked.split("");

    nums = letters.length;
    guessesLeft = 10;
    alreadyGuessed = [];
    holders = [];

    var placeholder = new Placeholder([],nums);
    placeholder.replace();

    console.log("-------------------------------");
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("-------------------------------");
    console.log("Yay! New word!");

  };
     
    

