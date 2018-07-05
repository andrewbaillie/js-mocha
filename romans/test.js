const chai = require('chai');
const numerals = require('./index');
const expect = chai.expect;


describe('Roman Numerals', function() {

  it('should return I for number 1', () => {
    expect(numerals(1)).to.equal('I');
  });

  it('should return II for number 2', () => {
    expect(numerals(2)).to.equal('II');
  });

  it('should return nothing for -1', () => {
    expect(numerals(-1)).to.equal('');
  });

  it('should return MMXVIII for 2018', () => {
    expect(numerals(2018)).to.equal('MMXVIII');
  });

  it('should return MMXVIII for 3999', () => {
    expect(numerals(3999)).to.equal('MMMCMXCIX');
  });

});
