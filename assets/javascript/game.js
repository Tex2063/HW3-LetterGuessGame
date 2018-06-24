
    //WHATEVER LINKS TO THE JQUERY DATABASE THAT I CAN'T FIND.

    // Array that lists all options.
    var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    var wins = 0;
    var losses = 0;
    var guessRemain = 10;
    var guessCurrent = "";    
    var lettersGuessed = [];
        

    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
        //SOMETHING IS NOT REGISTERING THE CORRECT GUESS
        
    // function for remaining guesses minus letter guessed
    // 10 - lettersGuessed.length

    // ENSURES INPUT LETTERS ARE LOWERCASE
    //    .toLowercase

    // Function runs whenever user presses key.

    document.onkeyup = function(event) {
        var guessCurrent = event.key;
      
      if (lettersGuessed.indexOf(guessCurrent) < 0 && choices.indexOf(guessCurrent) >= 0) {
          lettersGuessed[lettersGuessed.length]=guessCurrent;
      guessRemain--;
      
      }
      
      if (computerLetter == guessCurrent) {
          wins++;
          // Guesses++;
          lettersGuessed = [];
          computerLetter = choices[Math.floor(Math.random() * choices.length)];
          document.getElementById("Wins").textContent = + wins;
      }
      
      if (guessRemain == 0) {
          losses++;
          guessRemain = 10;
          lettersGuessed = [];
          computerLetter = choices[Math.floor(Math.random() * choices.length)];
          document.getElementById("Losses").textContent = + losses;
      }
      
      
      document.getElementById("Guesses").textContent = + guessRemain;
      document.getElementById("lettersGuessed").textContent = lettersGuessed;
    }
        console.log(computerChoice)


    /* document.onkeyup = function(event) {

        // Determines which key was pressed.
       var Choices = event.key;

        if ( lettersGuessed.indexOf(guessCurrent) < 0 && choices.indexOf(choices) >= 0) { guessCurrent})
       
        if (
            playerChoices === computerChoice){
            wins++;
        }
        
        else {
            guessRemain--;
        }

        if (
            guessRemain === 0){
                losses++
        }
        

        // SOMETHING THAT SETS NUMBER OF GUESSES ALLOWED

        // SOMETHING THAT PRINTS OUT THE CURRENT GUESSES

        // SOMETHING THAT PUTS WHATEVER WAS GUESSED INTO THE LETTERS GUESSED ARRAY

        // SOMETHING THAT ENDS THE GAME AFTER 10 GUESSES ARE MADE OR IF CORRECT LETTER IS GUESSED. 
        */

   //  };

