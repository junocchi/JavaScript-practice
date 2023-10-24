// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

// Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

// JS - Fundamentals - Part 1

// let js = "amazing";
// if (js === "amazing") alert("JavaScript is fun!");

console.log(40 + 10 + 23 - 10);

console.log("Jonas");
let firstName = "Ju";

let country = "UK";
let continent = "Europe";
let population = "67 million";

console.log(country + ", " + continent + ", " + population);

let jsIsFun = true;
console.log(jsIsFun);

console.log(typeof true);
console.log(typeof jsIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

jsIsFun = "JS is fun!";
console.log(typeof jsIsFun);

// type undefined
let year;
console.log(year); //undefined
console.log(typeof year); //undefined

year = 1991;
console.log(typeof year);

//type null
let picture = null;
console.log(picture); //null
console.log(typeof picture); //object

//const
const birthYear = 1991;

const now = 2023;
const ageMari = now - 1995;
const ageLila = now - 1987;
console.log(ageMari, ageLila);

//2 to the power of 3 = 2 * 2 * 2
console.log(ageMari * 2, ageLila / 10, 2 ** 3);

//Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1
console.log(x); // 99

//Comparison operators
console.log(ageLila > ageMari); // true

const isFullAge = ageMari >= 18;
console.log(isFullAge); // true
console.log(now - 1995 > now - 1987); // false

console.log(ageMari, ageLila);
console.log(now - 1995 > now - 1987); // false

const averageAge = (ageLila + ageMari) / 2;
console.log(averageAge);

console.log("----------------");

populationUK = 67000000;
const splitPopulation = populationUK / 2;
console.log(splitPopulation);

populationUK++;
console.log(populationUK);

const populationFinland = 6000000;
let hasMorePeople = populationUK > populationFinland;
console.log(hasMorePeople);

const populationOfSomeCountry = 33000000;
hasMorePeople = populationUK > populationOfSomeCountry;
console.log(hasMorePeople);

const description =
  "The " +
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " people speak English";
console.log(description);

console.log("----------------");
// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / heightJohn ** 2; //the same as the above, but using power of
// const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

const resultBMI = `Mark's BMI is ${BMIMark} and John's BMI is ${BMIJohn}.`;
console.log(resultBMI);

const resultBMIMultiLine = `Mark's BMI is ${BMIMark} 
and
John's BMI is ${BMIJohn}.`;

console.log(resultBMIMultiLine);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

console.log("----------------");

const age = 19;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years 😅`);
}

console.log("----------------");

const inputYear = "1991";
console.log(Number(inputYear)); //display the number 1991 (here we converted the inputYear type to number)
console.log(inputYear + 18); //display the string 199118 (here the type of inputNumber is still a string, so its value will be concatenated to the number 18)
console.log(Number(inputYear) + 18); //display the number 2009 (here we converted the type to number and then add its value to 18 to perform an addition)

console.log(String(23)); //display 23 (in white, which means its type is a string)

console.log("I am " + 23 + " years old.");

console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("50" / "2");

console.log("----------------");

console.log(Boolean(0)); // false (0 is a falsy value)
console.log(Boolean(undefined)); // false (undefined is a falsy value)
console.log(Boolean("Jonas")); // true (a string with content is a truphy value)
console.log(Boolean({})); // true (an empty object is a truphy value)
console.log("----------------");

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}
// You should get a job!

// const ageNum = "18";
// if (ageNum === 18) console.log("You just became an adult :D");

// console.log("----------------");

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is a cool number!");
// } else {
//   console.log("The number is neither 23 nor 7.");
// }

// using !==
// if (favourite !== 23) console.log("Why not 23?");
console.log("----------------");

const hasDriversLicense = true;
const hasGoodVision = true;

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("someone else should drive...");
}

console.log("----------------");
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}

if (scoreDolphins > scoreKoalas && scoreDolphins > 100) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas > 100) {
  console.log("Koalas win the trophy");
} else if (
  scoreKoalas === scoreDolphins &&
  (scoreKoalas && scoreDolphins) >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log("No team wins the trophy.");
}

const day = "wednesday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Go home");
    break;
  case "wednesday":
    console.log("Go to school");
    break;
  case "tuesday":
    console.log("Go to work");
    break;
  case "tuesday":
    console.log("Go shopping");
    break;
  default:
    console.log("Not a valid day!");
}
console.log("----------------");

const age2 = 23;

let drink;
if (age2 >= 18) {
  drink = "wine 🍷";
} else {
  drink = "water 💧";
}
console.log(drink);

const drink2 = age2 >= 18 ? "wine 🍷" : "water 💧";
console.log(drink2);

console.log(`I like to drink ${age2 >= 18 ? "wine 🍷" : "water 💧"}`);
console.log("----------------");

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${
    bill + tip
  }.`,
);
