function playGuessingGame(numToGuess, totalGuesses = 10) {

  let attempt = 0

  let guess = prompt("Enter a number between 1 and 100.");

  attempt++

  if (guess == numToGuess) {
    return attempt
  } 
}


// numToGuess < guess return 
// numToGuess > guess return 

// guess > 3 return 3
// != guess > 10 return 0