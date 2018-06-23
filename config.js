const configFile = require('./config.json');
const config = {};

Object.keys(configFile).map(key => config[key] = process.env[key] || configFile[key]);

module.exports = config;
