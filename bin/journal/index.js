'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

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
    },
    retention: {
        description: 'Data retention period (in days)',
        type: 'int',
        required: false,
        defaultValue: 90,
        onCreate: true,
    },
    credentials: {
        virtual: true,
        onCreate: false,
    },
    tags: {
        virtual: true,
        onCreate: true,
        onUpdate: true,
    },
};

const resource = {
    name: 'journal',
    apiName: 'journal',
    defaultQuery: '[].{id:id,name:name,retention:retention,sizeUsed:sizeUsed,state:state,processing:processing}',
    commands: ['show', 'delete', 'rename', 'create', 'list', 'history', 'tag', 'service', 'transfer', 'credential'],
    plugins: genericDefaults.plugins,
    url: () => 'journal',
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
