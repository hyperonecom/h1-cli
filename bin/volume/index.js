'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
const complete = require('lib/complete');

const schema = {
    name: {
        description: 'Volume name',
        type: 'string',
        required: true,
        onCreate: true,
    },
    type: {
        description: 'Volume type ID or name',
        type: 'string',
        required: true,
        onCreate: true,
        destBody: 'service',
        complete: complete.completeService('volume'),
    },
    size: {
        description: 'Volume size in GiB',
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
    title: 'Volume',
    defaultQuery: '[].{id:id, name:name, type:type, size:size, state:state, tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'volume',
    plugins: genericDefaults.plugins,
    extraCommands: ['resize', 'create'],
    schema,
    dirname: __dirname,
    earlyAdoptersOnly: true,
};

const category = genericResource(resource);

module.exports = category;
