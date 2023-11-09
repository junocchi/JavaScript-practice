"use strict";

const myPromise = new Promise(function (resolve, reject) {
  resolve("value");
});
console.log(myPromise);
//Promise { 'value' }

const myPromise2 = new Promise(function (resolve, reject) {
  reject("reason");
});
console.log(myPromise2);
//Promise { <rejected> 'reason' }

const myPromise3 = new Promise(function (resolve, reject) {
  resolve("value");
  resolve("value2");
  reject("reason");
});
console.log(myPromise3);
//Promise { 'value' }
//The Promise became fulfilled after the first call and never change its data again
