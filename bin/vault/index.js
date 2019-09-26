'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');


const schema = {
    name: {
        description: 'Vault name',
        type: 'string',
        required: true,
        onCreate: true,
    },
    size: {
        description: 'Vault size in GB',
        type: 'float',
        required: true,
        onCreate: true,
    },
    snapshot: {
        description: 'Snapshot ID or name',
        type: 'string',
        required: false,
        onCreate: true,
    },
    credentials: {
        virtual: true,
        onCreate: true,
    },
    tags: {
        virtual: true,
        onCreate: true,
        onUpdate: true,
    },
};

const resource = {
    name: 'vault',
    defaultQuery: '[].{id:id, name:name, type:flavour, size:size, state:state, tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'vault',
    plugins: genericDefaults.plugins,
    extraCommands: ['resize', 'ssh', 'sftp', 'start', 'stop', 'credential'],
    title: 'Vault',
    schema: schema,
    credential_types: ['ssh', 'sha512'],
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./console')(resource));

module.exports = category;
