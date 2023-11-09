"use strict";

// // sync function
// function print1() {
//   const number1 = 1;
//   console.log(number1);
// }

// // print2 is a sync funtion with a blocking call
// function print2() {
//   function getNumber2() {
//     return 2;
//   }
//   const number2 = getNumber2();
//   console.log(number2);
// }

// // asynct function
// function print3() {
//   const fs = require("fs");
//   fs.readFile("./number3.txt", "utf-8", function (err, number3) {
//     console.log(number3);
//   });
// }

// // sync function
// function print4() {
//   const number4 = 4;
//   console.log(number4);
// }

// print1();
// print2();
// print3();
// print4();
// // 1
// // 2
// // 4
// // 3

// console.log("---------------Fix printing order-----------------");

// // sync function
// function print1() {
//   const number1 = 1;
//   console.log(number1);
// }

// // print2 is a sync funtion with a blocking call
// function print2() {
//   function getNumber2() {
//     return 2;
//   }
//   const number2 = getNumber2();
//   console.log(number2);
// }

// // async function
// function print3() {
//   const callback = function (err, number3) {
//     console.log(number3);
//     print4();
//   };
//   const fs = require("fs");
//   fs.readFile("./number3.txt", "utf-8", callback);
// }

// // sync function
// function print4() {
//   const number4 = 4;
//   console.log(number4);
// }

// print1();
// print2();
// print3();
// // 1
// // 2
// // 3
// // 4

// console.log("-----------------------------");

// // Async function taking a callback as an argument
// function f(callback) {
//   setTimeout(() => callback(), 0); // invokes setTimeout, which will then invoke our callback after 0 milliseconds.
// }

// f(() => console.log("This is a callback")); // we invoke the "f" function that will print a string to the web browser's console

// console.log("Hello world!");
// // Hello world!
// // This is a callback

// console.log("-----------------------------");
// // Sync function taking a callback as an argument
// function f(callback) {
//   callback();
// }

// f(() => console.log("This is a callback"));

// console.log("Hello world!");
// // This is a callback
// // Hello world!

// console.log("-----------------------------");

// function calculateSquare(number, callback) {
//   setTimeout(function () {
//     if (typeof number !== "number") {
//       throw new Error("Argument of type number is expected");
//     }
//     const result = number * number;
//     callback(result);
//   }, 1000);
// }

// console.log("-------------- Try and Catch block ---------------");
// // Try...catch mechanism can't be used with asynchronous functions
// try {
//   calculateSquare("bad argument", function (result) {
//     console.log(result);
//   });
// } catch (error) {
//   console.log("Caught error: " + String(error));
// }
// // Error: Argument of type number is expected

// console.log("-------------- Error ---------------");
// function calculateSquare(number, callback) {
//   setTimeout(function () {
//     if (typeof number !== "number") {
//       callback(new Error("Argument of type number is expected"));
//       return;
//     }
//     const result = number * number;
//     callback(null, result);
//   }, 1000);
// }

// // We call the function with a bad argument to see if it will identify the error
// calculateSquare("bad argument", function (error, result) {
//   if (error !== null) {
//     console.log("Caught error: " + String(error));
//     return;
//   }
//   console.log(result);
// });
// // Caught error: Error: Argument of type number is expected

// calculateSquare(5, function (error, result) {
//   if (error !== null) {
//     console.log("Caught error: " + String(error));
//     return;
//   }
//   console.log(result);
// });
// // 25

// console.log("-------------- callbacks-lack-readability --------------");
// // Making 1 HTTP request
// // using XMLHttpRequest
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://dog.ceo/api/breeds/list/all");
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     console.log(xhr.responseText);
//   }
// };
// xhr.send(null);

