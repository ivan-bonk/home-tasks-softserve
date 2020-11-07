const getArmstrongNumbers = () => {
  const arr = [];
  for (let i = 10; i < 100000; i++) {
    arr.push(i);
  }
  return arr
    .map((num) => {
      return num
        .toString()
        .split("")
        .map((el, i, arr) => Math.pow(el, arr.length))
        .reduce((a, b) => a + b);
    })
    .filter((el, i) => el === arr[i]);
};

module.exports = getArmstrongNumbers;