function divideArray(nums) {
  const evenNums = [];
  const oddNums = [];

  for (const num of nums) {
    if (num % 2 === 0) {
      evenNums.push(num);
    } else {
      oddNums.push(num);
    }
  }

  printArray("Even numbers", evenNums);
  printArray("Odd numbers", oddNums);
}

function printArray(header, array) {
  console.log(header + ":");
  console.log(array.sort((a, b) => a - b).join("\n") || "None");
}

// divideArray([4, 2, 3, 1, 15, 1, 9, 7]);
// divideArray([4, 2, 8]);
// divideArray([20,4,16,100,90,72,-18,56,42,88]);