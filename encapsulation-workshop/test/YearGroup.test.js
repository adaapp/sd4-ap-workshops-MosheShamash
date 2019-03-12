const chai = require('chai')
const expect = chai.expect;

const YearGroup = require('../classes/YearGroup.js');

describe('YearGroup', () => {
    it('should allow an object to be instantiated from the class', () => {
        let myYearGroup = new YearGroup()
        expect(myYearGroup).to.be.an.instanceOf(YearGroup);
    })
})