const configFile = require('./config.json');
const config = {};

Object.keys(configFile).map(key => config = process.env[key] || configFile);

return config;
