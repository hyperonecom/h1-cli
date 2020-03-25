'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
const complete = require('lib/complete');

const schema = {
    name: {
        description: 'Name of log archive',
        type: 'string',
        required: true,
        onCreate: true,
    },
    type: {
        description: 'Volume type ID or name',
        type: 'string',
        required: false,
        onCreate: true,
        destBody: 'service',
        complete: complete.completeService('journal'),
    },
    retention: {
        description: 'Data retention period (in days)',
        type: 'int',
        required: false,
        defaultValue: 90,
        onCreate: true,
        onUpdate: true,
    },
    credentials: {
        virtual: true,
        onCreate: false,
    },
    tags: {
        virtual: true,
        onCreate: true,
    },
};

const resource = {
    name: 'journal',
    defaultQuery: '[].{id:id, name:name, type:flavour, retention:retention, sizeUsed:sizeUsed, state:state, tags:join(\',\',keys(tag || `{}`) ) }',
    commands: ['show', 'delete', 'rename', 'create', 'list', 'history', 'tag', 'service', 'transfer', 'update', 'credential'],
    plugins: genericDefaults.plugins,
    url: args => `insight/${args.location}/project/${args.project}/journal`,
    dirname: __dirname,
    schema: schema,
    earlyAdoptersOnly: true,
    title: 'Journal',
    credential_types: ['sha512'],
};

const category = genericResource(resource);

category.addChild(require('./stream')(resource));
category.addChild(require('./logger')(resource));

module.exports = category;
