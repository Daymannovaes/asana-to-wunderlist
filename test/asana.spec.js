const { expect } = require('chai');
const asana = require('../lib/asana');

describe('asana.js', function() {
    this.timeout(10000);

    describe('#getMe', function() {
        it('should work properly', function() {
            return asana.getMe().then(user => {
                expect(user).to.be.an('object');
                expect(user).to.have.property('id');
                expect(user).to.have.property('email');
            });
        });
    });

    describe('workspace', function() {
        it('shoult get all workspaces properly', function() {
            return asana.findWorkspaceByName('bussola').then(workspace => {
                expect(workspace).to.have.property('name');
                expect(workspace.name.toLowerCase()).to.match(/bussola/i);
            });
        });
    });
});

