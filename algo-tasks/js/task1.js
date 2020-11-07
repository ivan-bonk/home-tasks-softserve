// ****** Task 375 ******

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

console.log(transformMatrix([[9, 3, -5, -3, 1], [4, 3, 1, 6, 5], [6, -8, -5, -3, 1], [1, 4, 5, 6, 4]]));



function f1(a) {
  var sum = a;

  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum
}
