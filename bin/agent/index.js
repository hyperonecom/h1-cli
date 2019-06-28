'use strict';
const text = require('lib/text');
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic/root');

const schema = {
    name: {
        description: 'Agent name',
        type: 'string',
        required: true,
        onCreate: true,
    },
    type: {
        description: 'Agent type name or ID',
        type: 'string',
        required: true,
        onCreate: true,
        destBody: 'service',
    },
    enabledServices: {
        description: 'Enabled services',
        command: 'enabled-service',
        name: 'service',
        type: 'string',
        required: false,
        action: 'append',
        onCreate: false,
        onUpdate: true,
    },
};

const resource = {
    name: 'agent',
    defaultQuery: '[].{id:_id,name:name,type:type,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'agent',
    plugins: genericDefaults.plugins,
    dirname: __dirname,
    extraCommands: ['create'],
    genericAction: true,
    earlyAdoptersOnly: true,
    title: 'Agent',
    schema,
    credential_types: ['certificate'],
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

category.addChild(require('./resource')(actionDefault));

module.exports = category;
