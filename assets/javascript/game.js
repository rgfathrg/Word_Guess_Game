var wins;
var losses;

var futbolWords = ["goal", "pitch", "cleats", "supporters", "keeper", "striker", "ball", "midfielder"];
var guessAttempts = [];

function compWord() {
    var compGuess = futbolWords[Math.floor(Math.random() * futbolWords.length)];
    return compGuess;
}

var holdWord = compWord();

