const Asana = require('asana');
const { ASANA_ACCESS_TOKEN: token } = require('../config');

const asana = Asana.Client.create().useAccessToken(token);

module.exports._asana = asana;
module.exports.getMe = () => asana.users.me();
module.exports.findWorkspaceByName = name => asana.workspaces.findAll().then(filterWorkspacesByName.bind(null, name));

const filterWorkspacesByName = (name, workspaces) => workspaces.data.find(w => w.name.match(regexName(name)));
const regexName = name => new RegExp(name, 'i');
