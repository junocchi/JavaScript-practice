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

console.log("----------- Hoisting and TDZ ------------");

const myName = "Jonas";

if (myName === "Jonas") {
  //console.log(`Jonas is a ${job}`); // 'job' is in Temporal Dead Zone and cannot be accessed yet. TDZ error: Cannot access 'job' before initialization
  const myAge = 2037 - 1989;
  console.log(myAge);
  const job = "teacher";
  //console.log(x); // error: 'x' is not defined
}

console.log("-------Hoisting and TDZ with variables-------");

console.log(me); // as 'me' uses 'var', Hoisting happens and returns 'undefined'
//console.log(job); // TDZ error: Cannot access 'job' before initialization
//console.log(year); // TDZ error: Cannot access 'year' before initialization

var me = "Jonas";
let job = "teacher";
const year = 1991;

console.log("-------Hoisting and TDZ with functions-------");

console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // TDZ error: Cannot access 'addExpr' before initialization
// console.log(addArrow(2, 3)); // TDZ error: Cannot access 'addArrow' before initialization

// function declaration
function addDecl(a, b) {
  return a + b;
}

// function expression
const addExpr = function (a, b) {
  return a + b;
};

// arrow function
const addArrow = (a, b) => a + b;

console.log("-------Hoisting and TDZ with var (undefined)-------");

// if there's no numProducts, execute deleteShoppingCart
if (!numProducts) deleteShoppingCart(); // because 'numProducts' will be initialised with 'var', at this point Hoisting will happen and it returns 'undefined', meaning that is a falsy. When you negate a falsy value you will get true, so it will execute the function

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

console.log("------global window object ----------");

var juli = 1;
let lila = 2;
const mari = 3;

// test if a variable is a property of the global window property

console.log(juli === window.juli); // true
console.log(lila === window.lila); // false
console.log(mari === window.mari); // false
