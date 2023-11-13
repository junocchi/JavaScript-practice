"use strict";

async function f() {
  return "Hello world";
}

async function j() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), 10000);
  });
}
