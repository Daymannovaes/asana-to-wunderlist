const should = require('chai').should();
const asana = require('../lib/asana');

describe('asana.js', function() {
    this.timeout(10000);

    describe('#getMe', function() {
        it('should work properly', function() {
            return asana.getMe().then(user => {
                user.should.be.an('object');
                user.should.be.an('object');
                user.should.have.property('id');
                user.should.have.property('email');
            });
        });
    });

    describe('workspace', function() {
        it('shoult find workspace properly', function() {
            return asana.findWorkspaceByName('bussola').then(workspace => {
                workspace.should.have.property('name');
                workspace.name.toLowerCase().should.match(/bussola/i);
            });
        });
    });

    describe('projects', function() {
        it('shoult find all projects', function() {
            return asana.findAllProjects().then(projects => {
                projects.should.be.an('array');
                projects.length.should.be.at.least(1);
                projects[0].should.have.property('name');
            });
        });

        it('shoult find project by name', function() {
            return asana.findprojectByName('rosacruz').then(project => {
                project.should.have.property('name');
                project.name.toLowerCase().should.match(/rosacruz/i);
            });
        });

        it('should get all active projects', function() {
            return asana.findActiveProjects().then(projects => {
                projects.should.be.an('array');
                projects.length.should.be.at.least(1);
                projects[0].should.have.property('archived');
                projects.forEach(project => {
                    project.should.have.property('archived', false);
                });
            });
        });
    });
});

