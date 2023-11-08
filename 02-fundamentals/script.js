"use strict";

function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// 5 0
// Juice with 5 apples and 0 oranges.

const orangeJuice = fruitProcessor(0, 8);
console.log(orangeJuice);
// 0 8
// Juice with 0 apples and 8 oranges.

const appleOrangeJuice = fruitProcessor(3, 4);
console.log(appleOrangeJuice);
// 3 4
// Juice with 3 apples and 4 oranges.

console.log("------------------------");

// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
// 46 46

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
// 46

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   console.log(age);
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1984, "Hugo"));
// // 32
// // Jonas retires in 33 years
// // 39
// // Hugo retires in 26 years

console.log("------------------------");
const cutFruitPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor2 = function (apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};
console.log(fruitProcessor2(2, 3));
// Juice with 8 pieces of apple and 12 pieces of orange.

console.log("------------------------");

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1970, "Hugo"));

console.log("------------------------");
// Challenge#2
/* Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log(`No team wins...`);
//   }
// };
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(500, 400);
// 60 28
// Dolphins win(60 vs. 28)
// No team wins...

const calcAverage1 = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = (score1, score2, score3) =>
  calcAverage1(score1, score2, score3);
const scoreKoalas = (score1, score2, score3) =>
  calcAverage1(score1, score2, score3);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins > avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
};

const data1 = checkWinner(scoreDolphins(44, 23, 71), scoreKoalas(65, 54, 49));
const data2 = checkWinner(scoreDolphins(85, 54, 41), scoreKoalas(23, 34, 27));
// No team wins...
// Dolphins win (60 vs. 28)

const friendsSchool = ["Michael", "Steven", "Peter"];
const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friendsSchool];
console.log(jonas);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

const allYears = [1990, 1967, 2002, 2010, 2018];

const ageY0 = calcAge(allYears[0]);
const ageY1 = calcAge(allYears[1]);
const ageY4 = calcAge(allYears[allYears.length - 1]);

console.log(ageY0, ageY1, ageY4);

const ages = [
  calcAge(allYears[0]),
  calcAge(allYears[1]),
  calcAge(allYears[allYears.length - 1]),
];
console.log(ages);

console.log("--------------------");
// add elements to the array with push (LAST) and unshift (FIRST)
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Juli");

console.log(friends); // (4) ['Michael', 'Steven', 'Peter', 'Juli']
console.log(newLength); // 4

friends.unshift("Lila");
console.log(friends); // (5) ['Lila', 'Michael', 'Steven', 'Peter', 'Juli']

// remove the LAST element from the array with pop
friends.pop(); // removed Juli
const popped = friends.pop(); // removed Peter
console.log(friends); // (3)) ['Lila', 'Michael', 'Steven']
console.log(popped); // Peter

// remove the FIRST element from the array with shift
const shifted = friends.shift(); // removed Lila
console.log(friends); // (2)) ['Michael', 'Steven']
console.log(shifted); // Lila

// indexOf -> to know the position of an element in the array
console.log(friends.indexOf("Steven")); // 1
console.log(friends.indexOf("Lucca")); // -1

// 🚨 If we try to access an element that is not in the array, `indexOf` will return `-1`.

console.log(friends.includes("Steven")); // true
console.log(friends.includes("Lucca")); // false

friends.push(23); // friends = ['Michael', 'Steven', 23]
console.log(friends.includes("Steven")); // true
console.log(friends.includes("Lucca")); // false
console.log(friends.includes("23")); // false because "23" is a string, not a number

if (friends.includes("Steven")) {
  console.log("Steven is my friend!");
}

console.log("-------------------");

const calcRestaurantTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const allBills = [125, 555, 44];
const allTips = [
  calcRestaurantTip(allBills[0]),
  calcRestaurantTip(allBills[1]),
  calcRestaurantTip(allBills[allBills.length - 1]),
];

console.log(allTips);

const total = [];

const totalBill0 = allTips[0] + allBills[0];
const totalBill1 = allTips[1] + allBills[1];
const totalBill2 = allTips[2] + allBills[2];
total.push(totalBill0, totalBill1, totalBill2);
console.log(total);

console.log("-------------------");
// object literal syntax

const rose = {
  firstName: "Rose",
  lastName: "Lee",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Raul", "Maria", "Victor"],
};

console.log(rose);
/*{firstName: 'Rose', lastName: 'Lee', age: 46, job: 'teacher', friends: Array(3)}
age: 46
firstName: "Rose"
friends: (3) ['Raul', 'Maria', 'Victor']
job: "teacher"
lastName: "Lee"
[[Prototype]]: Object*/

