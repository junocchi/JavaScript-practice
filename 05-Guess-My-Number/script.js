"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🎉 Correct Number!";

// document.querySelector(".number").textContent = "❓";
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 13;

const secretNumber = Math.trunc(Math.random() * 21);

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
  }
});

// if we click the button without adding a number (without a guess), it will return 0 - and remember that 0 is falsy. We then write an 'if' statement that will execute the block whenever this whole condition here is true. If true that there's no guess, the textContent of message will change.

// LEC - watched until min 6.47, video 74
