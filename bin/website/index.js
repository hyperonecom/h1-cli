'use strict';
const genericDefaults = require('bin/generic/defaults');
const genericAction = require('bin/generic/action');
const genericResource = require('bin/generic');
const text = require('lib/text');
const complete = require('lib/complete');

const schema = {
    name: {
        description: 'Website name',
        type: 'string',
        required: true,
        onCreate: true,
    },
    type: {
        description: 'Website type name or ID',
        type: 'string',
        required: true,
        onCreate: true,
        destBody: 'service',
        complete: complete.completeService('website'),
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
    image: {
        description: 'Website image',
        type: 'string',
        required: true,
        onUpdate: true,
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
    'source-website': {
        description: 'Website ID or name which contains Snapshot',
        type: 'string',
        destBody: 'source.website',
        required: false,
        onCreate: true,
    },
    'source-snapshot': {
        description: 'Snapshots to use as base of new Website',
        type: 'string',
        destBody: 'source.snapshot',
        required: false,
        onCreate: true,
    },
};

const resource = {
    name: 'website',
    defaultQuery: '[].{id:id, name:name, image:image, domains:join(\',\',domain), state:state, tags:join(\',\',keys(tag || `{}`) ) }',
    url: args => `website/${args.location}/project/${args.project}/instance`,
    plugins: genericDefaults.plugins,
    earlyAdoptersOnly: true,
    extraCommands: ['ssh', 'sftp', 'start', 'stop', 'credential', 'update', 'log', 'transfer'],
    title: 'Website',
    dirname: __dirname,
    schema,
    credential_types: ['ssh', 'sha512'],
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));

category.addChild(require('./snapshot')(resource));
category.addChild(require('./link')(resource));

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

category.addChild(genericAction(actionDefault, 'restart'));
category.addChild(require('./env')(actionDefault));

module.exports = category;
