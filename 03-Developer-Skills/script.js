// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEM 1:
// Smart meter company. "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1) understanding the problem
// -whats temperature amplitude? Answer: the difference between the highest and the lowest temperature
// -whats a sensor error? And what to do? Answer: it returns 'error'

// 2) Breaking up into sub-problems
// -remove not valid values
// -get the lowestTemp
// -get the highestTemp
// -return temp amplitude

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temperatures) {
//   let maxTemp = temperatures[0];
//   let minTemp = temperatures[0];

//   for (let i = 0; i < temperatures.length; ++i) {
//     const curTemp = temperatures[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > maxTemp) maxTemp = curTemp;
//     if (curTemp < minTemp) minTemp = curTemp;
//   }
//   console.log(maxTemp, minTemp);
//   return maxTemp - minTemp; // 17 -6
// };

// const tempAmplitude = calcTempAmplitude(temperatures);
// console.log(tempAmplitude); // 23

// PROBLEM 2
// 1) Function should receive 2 arrays of temperatures
// -should we implement the functionality twice? Answer: no. Just merge the arrays at the beginning.
// 2) sub-problem
// -Merge two arrays

const calcTempAmplitude = function (temp1, temp2) {
  const temperatures = temp1.concat(temp2);

  let maxTemp = temperatures[0];
  let minTemp = temperatures[0];

  for (let i = 0; i < temperatures.length; ++i) {
    const curTemp = temperatures[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > maxTemp) maxTemp = curTemp;
    if (curTemp < minTemp) minTemp = curTemp;
  }
  console.log(maxTemp, minTemp);
  return maxTemp - minTemp; // 20 -6
};

const tempAmplitude = calcTempAmplitude(
  [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5],
  [-3, -1, "error", 9, 13, 20, 5],
);
console.log(tempAmplitude); // 26
