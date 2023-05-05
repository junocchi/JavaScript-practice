function drawTriangle(triangleSize) {
  for (i = 1; i <= triangleSize; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// drawTriangle(5);
