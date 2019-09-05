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
    // retention: {
    //     description: 'Data retention period (in days)',
    //     type: 'int',
    //     required: true,
    //     defaultValue: 30,
    //     onCreate: true
    // },
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
    name: 'log',
    apiName: 'logArchive',
    defaultQuery: '[].{id:id,name:name,retention:retention,sizeUsed:sizeUsed,state:state,processing:processing}',
    commands: ['show', 'delete', 'rename', 'create', 'list', 'history', 'tag', 'service', 'transfer', 'credential'],
    plugins: genericDefaults.plugins,
    url: () => 'logArchive',
    dirname: __dirname,
    schema: schema,
    earlyAdoptersOnly: true,
    title: 'Log archive',
    credential_types: ['sha512'],
};

const category = genericResource(resource);

category.addChild(require('./stream')(resource));
category.addChild(require('./logger')(resource));

module.exports = category;
