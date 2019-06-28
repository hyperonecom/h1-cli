'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic/root');

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
        destBody: 'service',
    },
    domain: {
        description: 'Domain name',
        type: 'string',
        append: [],
        action: 'append',
        required: false,
        onUpdate: true,
        onCreate: false,
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
    extraCommands: ['ssh', 'sftp', 'create', 'log'],
    title: 'Website',
    dirname: __dirname,
    schema,
    credential_types: ['certificate', 'sha512'],
};

const category = genericResource(resource);

module.exports = category;
