'use strict';

const genericResource = require('bin/generic');
const defaults = require('bin/generic/defaults');
const addTrailingDot = require('../lib').addTrailingDot;

const schema = {
    name: {
        description: 'DNS zone name',
        type: addTrailingDot,
        required: true,
        onCreate: true,
    },
    type: {
        description: 'Zone type name or ID',
        type: 'string',
        required: true,
        onCreate: true,
        destBody: 'service',
    },
    tags: {
        virtual: true,
        onCreate: true,
    },
};
const resource = {
    name: 'zone',
    defaultQuery: '[].{id:id,name:name, flavour:flavour}',
    plugins: defaults.plugins,
    url: () => 'zone',
    title: 'DNS Zone',
    schema,
    dirname: __dirname,
    commands: ['create', 'history', 'tag', 'list', 'show', 'delete'],
};

const category = genericResource(resource);

category.addChild(require('./import')(resource));
category.addChild(require('./export')(resource));

module.exports = category;
