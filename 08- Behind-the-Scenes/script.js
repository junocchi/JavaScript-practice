"use strict";
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // using 'var' to demonstrate that is can be accessed outside of this block
      var millennial = true;

      // Reassingning outer scope's variable
      output = "NEW OUTPUT";

      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    console.log(millennial);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = "Jonas";
calcAge(1991);

// Jonas, you are 46, born in 1991
// Oh, and you're a millennial, Jonas
// true
// NEW OUTPUT
