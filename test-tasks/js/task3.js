const getPalindromes = (range) => {
  const numbers = [];
  for (let i = 0; i < range; i++) {
    numbers[i] = i + 1;
  }

  return numbers.filter(
    (num) =>
      (num * num).toString() ===
      (num * num).toString().split("").reverse().join("")
  );
};

module.exports = getPalindromes