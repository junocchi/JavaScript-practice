"use strict";

const myPromise = new Promise(function (resolve, reject) {
  resolve("value");
});
console.log(myPromise);

const myPromise2 = new Promise(function (resolve, reject) {
  reject("reason");
});
console.log(myPromise2);
