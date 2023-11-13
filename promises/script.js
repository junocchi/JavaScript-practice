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

// console.log("----------- Fetching API -------------");

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

// fetch("https://www.omdbapi.com/?s=batman&y=2018&apikey=89f2da9e")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// console.log("----------- Avoiding callback hell -------------");

// function calculateSquare(number, callback) {
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

// calculateSquare(1)
//   .then((value) => {
//     console.log(value);
//     return calculateSquare(2);
//   })
//   .then((value) => {
//     console.log(value);
//     return calculateSquare(3);
//   })
//   .then((value) => {
//     console.log(value);
//     return calculateSquare(4);
//   })
//   .then((value) => {
//     console.log(value);
//     return calculateSquare(5);
//   })
//   .then((value) => {
//     console.log(value);
//     return calculateSquare(6);
//   });

// console.log("----------- Handling Promise Rejections -------------");

// function calculateSquare(number, callback) {
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

// calculateSquare(1)
//   .then((value) => {
//     console.log(value);
//     return calculateSquare(2);
//   })
//   .then((value) => {
//     return new Promise((resolve, reject) => {
//       return reject("Something went wrong");
//     });
//     console.log(value);
//   })
//   .catch((reason) => {
//     console.log("error happened: " + reason);
//   });
// // 1
// //error happened: Error: Something went wrong

// console.log("----------- Promise.resolve and Promise.reject -------------");

// function logToConsole(somePromise) {
//   somePromise.then((value) => console.log(value));
// }

// const somePromise = new Promise((resolve, reject) => resolve("Hello"));
// const value = "Getting a string from a promisified value";
// const promisifiedValue = Promise.resolve(value);
// const promisifiedValue2 = Promise.resolve("Promisifying a string on-the-go");

// logToConsole(somePromise); // Hello
// //logToConsole(value); // TypeError: somePromise.then is not a function
// logToConsole(promisifiedValue); // Getting a string from a promisified value
// logToConsole(promisifiedValue2); // Promisifying a string on-the-go

// const rejectedPromise = Promise.reject(new Error("Some error")); // Error: Some error

// console.log("----------- Promise.all -------------");

// // Declare 3 functions which imitate the Dealer API
// function askFirstDealer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(8000), 3000);
//   });
// }
// function askSecondDealer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(12000), 5000);
//   });
// }
// function askThirdDealer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(10000), 8000);
//   });
// }

// // Invoke these 3 functions in parallel
// Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()]).then(
//   (prices) => {
//     console.log(prices);
//   },
// );
// // After 8 seconds, it prints
// // [ 8000, 12000, 10000 ]

// console.log("----------- Handling rejections with Promise.all -------------");

// // Declare 3 functions which imitate the Dealer API
// function askFirstDealer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(8000), 3000);
//   });
// }
// // askSecondDealer returns a promise that becomes rejected after 5 seconds
// function askSecondDealer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject("Not suitable car"), 5000);
//   });
// }
// function askThirdDealer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(10000), 8000);
//   });
// }

// The promise returned by Promise.all
// will be rejected with a reason 'Not suitable car'.
// Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()])
//   .then((prices) => {
//     console.log(prices);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// This time Promise.all will return a resolved promise
// Promise.all([
//   askFirstDealer().catch((error) => {
//     return error;
//   }),
//   askSecondDealer().catch((error) => {
//     return error;
//   }),
//   askThirdDealer().catch((error) => {
//     return error;
//   }),
// ])
//   .then((prices) => {
//     console.log(prices);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// This time Promise.all will be rejected immediately
// Promise.all([
//   askFirstDealer().catch((error) => {
//     return error;
//   }),
//   askSecondDealer().catch((error) => {
//     return error;
//   }),
//   askThirdDealer().catch((error) => {
//     return error;
//   }),
//   Promise.reject("rejected for some reason"),
// ]).then((prices) => {
//   console.log(prices);
// });

// console.log("------- Promise.race ---------");
// const askJohn = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("John: Yes, I've got an extra pen."), 3000);
//   });
// };

// const askEugene = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject("Eugene: Sorry, I only have one."), 5000);
//   });
// };

