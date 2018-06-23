const { expect } = require('chai');
const configPath = '../config';
let config;

describe('config.js', function() {
    const requireConfig = () => config = require(configPath);
    const deleteConfig = () => delete require.cache[require.resolve(configPath)];

    beforeEach(requireConfig);
    afterEach(deleteConfig);

    it('should work without node env', function() {
        expect(config).to.be.an('object');
        expect(config).to.have.property('ASANA_ACCESS_TOKEN');
    });

    it('should work with node env', function() {
        process.env.ASANA_ACCESS_TOKEN = 'some token';

        deleteConfig();
        requireConfig();

        expect(config).to.be.an('object');
        expect(config.ASANA_ACCESS_TOKEN).to.equal(process.env.ASANA_ACCESS_TOKEN);
    });
});

