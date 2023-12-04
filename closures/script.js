"use strict";

// // not ideal once function
// function once() {
//   let hasBeenRun = false;
//   function inner() {
//     if (hasBeenRun === false) {
//       hasBeenRun === true;
//       return "Congratulations, you won!";
//     } else {
//       return "You can't run me again.";
//     }
//   }
//   return inner;
// }

// const onceifiedWinner = once();
// onceifiedWinner(); // updates hasBeenRun to true
// onceifiedWinner(); // Congratulations, you won!'

// the real once function
function once(func) {
  let hasBeenRun = false;
  function inner() {
    if (hasBeenRun === false) {
      hasBeenRun = true;
      const value = func();
      return value;
    } else {
      return "You can't run me again.";
    }
  }
  return inner;
}

function winner() {
  return "Congratulations, you won!";
}

const onceifiedWinner = once(winner);
onceifiedWinner();
onceifiedWinner();
