'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');
const complete = require('lib/complete');
const text = require('lib/text');

const schema = {
    name: {
        description: 'Role name',
        type: 'string',
        required: true,
        onCreate: true,
        onUpdate: true,
    },
    description: {
        description: 'Description name',
        type: 'string',
        required: false,
        onCreate: true,
        onUpdate: true,
    },
    type: {
        description: 'Role type name or ID',
        type: 'string',
        required: false,
        onCreate: true,
        destBody: 'service',
        complete: complete.completeService('policy'),
    },
    tags: {
        virtual: true,
        onCreate: true,
    },
};

const resource = {
    name: 'role',
    defaultQuery: '[].{id:id, name:name, tags:join(\',\',keys(tag || `{}`) ), permissions:join(\', \',permission[].value) }',
    url: (args) => `iam/project/${args.project}/role`,
    plugins: genericDefaults.plugins,
    earlyAdoptersOnly: true,
    extraCommands: ['create', 'service', 'update', 'access/project'],
    title: 'Role',
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

category.addChild(require('./permission')(actionDefault));

module.exports = category;
