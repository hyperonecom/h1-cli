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
};

const resource = {
    name: 'registry',
    defaultQuery: '[].{id:_id,name:name,type:type,size:size,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'registry',
    plugins: genericDefaults.plugins,
    extraCommands: ['create', 'start', 'stop', 'transfer'],
    dirname: __dirname,
    earlyAdoptersOnly: true,
    title: 'Registry',
    schema,
    credential_types: ['sha512'],
};

const actionDefault = Object.assign({}, resource, {
    options: {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
    },
    url: args => `${resource.url(args)}/${args[resource.name]}`,
    dirname: __dirname,
});

const category = genericResource(resource);

category.addChild(require('./repository')(actionDefault));
category.addChild(require('../generic/credential')(resource));

module.exports = category;
