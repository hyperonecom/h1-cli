'use strict';
const text = require('lib/text');
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const schema = {
    name: {
        description: 'Registry name',
        type: 'string',
        required: true,
        onCreate: true,
    },
    type: {
        description: 'Registry type name or ID',
        type: 'string',
        required: true,
        onCreate: true,
        destBody: 'service',
    },
    credentials: {
        virtual: true,
        onCreate: true,
    },
    domain: {
        description: 'Domain name',
        type: 'string',
        append: [],
        action: 'append',
        required: true,
        onUpdate: true,
        onCreate: false,
    },
    tags: {
        virtual: true,
        onCreate: true,
        onUpdate: false,
    },
};

const resource = {
    name: 'registry',
    defaultQuery: '[].{id:id, name:name, type:flavour, size:sizeUsed, state: state, tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'registry',
    plugins: genericDefaults.plugins,
    extraCommands: ['create', 'start', 'stop', 'transfer', 'update', 'credential'],
    dirname: __dirname,
    earlyAdoptersOnly: true,
    title: 'Registry',
    schema,
    credential_types: ['sha512'],
};

const childDefaults = Object.assign({}, resource, {
    options: {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
    },
    url: args => `${resource.url(args)}/${args[resource.name]}`,
});

const category = genericResource(resource);

category.addChild(require('./repository')(childDefaults));

module.exports = category;
