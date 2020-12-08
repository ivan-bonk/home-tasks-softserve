// ****** Task 375 ******
// Розділити кожен елемент матриці на найбільший по модулю елемент

function transformMatrix(initMatrix) {
  let absMax = null;

  initMatrix.forEach((row) => {
    const rowMax = Math.max(...row.map((item) => Math.abs(item)));
    if (rowMax > absMax || absMax === null) {
      absMax = rowMax
    }
  })

  return initMatrix.map((row) => row.map((item) => absMax ? item / absMax : 0));
}

console.log(transformMatrix(
  [
    [9, 3, -5, -3, 1],
    [4, 3, 1, 6, 5],
    [6, -8, -5, -3, 1],
    [1, 4, 5, 6, 4]
  ]
));

