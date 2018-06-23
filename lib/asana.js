const { ASANA_ACCESS_TOKEN: token } = require('../config');
const request = require('request-promise').defaults({
    headers: {
        Authorization: `Bearer ${token}`
    },
    json: true
});

const baseUrl = 'https://app.asana.com/api/1.0';

module.exports.getMe = () => request.get(`${baseUrl}/users/me`);
