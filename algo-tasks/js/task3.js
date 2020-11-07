// ****** Task 635 ******

function makeSingleSequence(firstArr, secondArr) {
  const seq = [...firstArr, ...secondArr];

  const merge = (left, right) => {
    const lessNums = [];

    while (left.length && right.length) {
      if (left[0] > right[0]) {
        lessNums.push(right.shift());
      } else {
        lessNums.push(left.shift());
      }
    }

    return [...lessNums, ...left, ...right];
  }

  const mergeSort = (arr) => {
    if (!arr || !(arr.length > 0)) {
      return [];
    } else if (arr.length === 1) {
      return arr;
    }

    const middle = Math.round(arr.length / 2);

    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  }

  return mergeSort(seq);
}


console.log(makeSingleSequence([2, 3, 5, 7, 9, 29], [3, 5, 7, 11, 13, 15, 22, 87]));