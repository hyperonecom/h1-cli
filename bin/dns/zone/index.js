'use strict';

const genericResource = require('bin/generic');
const defaults = require('bin/generic/defaults');
const addTrailingDot = require('../lib').addTrailingDot;

const schema = {
    name: {
        description: 'Zone name',
        type: addTrailingDot,
        required: true,
        onCreate: true,
    },
    'dns-name': {
        description: 'DNS zone name (zone name by default)',
        required: false,
        onCreate: true,
        destBody: 'dnsName',
        getValue: (args) => args['dns-name'] || args.name,
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
    defaultQuery: '[].{id:id, name:name, type:flavour, dnsName:dnsName, state:state, tags:join(\',\',keys(tag || `{}`) ) }',
    plugins: defaults.plugins,
    url: () => 'zone',
    title: 'DNS Zone',
    schema,
    dirname: __dirname,
    commands: ['create', 'rename', 'history', 'tag', 'list', 'show', 'delete'],
};

const category = genericResource(resource);

category.addChild(require('./import')(resource));
category.addChild(require('./export')(resource));

module.exports = category;
