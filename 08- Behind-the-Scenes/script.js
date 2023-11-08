"use strict";
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       // using 'var' to demonstrate that is can be accessed outside of this block
//       var millennial = true;

//       // Reassingning outer scope's variable
//       output = "NEW OUTPUT";

//       const str = `Oh, and you're a millennial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }

//     console.log(millennial);
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = "Jonas";
// calcAge(1991);

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

//console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // TDZ error: Cannot access 'addExpr' before initialization
// console.log(addArrow(2, 3)); // TDZ error: Cannot access 'addArrow' before initialization

// // function declaration
// function addDecl(a, b) {
//   return a + b;
// }

// // function expression
// const addExpr = function (a, b) {
//   return a + b;
// };

// // arrow function
// const addArrow = (a, b) => a + b;

console.log("-------Hoisting and TDZ with var (undefined)-------");

// if there's no numProducts, execute deleteShoppingCart
if (!numProducts) deleteShoppingCart(); // because 'numProducts' will be initialised with 'var', at this point Hoisting will happen and it returns 'undefined', meaning that is a falsy. When you negate a falsy value you will get true, so it will execute the function

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

console.log("------ global window object ----------");

var juli = 1;
let lila = 2;
const mari = 3;

// test if a variable is a property of the global window property

console.log(juli === window.juli); // true
console.log(lila === window.lila); // false
console.log(mari === window.mari); // false

console.log("------ the 'this' keyword ----------");

console.log(this); // 'this' is equal the Global window object

const hugo = {
  year: 1991,
  calcAge: function () {
    console.log(this); // case 1. `this` will be the object that is calling the method (`hugo`). It returns {year: 1991, calcAge: ƒ}
    console.log(2037 - this.year); // 46
  },
};
hugo.calcAge();
// returns
// {year: 1991, calcAge: ƒ}
// 46

const matilda = {
  year: 2017,
};

matilda.calcAge = hugo.calcAge; // method borrowing (matilda copied `.calAge` from Hugo's object)
matilda.calcAge();
// returns
// {year: 2017, calcAge: ƒ}
// 20

//const f = hugo.calcAge;
//f();
// Cannot read properties of undefined (reading 'year')

console.log("----- 'this' undefined -------");
const calculateAge = function (birthYear) {
  console.log(2037 - birthYear); // 46
  console.log(this); // case 2. undefined
};
calculateAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear); // 57
  console.log(this); // case 3. 'this' is equal the Global window object, because Arrow function doesn't have their own `this`, so it gets the parent's one (in this case, the global scope)
};
calcAgeArrow(1980);

console.log("----- 'this' and Arrow functions as methods -------");
// const alex = {
//   firstName: "Alex",
//   year: 1991,
//   calculateAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// alex.greet();
// console.log(this.firstName); // Hey undefined

console.log("----- 'this' and Function inside methods -------");

// const alex = {
//   firstName: "Alex",
//   year: 1991,
//   calculateAge: function () {
//     console.log(2037 - this.year);

//     const isMillenial = function () {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial(); // regular function calling
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// alex.greet();
// alex.calculateAge();
/* 
Uncaught TypeError: Cannot read properties of undefined (reading 'year')
at isMillenial (script.js:172:24)
at Object.calculateAge (script.js:174:5)
at script.js:181:6
*/

console.log(
  "----- 'this' and Function inside methods with `self` or `that` -------",
);

// const alex = {
//   firstName: "Alex",
//   year: 1991,
//   calculateAge: function () {
//     console.log(2037 - this.year);

//     const self = this; // this is still alex
//     const isMillenial = function () {
//       console.log(self);
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };
//     isMillenial(); // regular function calling
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// alex.greet();
// alex.calculateAge();
/*
Hey undefined
script.js:195 46
script.js:199 {firstName: 'Alex', year: 1991, calculateAge: ƒ, greet: ƒ}
script.js:200 true
*/

console.log("----- 'this' and arrow function as a solution -------");

const alex = {
  firstName: "Alex",
  year: 1991,
  calculateAge: function () {
    console.log(2037 - this.year);

    const isMillenial = () => {
      console.log(this); // arrow function doesn't have this keyword, so it refers to its parent's scope, in this case, alex.
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

alex.greet();
alex.calculateAge();
/*
Hey undefined
script.js:225 46
script.js:228 {firstName: 'Alex', year: 1991, calculateAge: ƒ, greet: ƒ}
script.js:229 true
*/

console.log("----- 'arguments' keyword -------");

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 7, 9);
/*
Arguments(2) [2, 5, callee: (...), Symbol(Symbol.iterator): ƒ]
Arguments(4) [2, 5, 7, 9, callee: (...), Symbol(Symbol.iterator): ƒ]
 */

console.log("--------- Memory storage: Primitives vs Objects ----------");

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const myInfo = {
  name: "Jonas",
  age: 30,
};

const friendsInfo = myInfo;
friendsInfo.age = 27;
console.log("FriendsInfo:", friendsInfo); // FriendsInfo: {name: 'Jonas', age: 27}
console.log("MyInfo:", myInfo); // MyInfo: {name: 'Jonas', age: 27}