// const askSusy = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Susy: Yes, I have a pen for you."), 2000);
//   });
// };

// Promise.race([askJohn(), askEugene(), askSusy()]).then((value) => {
//   console.log(value);
// });
// // Susy: Yes, I have a pen for you.

// console.log("------- Promise.race version 2---------");
// const askJohn = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("John: Yes, I've got an extra pen."), 3000);
//   });
// };

// const askEugene = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject("Eugene: Sorry, I only have one."), 1000);
//   });
// };

// const askSusy = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Susy: Yes, I have a pen for you."), 2000);
//   });
// };
// // Promise.race takes an array of values as an argument.
// Promise.race([askJohn(), askEugene(), askSusy()])
//   .then((value) => {
//     // Unlike Promise.all, We have only 1 value here,
//     // and it is the result of the fastest promise in the array.
//     console.log(value);
//   })
//   .catch((reason) => {
//     console.log("Rejected: " + reason);
//   });
// // Rejected: Eugene: Sorry, I only have one.

// console.log(
//   "---- Promise.any - Getting the first successful Promise response -----",
// );
// const askJohn = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("John: Yes, I've got an extra pen."), 3000);
//   });
// };

// const askEugene = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject("Eugene: Sorry, I only have one."), 1000);
//   });
// };

// const askSusy = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Susy: Yes, I have a pen for you."), 2000);
//   });
// };

// Promise.any([askJohn(), askEugene(), askSusy()])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((reason) => {
//     console.log("Rejected: " + reason);
//   });
// // Susy: Yes, I have a pen for you.

console.log("---- Implementing Promise.race from scratch ------");

//Promise.race([]);
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "pending"
// [[PromiseResult]]: undefined

//Promise.race([Promise.reject("Something went wrong"), 6, 8, true]);
// Promise {<rejected>: 'Something went wrong'}
// [[Prototype]]: Promise
// [[PromiseState]]: "rejected"
// [[PromiseResult]]: "Something went wrong"

//creating our own Promise.race
// const promiseRace = (arrayOfPromises) => {
//   if (arrayOfPromises.length === 0) {
//     return new Promise((resolve, reject) => {});
//   }

//   return new Promise((resolve, reject) => {
//     arrayOfPromises.forEach((promise) => {
//       if (promise instanceof Promise === false) {
//         promise = Promise.resolve(promise);
//       }

//       promise.then((value) => {
//         resolve(value);
//       });
//       promise.catch((reason) => {
//         reject(reason);
//       });
//     });
//   });
// };

// const getOne = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
//   });
// };

// const getTwo = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(2), 2000);
//   });
// };

// const getThree = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(3), 3000);
//   });
// };

// promiseRace([getThree(), getTwo(), getOne()]).then((value) =>
//   console.log(value),
// );
// // 1

//creating our own Promise.any
const promiseAny = (arrayOfPromises) => {
  if (arrayOfPromises.length === 0) {
    return Promise.reject(new AggregateError([], "All promises were rejected"));
  }

  const promiseRejections = [];

  let rejectedPromisesCount = 0;

  return new Promise((resolve, reject) => {
    arrayOfPromises.forEach((promise, index) => {
      if (promise instanceof Promise === false) {
        promise = Promise.resolve(promise);
      }

      promise
        .then((value) => {
          resolve(value);
        })
        .catch((reason) => {
          rejectedPromisesCount += 1;
          promiseRejections[index] = reason;
          if (rejectedPromisesCount === arrayOfPromises.length) {
            reject(
              new AggregateError(
                promiseRejections,
                "All promises were rejected",
              ),
            );
          }
        });
    });
  });
};

//promiseAny([]);
// Promise {<rejected>: AggregateError: All promises were rejected
// [[Prototype]]: Promise
// [[PromiseState]]: "rejected"
// [[PromiseResult]]: AggregateError: All promises were rejected...

const getOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(1), 1000);
  });
};

const getTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 2000);
  });
};

const getThree = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 3000);
  });
};

promiseAny([getThree(), getTwo(), getOne()]).then((value) =>
  console.log(value),
);
// 2
// the first one is rejected, so it returns 2, which is the first resolved promise
