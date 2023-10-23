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
