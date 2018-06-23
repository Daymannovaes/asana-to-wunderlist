const { expect } = require('chai');
const asana = require('../lib/asana');

describe('asana.js', function() {
    describe('#getMe', function() {
        it('should work properly', function() {
            return asana.getMe().then(user => {
                expect(user).to.be.an('object');
                expect(user).to.have.nested.property('data.id');
                expect(user).to.have.nested.property('data.email');
            });
        });
    });
});

