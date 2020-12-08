// ****** Task 635 ******
// Об'єднати два масиви в один та відсортувати методом ЗЛИТТЯ 

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


console.log(makeSingleSequence([9, 5, 3, 7, 2, 29], [3, 5, 7, 11, 13, 15, 22, 87]));


//     [3,2,4,5,7,6]
//    [3,2,4] [5,7,6]
//  [3,2] [4] [5,7] [6]
//    [2,3,4] [5,6,7]
//     [2,3,4,5,6,7]