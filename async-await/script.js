"use strict";

async function f() {
  return "Hello world";
}
const var1 = f();
var1;
// It returns a promise
// Promise {<fulfilled>: 'Hello world'}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "Hello world"

async function j() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), 1000);
  });
}
const var2 = j();
var2;
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: true
var2;
// Promise {<fulfilled>: true}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: true

async function x() {
  return Promise.reject(404);
}
x();
// Promise {<rejected>: 404}
// [[Prototype]]: Promise
// [[PromiseState]]: "rejected"
// [[PromiseResult]]: 404

function getSpecificNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(42), 2000);
  });
}
async function y() {
  const specificNumber = await getSpecificNumber();
  console.log(specificNumber);
}
y();
// It wait and returns 42 after 2 seconds
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: undefined
// 42
