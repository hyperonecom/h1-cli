'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
const complete = require('lib/complete');
const text = require('lib/text');

const schema = {
    name: {
        description: 'Policy name',
        type: 'string',
        required: true,
        onCreate: true,
        onUpdate: true,
    },
    role: {
        description: 'Role ID',
        type: 'string',
        required: true,
        onCreate: true,
    },
    type: {
        description: 'Policy type name or ID',
        type: 'string',
        required: false,
        onCreate: true,
        destBody: 'service',
        complete: complete.completeService('policy'),
    },
    resource: {
        description: 'Resource ID',
        type: 'string',
        required: true,
        onCreate: true,
    },
    tags: {
        virtual: true,
        onCreate: true,
    },
};

const resource = {
    name: 'policy',
    defaultQuery: '[].{id:id, name:name, role:role, resource:resource, tags:join(\',\',keys(tag || `{}`) ) }',
    url: (args) => `iam/project/${args.project}/policy`,
    plugins: genericDefaults.plugins,
    earlyAdoptersOnly: true,
    extraCommands: ['create', 'update'],
    title: 'Policy',
    dirname: __dirname,
    schema,
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

category.addChild(require('./actor')(actionDefault));

module.exports = category;
