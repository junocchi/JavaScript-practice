"use strict";

console.log("1 - call stack");

setTimeout(() => console.log("2 - setTimeout task queue 1"), 0);
setTimeout(() => console.log("3 - setTimeout task queue 2"), 0);
Promise.resolve().then(() => console.log("4 - Promise (microtask) 1"));
console.log("5 - call stack");
Promise.resolve().then(() => console.log("6 - Promise (microtask) 2"));

// 1 - call stack
// 5 - call stack
// 4 - Promise (microtask) 1
// 6 - Promise (microtask) 2
// Promise {<fulfilled>: undefined}
// 2 - setTimeout task queue 1
// 3 - setTimeout task queue 2
