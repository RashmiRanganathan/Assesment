var chai = require('chai');
var expect = chai.expect;
var functionToUse = require('../fileReading.js');

describe('To check functionality of land Rover', function () {
    
    it('should return position and directing when proper input is passed', function () {
        expect(functionToUse('./inputFile.txt')).to.eqls('Rover at position 1,3 facing W');
    });

});

describe('To check functionality of land Rover with invalid input', function () {
    
    it('should return position and directing when proper input is passed', function () {
        expect(functionToUse('./inputFile1.txt')).to.eqls('The grid size is not a valid Integer');
    });

});
