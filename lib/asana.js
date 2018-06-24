const Asana = require('asana');
const { ASANA_ACCESS_TOKEN: token, ASANA_DEFAULT_WORKSPACE_ID: defaultWorkspaceId } = require('../config');

const asana = Asana.Client.create().useAccessToken(token);

module.exports._asana = asana;
module.exports.getMe = () => asana.users.me();

module.exports.findWorkspaceByName = name => asana.workspaces.findAll().then(filterDataByName.bind(null, name));

module.exports.findAllProjects = (workspace = defaultWorkspaceId) => asana.projects.findAll({ workspace }).then(response => response.data);
module.exports.findprojectByName = (name, workspace = defaultWorkspaceId) => asana.projects.findAll({ workspace }).then(filterDataByName.bind(null, name));

const filterDataByName = (name, response) => response.data.find(d => d.name.match(regexName(name)));
const regexName = name => new RegExp(name, 'i');

