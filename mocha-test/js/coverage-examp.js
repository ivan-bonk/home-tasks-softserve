const testSwitch = (flag, param) => {
  let res = 0;

  if (flag) {
    switch (param) {
      case 1: {
        res += param
        break;
      }
      case 2: {
        res -= param
        break;
      }
      default: {
        res = 100
      }
    }
  } else {
    for (let i = 1; i <= 10; i++) {
      res += i;
    }
  }
  return res
}

module.exports = testSwitch;