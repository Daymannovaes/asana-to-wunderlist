const Asana = require('asana');
const { ASANA_ACCESS_TOKEN: token } = require('../config');

const asana = Asana.Client.create().useAccessToken(token);

module.exports.getMe = () => asana.users.me();
