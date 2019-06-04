'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const schema = {
    name: {
        description: 'Website name',
        type: 'string',
        required: true,
        onCreate: true,
    },
    type: {
        description: 'Website type',
        type: 'string',
        required: true,
        onCreate: true,
    },
    domain: {
        description: 'Domain name',
        type: 'string',
        append: [],
        action: 'append',
        required: true,
        onUpdate: true,
        onCreate: true,
    },
    image: {
        description: 'Website Image',
        type: 'string',
        required: true,
        onCreate: true,
    },
};

const resource = {
    name: 'website',
    defaultQuery: '[].{id:_id,name:name,image:image,domains:join(\',\',domain), state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'website',
    plugins: genericDefaults.plugins,
    earlyAdoptersOnly: true,
    extraCommands: ['ssh', 'sftp', 'create', 'start', 'stop', 'credential', 'update', 'log'],
    title: 'website',
    dirname: __dirname,
    schema,
    credential_types: ['certificate', 'sha512'],
};

const category = genericResource(resource);

module.exports = category;
