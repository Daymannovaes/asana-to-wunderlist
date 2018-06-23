const { expect } = require('chai');
const config = require('../config');

describe('config.js', function() {
    it('should work without node env', function() {
        expect(config).to.be.an('object');
        expect(config).to.have.property('ASANA_ACCESS_TOKEN');
    });
});

