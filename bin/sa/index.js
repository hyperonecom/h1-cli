'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
const complete = require('lib/complete');

const schema = {
    name: {
        description: 'Service account name',
        type: 'string',
        required: true,
        onCreate: true,
    },
    type: {
        description: 'Service account type name or ID',
        type: 'string',
        required: false,
        onCreate: true,
        destBody: 'service',
        complete: complete.completeService('policy'),
    },
    tags: {
        virtual: true,
        onCreate: true,
    },
};

const resource = {
    name: 'sa',
    defaultQuery: '[].{id:id, name:name, tags:join(\',\',keys(tag || `{}`) ) }',
    url: args => `iam/project/${args.project}/sa`,
    plugins: genericDefaults.plugins,
    earlyAdoptersOnly: true,
    extraCommands: ['create', 'credential', 'transfer'],
    title: 'Service account',
    dirname: __dirname,
    schema,
    credential_types: ['ssh'],
};

const category = genericResource(resource);

module.exports = category;