console.log(rose.lastName);
console.log(rose["lastName"]);

const nameKey = "Name";
console.log(rose["first" + nameKey]);
console.log(rose["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Rose? Choose between firstName, lastName, age, job, and friends",
// );

// if (rose[interestedIn]) {
//   console.log(rose[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends",
//   );
// }
// input 'job', returns: teacher
// input 'location', returns: Wrong request! Choose between firstName, lastName, age, job, and friends

rose.location = "Cambridge";
console.log(rose.location); // Cambridge

rose["twitter"] = "@roselee";
console.log(rose["twitter"]); // @roselee

console.log(
  `${rose.firstName} has ${rose.friends.length} friends, and her best friend is ${rose.friends[0]}`,
);
// Rose has 3 friends, and her best friend is Raul.

console.log("-------------------");

// const joao = {
//   firstName: "Joao",
//   lastName: "Lee",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Raul", "Maria", "Victor"],
//   calcAge4: function () {
//     return 2037 - this.birthYear;
//   },
// };

// console.log(joao.calcAge4()); // 46
//console.log(joao["calcAge4"](1991)); // 46

// Exercise: create a method getSummary that returns a summary of Joao' data displaying "Joao is a 46-year old teacher, and he has a/no driver's license"

const joao = {
  firstName: "Joao",
  lastName: "Lee",
  birthYear: 1991,
  job: "teacher",
  friends: ["Raul", "Maria", "Victor"],
  hasDriversLicense: true,
  calcAge4: function () {
    this.age = 2037 - this.birthYear;
    return this.age; // its a good practice to return a method
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge4()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(joao.calcAge4()); // 46
console.log(joao.getSummary());

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.bmi = this.mass / (this.height * this.height));
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.bmi = this.mass / (this.height * this.height));
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`,
  );
} else if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`,
  );
}

console.log("----------- FOR LOOP ----------");