// /*
// {"message":{"affenpinscher":[],"african":[],"airedale":[],"akita":[],"appenzeller":[],"australian":["kelpie","shepherd"],"bakharwal":["indian"],"basenji":[],"beagle":[],"bluetick":[],"borzoi":[],"bouvier":[],"boxer":[],"brabancon":[],"briard":[],"buhund":["norwegian"],"bulldog":["boston","english","french"],"bullterrier":["staffordshire"],"cattledog":["australian"],"cavapoo":[],"chihuahua":[],"chippiparai":["indian"],"chow":[],"clumber":[],"cockapoo":[],"collie":["border"],"coonhound":[],"corgi":["cardigan"],"cotondetulear":[],"dachshund":[],"dalmatian":[],"dane":["great"],"deerhound":["scottish"],"dhole":[],"dingo":[],"doberman":[],"elkhound":["norwegian"],"entlebucher":[],"eskimo":[],"finnish":["lapphund"],"frise":["bichon"],"gaddi":["indian"],"germanshepherd":[],"greyhound":["indian","italian"],"groenendael":[],"havanese":[],"hound":["afghan","basset","blood","english","ibizan","plott","walker"],"husky":[],"keeshond":[],"kelpie":[],"kombai":[],"komondor":[],"kuvasz":[],"labradoodle":[],"labrador":[],"leonberg":[],"lhasa":[],"malamute":[],"malinois":[],"maltese":[],"mastiff":["bull","english","indian","tibetan"],"mexicanhairless":[],"mix":[],"mountain":["bernese","swiss"],"mudhol":["indian"],"newfoundland":[],"otterhound":[],"ovcharka":["caucasian"],"papillon":[],"pariah":["indian"],"pekinese":[],"pembroke":[],"pinscher":["miniature"],"pitbull":[],"pointer":["german","germanlonghair"],"pomeranian":[],"poodle":["medium","miniature","standard","toy"],"pug":[],"puggle":[],"pyrenees":[],"rajapalayam":["indian"],"redbone":[],"retriever":["chesapeake","curly","flatcoated","golden"],"ridgeback":["rhodesian"],"rottweiler":[],"saluki":[],"samoyed":[],"schipperke":[],"schnauzer":["giant","miniature"],"segugio":["italian"],"setter":["english","gordon","irish"],"sharpei":[],"sheepdog":["english","indian","shetland"],"shiba":[],"shihtzu":[],"spaniel":["blenheim","brittany","cocker","irish","japanese","sussex","welsh"],"spitz":["indian","japanese"],"springer":["english"],"stbernard":[],"terrier":["american","australian","bedlington","border","cairn","dandie","fox","irish","kerryblue","lakeland","norfolk","norwich","patterdale","russell","scottish","sealyham","silky","tibetan","toy","welsh","westhighland","wheaten","yorkshire"],"tervuren":[],"vizsla":[],"waterdog":["spanish"],"weimaraner":[],"whippet":[],"wolfhound":["irish"]},"status":"success"}
// */

// // Making 2 HTTP requests one after another
// // using XMLHttpRequest
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://dog.ceo/api/breeds/list/all");
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     const response = JSON.parse(xhr.responseText);
//     const breeds = Object.keys(response.message);
//     const firstBreedInTheList = breeds[0];

//     const xhr2 = new XMLHttpRequest();
//     xhr2.open(
//       "GET",
//       `https://dog.ceo/api/breed/${firstBreedInTheList}/images/random`,
//     );
//     xhr2.onreadystatechange = function () {
//       if (xhr2.readyState === XMLHttpRequest.DONE) {
//         console.log(xhr2.responseText);
//       }
//     };

//     xhr2.send(null);
//   }
// };

// xhr.send(null);

console.log("------------- Callback hell ---------------");

function calculateSquare(number, callback) {
  setTimeout(function () {
    if (typeof number !== "number") {
      callback(new Error("Argument of type number is expected"));
      return;
    }
    const result = number * number;
    callback(null, result);
  }, 1000);
}

calculateSquare(1, function (error, result) {
  console.log(result);
  calculateSquare(2, function (error, result) {
    console.log(result);
    calculateSquare(3, function (error, result) {
      console.log(result);
    });
  });
});
