"use strict";

// sync function
function print1() {
  const number1 = 1;
  console.log(number1);
}

// print2 is a sync funtion with a blocking call
function print2() {
  function getNumber2() {
    return 2;
  }
  const number2 = getNumber2();
  console.log(number2);
}

// asynct function
function print3() {
  const fs = require("fs");
  fs.readFile("./number3.txt", "utf-8", function (err, number3) {
    console.log(number3);
  });
}

// sync function
function print4() {
  const number4 = 4;
  console.log(number4);
}

print1();
print2();
print3();
print4();
// 1
// 2
// 4
// 3
