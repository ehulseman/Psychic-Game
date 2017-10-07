// Creates an array that lists out all of the options the computer can choose from(A-Z).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and number of guesses the user has left. Wins and losses start at 0 and increase. Guesses starts at 10 and decreases.
var wins = 0;
var losses = 0;
var userGuesses = [];
var guessesLeft = 10;

// Computer randomly selects a choice from the array computerChoices.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("This is the computer's selection: " + computerGuess);


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    console.log("The user guessed " + event.key)

    //This is the logic that determines wins, losses and how many guesses the user has left. 
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 10;
        userGuesses = [];
        console.log("If statement works.");
    } else if (guessesLeft === 1) {
        losses++;
        guessesLeft = 10;
        userGuesses = [];
        console.log("Else if statement works.");
    } else { 
        userGuesses.push(userGuess);
        guessesLeft--;
        console.log("Else statement works.");
    }

    //This is where we are dynamically changing the HTML elements related to wins, losses, guesses left, and what the user guessed.
    document.getElementById("userWins").innerHTML = wins;
    document.getElementById("userLosses").innerHTML = losses;
    document.getElementById("userGuessesLeft").innerHTML = guessesLeft;
    document.getElementById("userGuesses").innerHTML = userGuesses;

}