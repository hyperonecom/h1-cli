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
};
const resource = {
    name: 'zone',
    defaultQuery: '[].{id:_id,name:name}',
    plugins: defaults.plugins,
    url: () => 'dns/zone',
    title: 'DNS zone',
    schema,
    skipTag: true,
    dirname: __dirname,
    commands: ['create', 'list', 'show', 'delete'],
};

const category = genericResource(resource);

category.addChild(require('./import')(resource));
category.addChild(require('./export')(resource));

module.exports = category;
