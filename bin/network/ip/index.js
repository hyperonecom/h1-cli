'use strict';

const genericResource = require('bin/generic');
const defaults = require('bin/generic/defaults');

const options = {
    network: {
        description: 'Network name or ID',
        type: 'string',
        required: true,
    },
};

const resource = {
    name: 'ip',
    defaultQuery: require('bin/ip').config.defaultQuery,
    url: args => `network/${args.network}/ip`,
    plugins: defaults.plugins,
    commands: ['list', 'show', 'delete'],
    options: options,
    title: 'IP address',
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));

module.exports = category;
