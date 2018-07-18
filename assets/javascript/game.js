var wins = 0;
var losses = 0;
var place;
var replaceArr = [];

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
  for (var i = 0; i < holdWord.length; i++) {
    replaceArr = replaceArr + holdWord[i].replace(holdWord[i], "_");
    document.querySelector("#random-word").innerHTML = replaceArr;
  }return replaceArr;
}
replace();



document.onkeyup = function(event) {
  var userGuess = event.key;
  
  //* Function to check the letter against the random word
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
  var check = check();
    
//* To determine find the matching index position in the replaced array and replace with the correct letter
    if (check === true) {
      for (var k = 0; k < replaceArr.length; k++) {
        if (replaceArr.indexOf(replaceArr[k]) === place) {
           console.log(replaceArr.indexOf(replaceArr[k]));
        }
      }
      /*function show() {
            for (var k = 0; k < replaceArr.length; k++) {
                if (replaceArr.indexOf(k) === place) {
                  var showA = replaceArr.indexOf(k);
                  console.log(showA);
                  document.querySelector("#random-word").innerHTML = showA;
                }
            } return showA; 
        }
        show();*/
    }
    if (check === false) {
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
