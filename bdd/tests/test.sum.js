describe('sum', function () {

    it('should return sum of arguments', function () {
        chai.expect(sum(1, 2)).to.equal(3);
    });

    it('should return a number', function () {
        chai.expect(sum(1, 2)).to.be.a('number');
    });

    it('should return a string', function () {
        chai.expect(sum('a', 2)).to.be.a('string');
    });

});
