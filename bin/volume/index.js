'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const schema = {
    name: {
        description: 'Disk name',
        type: 'string',
        required: true,
        onCreate: true,
    },
    type: {
        description: 'Disk type ID or name',
        type: 'string',
        required: true,
        onCreate: true,
        destBody: 'service',
    },
    size: {
        description: 'Disk size in GiB',
        type: 'int',
        required: true,
        onCreate: true,
    },
    credentials: {
        virtual: true,
        onCreate: true,
    },
    tags: {
        virtual: true,
        onCreate: true,
    },
};

const resource = {
    name: 'volume',
    defaultQuery: '[].{id:_id,name:name,type:type,size:size,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'volume',
    plugins: genericDefaults.plugins,
    extraCommands: ['resize', 'create'],
    schema,
    dirname: __dirname,
    earlyAdoptersOnly: true,
    title: 'volume',
};

const category = genericResource(resource);

module.exports = category;
