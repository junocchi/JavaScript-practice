function playGuessingGame(numToGuess, totalGuesses = 10) {
  let attempt = 1;

  let input = prompt("Enter a number between 1 and 100.");

  while (true) {
    if (input === "") {
      input = prompt("Please enter a number.");
    }
    if (isNaN(input)) {
      input = prompt("Please enter a number.");
    }
    if (input == numToGuess) {
      return attempt;
    } 
    if (attempt >= totalGuesses || input == null) {
      return 0;
    }
    if (input > numToGuess) {
      input = prompt(input + " is too large. Guess a smaller number.");
    } else {
      input = prompt(input + " is too small. Guess a larger number.");
    }
    attempt++;
  }
}

//playGuessingGame(20, 3); 
//30, 10, "hello", "twenty", 20
//output: 0 and it should be 3