const julio = [
  "Julio",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// we start the counter at 0 because this is the index of the element we want to start with
// the condition is: keep looping while 'i' is less than the total number of elements of the array. 'julio.length' at the moment is 5
// update the counter by 1at the end of the loop
// counter ; condition (loop until?); update counter
const types = [];
for (let i = 0; i < julio.length; i++) {
  console.log(julio[i], typeof julio[i]);
  types.push(typeof julio[i]);
}
console.log(types);
// Julio string
// Schmedtmann string
// 46 'number'
// teacher string
// (3) ['Michael', 'Peter', 'Steven'] 'object'
// true 'boolean'
// (6) ['string', 'string', 'number', 'string', 'object', 'boolean']

console.log("----------- LOOP TO ADD TO ARRAY ----------");

const years = [1991, 2007, 1969, 2020, 1988];
const ages3 = [];

for (let i = 0; i < years.length; i++) {
  ages3.push(2023 - years[i]);
}

console.log(years, ages3);

console.log("---------ONLY STRINGS ------------");

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("--------- ONLY NUMBERS ------------");

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
// Jonas string
// Schmedtmann string

console.log("--------- LOOP BACKWARDS ------------");
const lila = ["Lila", "Sissa", 2023 - 1991, "singer", ["Lala", "Rory", "Paul"]];

// 'array.length - 1' will be the index number of the last element in the array, so in this case the loop will start at the element index 4
for (let i = lila.length - 1; i >= 0; i--) {
  console.log(lila[i]);
}
// (3) ['Lala', 'Rory', 'Paul']
// singer
// 32
// Sissa
// Lila

console.log("--------- LOOPS IN LOOPS ------------");

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`💪 Gym exercise week ${exercise}:`);

  for (let rep = 0; rep < 8; rep++) {
    console.log(`Week ${exercise} - Lifting weight repetition ${rep} 🏋️`);
  }
}
//💪 Gym exercise week 1:
// Week 1 - Lifting weight repetition 0 🏋️
// Week 1 - Lifting weight repetition 1 🏋️
// Week 1 - Lifting weight repetition 2 🏋️
// Week 1 - Lifting weight repetition 3 🏋️
// Week 1 - Lifting weight repetition 4 🏋️
// Week 1 - Lifting weight repetition 5 🏋️
// Week 1 - Lifting weight repetition 6 🏋️
// Week 1 - Lifting weight repetition 7 🏋️
// 💪 Gym exercise week 2:
// Week 2 - Lifting weight repetition 0 🏋️
// Week 2 - Lifting weight repetition 1 🏋️
// Week 2 - Lifting weight repetition 2 🏋️
// Week 2 - Lifting weight repetition 3 🏋️
// Week 2 - Lifting weight repetition 4 🏋️
// Week 2 - Lifting weight repetition 5 🏋️
// Week 2 - Lifting weight repetition 6 🏋️
// Week 2 - Lifting weight repetition 7 🏋️
// 💪 Gym exercise week 3:
// Week 3 - Lifting weight repetition 0 🏋️
// Week 3 - Lifting weight repetition 1 🏋️
// Week 3 - Lifting weight repetition 2 🏋️
// Week 3 - Lifting weight repetition 3 🏋️
// Week 3 - Lifting weight repetition 4 🏋️
// Week 3 - Lifting weight repetition 5 🏋️
// Week 3 - Lifting weight repetition 6 🏋️
// Week 3 - Lifting weight repetition 7 🏋️

console.log("--------- WHILE LOOP with counter incrementation ------------");

// for loop
for (let rep = 1; rep <= 3; rep++) {
  console.log(`FOR LOOP: Lifting weights 🏋️ repetition ${rep}`);
}

// while loop
let rep = 1;
while (rep <= 3) {
  console.log(`WHILE LOOP: Lifting weights 🏋️ repetition ${rep}`);
  rep++;
}

// FOR LOOP: Lifting weights 🏋️ repetition 1
// FOR LOOP: Lifting weights 🏋️ repetition 2
// FOR LOOP: Lifting weights 🏋️ repetition 3
// WHILE LOOP: Lifting weights 🏋️ repetition 1
// WHILE LOOP: Lifting weights 🏋️ repetition 2
// WHILE LOOP: Lifting weights 🏋️ repetition 3
console.log("--------- WHILE LOOP without a counter ------------");

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
// You rolled a 3
// You rolled a 1
// You rolled a 5
// You rolled a 1
// You rolled a 5
// Loop is about to end...

console.log("---------- Challenge #4 --------------");
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
  console.log(
    `For bill ${bills[i]} + tips ${tips[i]}, the total is ${totals[i]}`,
  );
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]; // or sum += arr[i];
  }
  return sum / arr.length;
};
console.log(`The average total is ${calcAverage(totals)}`);

// For bill 22 + tips 4.4, the total is 26.4
// For bill 295 + tips 44.25, the total is 339.25
// For bill 176 + tips 26.4, the total is 202.4
// For bill 440 + tips 88, the total is 528
// For bill 37 + tips 7.4, the total is 44.4
// For bill 105 + tips 15.75, the total is 120.75
// For bill 10 + tips 2, the total is 12
// For bill 1100 + tips 220, the total is 1320
// For bill 86 + tips 12.9, the total is 98.9
// For bill 52 + tips 7.8, the total is 59.8
// The average total is 275.19

console.log("---------- For Loop exercise --------------");

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}
