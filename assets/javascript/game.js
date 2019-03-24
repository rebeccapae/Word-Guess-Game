var kpopNames = ["exo", "blackpink", "2pm", "itzy", "bts", "seventeen", "bigbang"];
var guessedLetters;
var lettersRemaining;
var userWinCount;


function generateWord(){
    var rand = kpopNames[Math.floor(Math.random() * kpopNames.length)];
    return rand;
}

 //To run the function to generate a random word
 var newWord = generateWord();
 console.log(newWord);

  //To split the newWord into characters
  var wordCharacters = newWord.split("");
  console.log(wordCharacters);

  //To make each character blank with an underline
  for (i = 0; i < wordCharacters.length; i++) {
    var blankWord = wordCharacters.splice(i, 1, "_ ");
    console.log(blankWord);
  }
 
 //To make the blankWord show up in the HTML page
document.getElementById("current-word").innerHTML = wordCharacters.join(" ");
 

//When the user presses a key
document.onkeyup = function(event) {
    //To Store the user's guessed letter into a variable
    var userGuess = event.key.toLowerCase();

    //To see if the user's guessed letter matches a character in the wordCharacters

    for (i = 0; i < wordCharacters.length; i++) {
        if (userGuess === wordCharacters[i]) {
            document.getElementById("current-word").innerHTML = userGuess;
        }
    }
    

    //To add the User guessed letter to the guess Letters column



    //When user presses a key, a current word is shown. The user guess gets added to the "letters already guessed"
 


}

