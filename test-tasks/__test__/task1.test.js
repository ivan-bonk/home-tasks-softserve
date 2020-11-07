const celsiusToFahrenheit = require('../js/task1');

describe('Celsium to Fahrenheit', () => {
  test('should convert positive value', () => {
    expect(celsiusToFahrenheit(10)).toBeTruthy();
    expect(celsiusToFahrenheit(10)).toBe('50.0')
  });
  test('should convert zero value', () => {
    expect(celsiusToFahrenheit(0)).toBeTruthy();
    expect(celsiusToFahrenheit(0)).toBe('32.0');
  });
  test('should convert negative value', () => {
    expect(celsiusToFahrenheit(-10)).toBeTruthy();
    expect(celsiusToFahrenheit(-10)).toBe('14.0');
  });

  test('should convert float value', () => {
    expect(celsiusToFahrenheit(10.75)).toBe('51.4');
  });
  test('should catch invalid value', () => {
    expect(celsiusToFahrenheit('text')).toBe('NaN');
    expect(celsiusToFahrenheit({ prop: 'value' })).toBe('NaN');
    expect(celsiusToFahrenheit([1, 2, 3])).toBe('NaN');
    expect(celsiusToFahrenheit(null)).toBe('32.0');
    expect(celsiusToFahrenheit(true)).toBe('33.8');
    expect(celsiusToFahrenheit(false)).toBe('32.0');

  });
})

