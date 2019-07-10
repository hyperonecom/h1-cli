'use strict';

const Cli = require('lib/cli');

const resource = {
    name: 'user',
    title: 'user',
    credential_types: ['ssh', 'sha-512'],
};

const childDefaults = Object.assign({}, resource, {
    url: () => 'user/me',
    plugins: [
        require('bin/_plugins/loginRequired'),
        require('bin/_plugins/outputFormat'),
        require('bin/_plugins/api'),
    ],
});

const category = Cli.createCategory(resource.name, {
    description: `Manage your ${resource.title}`,
    priority: 15,
});

category.addChild(require('./create'));

category.addChild(require('bin/generic/credentials')(Object.assign(
    {},
    resource,
    childDefaults,
    {
        url: args => `${childDefaults.url(args)}/credential`,
    }
)));

category.addChild(require('./2fa')(Object.assign({}, childDefaults)));

module.exports = category;
