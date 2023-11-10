"use strict";

// const myPromise1 = new Promise(function (resolve, reject) {
//   resolve("value");
// });
// console.log(myPromise1);
// //Promise { 'value' }

// const myPromise2 = new Promise(function (resolve, reject) {
//   reject("reason");
// });
// console.log(myPromise2);
// //Promise { <rejected> 'reason' }

// const myPromise3 = new Promise(function (resolve, reject) {
//   resolve("value");
//   resolve("value2");
//   reject("reason");
// });
// console.log(myPromise3);
// //Promise { 'value' }
// //The Promise became fulfilled after the first call and never change its data again

// const myPromise = new Promise(function (resolve, reject) {
//   resolve("Hello World!");
// });
// myPromise.then(function onFulfilled(value) {
//   console.log(value);
//   console.log("This is inside onFulfilled function");
// });
// console.log("This is after myPromise.then");

// console.log("------- calculateSquare function with Promise --------");

// function calculateSquare(number) {
//   const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (typeof number !== "number") {
//         return reject(new Error("Argument of type number is expected"));
//       }
//       const result = number * number;
//       resolve(result);
//     }, 1000);
//   });
//   return promise;
// }

// // call the function with a valid argument
// calculateSquare(2).then(
//   (value) => {
//     console.log("Success: " + value);
//   },
//   (reason) => {
//     console.log("Error: " + reason);
//   },
// );

// // call the function with a NOT valid argument
// calculateSquare("star").then(
//   (value) => {
//     console.log("Success: " + value);
//   },
//   (reason) => {
//     console.log("Error: " + reason);
//   },
// );

// function capitalize(text) {
//   const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (typeof text !== "string") {
//         return reject(new Error("Argument of type string is expected"));
//       }
//       const result = text[0].toUpperCase() + text.slice(1);
//       resolve(result);
//     }, 1000);
//   });
//   return promise;
// }

// capitalize("juliana").then(
//   (value) => {
//     console.log("Success: " + value);
//   },
//   (reason) => {
//     console.log("Error: " + reason);
//   },
// );
// // Success: Juliana

// console.log("------- Promisifying a function / returning a Promise --------");

// //example requesting data from a database using callback
// function getUsers(callback) {
//   connection.query("SELECT * FROM USERS", function (error, results, fields) {
//     if (error) {
//       callback(error);
//     }
//     callback(null, results);
//   });
// }
// //calling the callback function, to print a list of users
// getUsers(function (error, users) {
//   if (error) {
//     console.log(error);
//   }
//   console.log("List of users: ");
//   users.forEach(function (user) {
//     console.log(`${user.user_id}. ${user.firstName} ${user.lastName}`);
//   });
// });

// console.log("----------- chaining Promises -------------");
// function calculateSquare(number) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//       if (typeof number !== "number") {
//         return reject(new Error("Argument of type number is expected"));
//       }
//       const result = number * number;
//       resolve(result);
//     }, 1000);
//   });
//   return promise;
// }

// // Prints "1" and then "undefined"
// calculateSquare(1)
//   .then((value) => {
//     console.log(value);
//   })
//   .then((value2) => {
//     console.log(value2);
//   });

// // Prints "1" and then "25"
// calculateSquare(1)
//   .then((value) => {
//     console.log(value);
//     return 25;
//     // value2 will become 25.
//   })
//   .then((value2) => {
//     console.log(value2);
//   });

// // Prints "1" and then "error happened: Error: error"
// calculateSquare(1)
//   .then((value) => {
//     console.log(value);
//     throw new Error("error");
//   })
//   .then(
//     (value2) => {
//       console.log(value2);
//       // In order to handle the error, we need to add onRejected function as a 2nd argument
//     },
//     (reason) => {
//       console.log("error happened: " + reason);
//     },
//   );

// // Prints "1" and then "4"
// calculateSquare(1)
//   .then((value) => {
//     console.log(value);
//     return calculateSquare(2);
//   })
//   .then(
//     (value2) => {
//       console.log(value2);
//     },
//     (reason) => {
//       console.log("error happened: " + reason);
//     },
//   );

// // Prints "1" and then "error happened: Error: Argument of type number is expected"
// calculateSquare(1)
//   .then((value) => {
//     console.log(value);
//     return calculateSquare("string");
//   })
//   .then(
//     (value2) => {
//       console.log(value2);
//     },
//     (reason) => {
//       console.log("error happened: " + reason);
//     },
//   );

console.log("----------- Fetching API -------------");

// first query parameter is the movie title, the second argument is the year of release, and then we add our personal free API key
// fetch("https://www.omdbapi.com/?s=batman&y=2018&apikey=89f2da9e").then(
//   (response) => console.log(response),
// );

/*
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: undefined
Response {type: 'cors', url: 'https://www.omdbapi.com/?s=batman&y=2018&apikey=89f2da9e', redirected: false, status: 200, ok: true, …}
*/

fetch("https://www.omdbapi.com/?s=batman&y=2018&apikey=89f2da9e")
  .then((response) => response.json())
  .then((data) => console.log(data));

console.log("----------- Avoiding callback hell -------------");
