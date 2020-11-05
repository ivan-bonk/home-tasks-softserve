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