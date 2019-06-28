'use strict';

const genericResource = require('bin/generic/root');

const resource = {
    name: 'organisation',
    defaultQuery: '[].{id:_id,name:name,billing:billing.company,active:active,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'organisation',
    plugins: [
        require('bin/_plugins/loginRequired'),
        require('bin/_plugins/outputFormat'),
        require('bin/_plugins/api'),
    ],
    title: 'Organisation',
    commands: ['show', 'history', 'access/user', 'list', 'rename', 'tag', 'payment'],
};

const category = genericResource(resource);

const childDefaults = Object.assign({}, resource, {
    options: {
        organisation: {
            description: 'Organisation ID or name',
            type: 'string',
            required: true,
        },
    },
    url: args => `${resource.url(args)}/${args.organisation}`,
});

category.addChild(require('./transfer')(childDefaults));
module.exports = category;
