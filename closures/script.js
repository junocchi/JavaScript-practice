"use strict";

function once() {
  let hasBeenRun = false;
  function inner() {
    if (hasBeenRun === false) {
      hasBeenRun === true;
      return "Congratulations, you won!";
    } else {
      return "You can't run me again.";
    }
  }
  return inner;
}

const oncifiedWinner = once();
oncifiedWinner(); // updates hasBeenRun to true
oncifiedWinner(); // Congratulations, you won!'
