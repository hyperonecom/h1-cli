'use strict';
const text = require('lib/text');
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
const genericAction = require('bin/generic/action');
const complete = require('lib/complete');

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
        complete: complete.completeService('agent'),
    },
    credentials: {
        virtual: true,
        onCreate: true,
    },
    tags: {
        virtual: true,
        onCreate: true,
        onUpdate: false,
    },
    enabledServices: {
        description: 'Enabled service',
        type: 'string',
        append: [],
        action: 'append',
        onUpdate: true,
    },
};

const resource = {
    name: 'agent',
    defaultQuery: '[].{id:id, name:name, type:flavour, state:state, tags:join(\',\',keys(tag || `{}`) ) }',
    url: () => 'agent',
    plugins: genericDefaults.plugins,
    extraCommands: ['create', 'transfer', 'update'],
    dirname: __dirname,
    earlyAdoptersOnly: true,
    title: 'Agent',
    schema,
    credential_types: ['ssh'],
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

category.addChild(require('bin/generic/inspect')(resource));
category.addChild(require('./resource')(actionDefault));
category.addChild(require('../generic/credential')(resource));

category.addChild(genericAction(actionDefault, 'suspend'));
category.addChild(genericAction(actionDefault, 'start'));

module.exports = category;
