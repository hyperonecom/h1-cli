'use strict';
const {ssh} = require('h1-cli-generic-commands');

module.exports = ssh({
    name: 'Vault',
    url: opts => `/storage/pl-waw-1/project/${opts.project}/vault/${opts.vault}`,
});
