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
    defaultQuery: '[].{id:_id,name:name,service:flavour,size:sizeUsed,created:createdOn,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'registry',
    plugins: genericDefaults.plugins,
    extraCommands: ['create', 'start', 'stop', 'transfer', 'credential'],
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
