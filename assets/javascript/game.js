var kpopNames = ["EXO", "BLACKPINK", "SISTAR", "ITZY", "BTS", "SEVENTEEN", "BIGBANG", "PSY", "MAMAMOO"];
var guessedLetters = [];
var userWinCount = 0;
var blankWord = [];
var wordCharacters = []; 
var newWord = []; 

// Function to generate the word that needs to be guessed by the user
function generateWord(){
  var rand = kpopNames[Math.floor(Math.random() * kpopNames.length)];
  newWord = rand;
  console.log(newWord);
}

//To run the function to generate a random word
  generateWord();
  

  //To create a function that splits the newWord into characters
  function makeCharacters() {
    wordCharacters = newWord.split("");
  console.log(wordCharacters);
  };

  //To run the function makeCharacters
  makeCharacters();

  //To make a new array containing blanks with an underline for each character and show up in the HTML page
  function createBlanks(){
    for (var i = 0; i < wordCharacters.length; i++) {
      blankWord.push("_ ");
      document.getElementById("current-word").innerHTML = blankWord.join(" ");
      console.log(blankWord);
    }
  }
  //To run the function to create the blank array and show up on the HTML page
   createBlanks();

// Number of Guesses will start with the length of the wordCharacter times 2
var guessesRemaining = wordCharacters.length * 2;
document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
console.log(guessesRemaining);

// Function to reset the game once the user reaches 0 guesses remaining or the entire word guessed.
function reset () {
  guessedLetters = [];
  generateWord();
  makeCharacters();
  blankWord = [];
  createBlanks();
  guessesRemaining = newWord.length * 2;
  document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
}

//When the user presses a key
document.onkeyup = function(event) {
    //To Store the user's guessed letter into a variable
    var userGuess = event.key.toUpperCase();
    console.log(userGuess);

    //To check whether the userGuess is already in the guessedLetters array, and if not, add to the Letters Already Guessed Column.
  
    var checkedGuessedLetters = guessedLetters.includes(userGuess, 0);
    if(checkedGuessedLetters == false) {
      guessedLetters.push(userGuess);
      document.getElementById("lettersGuessed").innerHTML = guessedLetters.join(" ");
    }
    console.log(guessedLetters);

    // If the user's guessed letter is included in wordCharacters, replace the blank underscore with the letter. 
    for (var i = 0; i < blankWord.length; i++) {
      
      //To see if the user's guessed letter matches a character in the wordCharacters
      var includesLetter = wordCharacters.includes(userGuess, 0);

      if (includesLetter == true) {
    
        var guessedIndex = wordCharacters.indexOf(userGuess);
        blankWord.splice(guessedIndex, 1, userGuess);
        document.getElementById("current-word").innerHTML = blankWord.join(" ");
        wordCharacters.splice(guessedIndex, 1, "_");
        
        console.log(guessedIndex);
        console.log(blankWord);
        console.log(wordCharacters);
      }
    }

    //To reduce the number of guesses remaining per userGuess, once the User reaches zero guesses, reset the game.
    guessesRemaining--;

    if (guessesRemaining < 0) {
      console.log(guessesRemaining);
      reset ();
    }
    else {
      document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
    }

    //If the user guesses all letters in blankWord, then reset the game.
    for (var i = 0; i < blankWord.length; i++) {
      if (blankWord.indexOf("_ ") == -1) {
        userWinCount++;
        document.getElementById("wins").innerHTML = "Number of Wins: " + userWinCount;
        console.log(userWinCount);
        reset();
      }
    }
  };
