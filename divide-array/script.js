function divideArray(num) {
  let evenNums = [];
  let oddNums = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      evenNums.push(num[i]);
    } else {
      oddNums.push(num[i]);
    }
  }

  // printArray("Even numbers", evenNums)
  // printArray("Odd numbers", oddNums)

  console.log("Even numbers:"); 
  console.log(evenNums.sort().join("\n") || "None");
  console.log("Odd numbers:");
  console.log(oddNums.sort().join("\n") || "None");
}

// function printArray(header, array) {
//   console.log(header + ":");
//   console.log(array.sort().join("\n") || "None");
// }


divideArray([4, 2, 9, 1, 8]);
divideArray([4, 2, 8]);