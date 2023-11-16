"use strict";

// async function f() {
//   return "Hello world";
// }
// const var1 = f();
// var1;
// // It returns a promise
// // Promise {<fulfilled>: 'Hello world'}
// // [[Prototype]]: Promise
// // [[PromiseState]]: "fulfilled"
// // [[PromiseResult]]: "Hello world"

// async function j() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(true), 1000);
//   });
// }
// const var2 = j();
// var2;
// // Promise {<pending>}
// // [[Prototype]]: Promise
// // [[PromiseState]]: "fulfilled"
// // [[PromiseResult]]: true
// var2;
// // Promise {<fulfilled>: true}
// // [[Prototype]]: Promise
// // [[PromiseState]]: "fulfilled"
// // [[PromiseResult]]: true

// async function x() {
//   return Promise.reject(404);
// }
// x();
// // Promise {<rejected>: 404}
// // [[Prototype]]: Promise
// // [[PromiseState]]: "rejected"
// // [[PromiseResult]]: 404

// function getSpecificNumber() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(42), 2000);
//   });
// }
// async function y() {
//   const specificNumber = await getSpecificNumber();
//   console.log(specificNumber);
// }
// y();
// // It wait and returns 42 after 2 seconds
// // Promise {<pending>}
// // [[Prototype]]: Promise
// // [[PromiseState]]: "fulfilled"
// // [[PromiseResult]]: undefined
// // 42

// console.log(
//   "----------- HTTP requests with promises and async/await----------",
// );

// // using promises
// function getRandomDogImage() {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((Response) => Response.json())
//     .then((value) => console.log(value.message));
// }
// getRandomDogImage();
// // It returns the picture
// // https://images.dog.ceo/breeds/dalmatian/cooper2.jpg

// // using async await
// async function getAnotherDogImage() {
//   let response = await fetch("https://dog.ceo/api/breeds/image/random");
//   let value = await response.json();
//   console.log(value.message);
// }
// getAnotherDogImage();
// // It returns another picture
// // https://images.dog.ceo/breeds/deerhound-scottish/n02092002_2448.jpg

console.log("-------- Converting .js to .mjs to run await in Node -------");

function getSpecificNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(42), 2000);
  });
}
const specificNumber = await getSpecificNumber();
console.log(specificNumber);

console.log("-------- Try and Catch block to handle errors -------");

async function z() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
  } catch (e) {
    console.log("Some error: " + e);
  }
}

z();
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: undefined

console.log("-------- .catch to handle errors -------");

async function zz() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
}

zz().catch((e) => alert("Custom error: " + e));
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: undefined

console.log("-------sequential vs parallel execution------");

function printNumber1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("printNumber1 is done");
      resolve(1);
    }, 1000);
  });
}

function printNumber2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("printNumber2 is done");
      resolve(2);
    }, 1000);
  });
}

// This function will invoke both printNumber1 and printNumber2
// functions one after another.
async function oneByOne() {
  const number1 = await printNumber1();
  const number2 = await printNumber2();
  console.log(number1, number2);
}
oneByOne();
// printNumber1 is done
// it waits a second and print
// printNumber2 is done
// 1 2

// This function will invoke both printNumber1 and printNumber2
// functions in parallel.
async function inParallel() {
  const promise1 = printNumber1();
  const promise2 = printNumber2();
  const number1 = await promise1;
  const number2 = await promise2;
  console.log(number1, number2);
}
inParallel();
// it prints all at once
// printNumber1 is done
// printNumber2 is done
// 1 2

// refactoring
async function inParallel() {
  const promise1 = printNumber1();
  const promise2 = printNumber2();
  console.log(await promise1, await promise2);
}
inParallel();
