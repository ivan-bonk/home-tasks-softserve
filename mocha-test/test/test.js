const exapmleFoo = require('../js/coverage-examp');
const expect = require('chai').expect;

describe('Testing coverage on example function', () => {

  it('should cover only firts case on switch', () => {
    expect(exapmleFoo(true, 1)).eq(1);
  })

  it('should cover only second case on switch', () => {
    expect(exapmleFoo(true, 2)).eq(-2);
  })

  it('should cover only default case on switch', () => {
    expect(exapmleFoo(true, 3)).eq(100);
  })

  it('should cover first only "else" statement', () => {
    expect(exapmleFoo(false, 1)).eq(55);
  })

})

