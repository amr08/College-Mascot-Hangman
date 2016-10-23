

// //main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.

  var word = require("./word.js");
  var game = require("./game.js");

//if the letter is in word switches out placeholders "_" for actual letter
  global.inWord = function() {

    if(isInWord) {

      for(var k = 0; k < nums; k++) {

        if (wordPicked[k] == userInput) {
            holders[k] = userInput;
        }
      }

    } else  {
        guessesLeft--;
        console.log("Your Guesses Left " + guessesLeft);
        alreadyGuessed.push(userInput);
        console.log("letters already guessed: " + alreadyGuessed);
    }

    rounds();
    console.log(holders);
    getInput(); 
    
  }

//keeps track of guesse and right answers.  Ends and sends game back to game.js
  var rounds = function() {

    if (letters.toString() == holders.toString()) {
      console.log(holders);
      wins++;
      console.log("-------------------------------");
      console.log("Answer: '" + wordPicked + "', Nice job!");
      game.wordSetUp();

    } else if (global.guessesLeft===0) {
        console.log("-------------------------------");
        console.log("Aww, try again...");
        console.log("-------------------------------");
        losses++;
        game.wordSetUp();
    }
  };

  inWord();
