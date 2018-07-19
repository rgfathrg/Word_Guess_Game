var wins = 0;
var losses = 0;
var place;
var replaceArr = [];
var guessCorrect = false;

var futbolWords = ["goal", "pitch", "cleats", "supporters", "keeper", "striker", "ball", "midfielder"];
var guessAttempts = [];

//* Function to randomly select a word from array
function compWord() {
    var compGuess = futbolWords[Math.floor(Math.random() * futbolWords.length)];
    return compGuess;
}

var holdWord = compWord();
var attemptsLeft = holdWord.length;

//* This is to replace each letter of the random word with "_"
function replace() {
  replaceArr = Array(holdWord.length);
  replaceArr.fill("_");
 
  document.querySelector("#random-word").innerHTML = replaceArr.join("");
  return replaceArr;
}
replace();



document.onkeyup = function(event) {
  var userGuess = event.key;
  
  //* Function to check the letter against the random word
  function check() {
    guessCorrect = false;
    for (var j = 0; j < holdWord.length; j++) {
      if (userGuess === holdWord[j]) {
        //place = holdWord.indexOf(holdWord[j], j);
        replaceArr[j] = holdWord[j];
        document.querySelector("#random-word").innerHTML = replaceArr.join("");
        guessCorrect = true;
      }
      
    }

    if (replaceArr.indexOf("_") < 0) {
      return true;
    }

   return false; 
 } 
  var won = check();
    

    if (won === true) {
      wins++;
      holdWord = compWord();
      guessAttempts = [];
      attemptsLeft = holdWord.length;
      replaceArr = [];
      replace();
    }
    if (!guessCorrect) {
          guessAttempts = guessAttempts + event.key + ",";
          attemptsLeft = attemptsLeft - 1;
    }

    if (attemptsLeft === 0) {
        holdWord = compWord();
        losses = losses + 1;
        guessAttempts = [];
        attemptsLeft = holdWord.length;
        replaceArr = [];
        replace();
    }
    
      var html = 
      "<p>Letters Guessed:  " + guessAttempts + "</p>" +
      "<p>Guesses Left: " + attemptsLeft + "</p>" +
      "<p>Wins: " + wins + "</p>" +
      "<p>Losses: " + losses + "</p>";

      document.querySelector("#game").innerHTML = html;

};
