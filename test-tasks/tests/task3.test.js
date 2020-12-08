const getPalindromes = require('../js/task3');

describe('Polindromes', () => {

  const result = [
    1, 2, 3, 11, 22,
    26, 101, 111, 121, 202,
    212, 264, 307, 836]

  test('should return correct value with positive input', () => {
    const input = 1000;
    expect(getPalindromes(input)).toBeDefined();
    expect(getPalindromes(input)).not.toBeNull();
    expect(Array.isArray(getPalindromes(input))).toBeTruthy();
    expect(getPalindromes(input)).toEqual(result);
    expect(getPalindromes(input)).toHaveLength(14);
  })

  test('should return correct value with negative input', () => {
    const input = -1000;
    expect(getPalindromes(input)).toBeDefined();
    expect(getPalindromes(input)).not.toBeNull();
    expect(Array.isArray(getPalindromes(input))).toBeTruthy();
    expect(getPalindromes(input)).toEqual([]);
    expect(getPalindromes(input)).toHaveLength(0);
  })

  test('should return correct value with incorrect inputs', () => {
    expect(Array.isArray(getPalindromes())).toBeTruthy();
    expect(getPalindromes()).toHaveLength(0);

    expect(Array.isArray(getPalindromes(0))).toBeTruthy();
    expect(getPalindromes(0)).toHaveLength(0);

    expect(Array.isArray(getPalindromes(null))).toBeTruthy();
    expect(getPalindromes(null)).toHaveLength(0);

    expect(Array.isArray(getPalindromes('test string'))).toBeTruthy();
    expect(getPalindromes('test string')).toHaveLength(0);

    expect(Array.isArray(getPalindromes({ prop: 'value' }))).toBeTruthy();
    expect(getPalindromes({ prop: 'value' })).toHaveLength(0);

    expect(Array.isArray(getPalindromes([1, 2, 3]))).toBeTruthy();
    expect(getPalindromes([1, 2, 3])).toHaveLength(0);
  })

  test('should return correvt value with float inputs', () => {
    const input = 999.355;
    expect(getPalindromes(input)).toBeDefined();
    expect(getPalindromes(input)).not.toBeNull();
    expect(Array.isArray(getPalindromes(input))).toBeTruthy();
    expect(getPalindromes(input)).toEqual(result);
    expect(getPalindromes(input)).toHaveLength(14);
  })
})