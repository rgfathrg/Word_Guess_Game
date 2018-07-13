var wins = 0;
var losses = 0;
var place;
var replaceArr = [];

var futbolWords = ["goal", "pitch", "cleats", "supporters", "keeper", "striker", "ball", "midfielder"];
var guessAttempts = [];

function compWord() {
    var compGuess = futbolWords[Math.floor(Math.random() * futbolWords.length)];
    return compGuess;
}

var holdWord = compWord();
var attemptsLeft = holdWord.length;

function replace() {
  for (var i = 0; i < holdWord.length; i++) {
    replaceArr = replaceArr + holdWord[i].replace(holdWord[i], "_") + " ";
    document.querySelector("#random-word").innerHTML = replaceArr;
  }return replaceArr;
}
replace();



document.onkeyup = function(event) {
  userGuess = event.key;
  
  function check() {
    for (var j = 0; j < holdWord.length; j++) {
      if (userGuess === holdWord[j]) {
        place = holdWord.indexOf(holdWord[j]);
        return true;
      }
      /*else {
        return false; 
      }*/
    }return false;
  }
    if (check() === true) {
        console.log(place);
    }
    if (check() === false) {
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
