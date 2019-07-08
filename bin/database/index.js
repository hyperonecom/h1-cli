'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const schema = {
    name: {
        description: 'Database name',
        type: 'string',
        required: true,
        onCreate: true,
    },
    type: {
        description: 'Type',
        type: 'string',
        required: true,
        onCreate: true,
        destBody: 'service',
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
    name: 'database',
    defaultQuery: '[].{id:_id,name:name,type:type,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'database',
    plugins: genericDefaults.plugins,
    extraCommands: ['start', 'create', 'stop', 'credential', 'transfer'],
    earlyAdoptersOnly: true,
    title: 'database',
    schema,
    dirname: __dirname,
    credential_types: ['mysql'],
};

const category = genericResource(resource);

category.addChild(require('./shell')(resource));

module.exports = category;
