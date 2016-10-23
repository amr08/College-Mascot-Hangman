

// //should contain all of the methods wich will check the letters guess vs the random word selected
  
  var inquirer = require("inquirer");
  var game = require('./game.js');
  var main = require("./main.js");
  
  game.wordSetUp();

  global.userInput = [];
  global.userGuessWord = [];
  global.isInWord = [];
      
//gets user input

  global.getInput = function() {

    inquirer.prompt([

      {
        type: "input",
        message: "Guess a letter",
        name: "letter"
      }

      ]).then(function (user) {

        userInput = user.letter
        userGuessWord.push(user.letter);
        checker();

    });

  };

//checks to see if userguess is in word- if so returns true

  var checker = function() {

    isInWord = false;

      for (var j = 0; j < nums; j++) {

        if(userInput == wordPicked[j]) {
          isInWord = true; 
        }

      }

    inWord(); 
        
  };




