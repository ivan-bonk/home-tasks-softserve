const getArmstrongNumbers = require('../js/task2');

describe('Armstrong Numbers', () => {

  const result = [153, 370, 371, 407, 1634, 8208, 9474, 54748, 92727, 93084];
  test('should find all Armstrong number up to 100000', () => {
    expect(Array.isArray(getArmstrongNumbers())).toBeTruthy();
    expect(getArmstrongNumbers()).toHaveLength(10);
    expect(getArmstrongNumbers()).toStrictEqual(result);

    getArmstrongNumbers().forEach((item) => {
      expect(typeof item).toBe('number')
    })
  })
})