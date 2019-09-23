'use strict';

const text = require('lib/text');
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
    url: () => 'ip',
    plugins: defaults.plugins,
    commands: ['show', 'delete'],
    options: options,
    title: 'IP address',
    context: {
        showParams: '--network my-network',
        deleteParams: '--network my-network',
        serviceListParams: '--network my-network',
    },
};

const category = genericResource(resource);

const childDefaults = { ...resource, options: { ...options, ip: {
    description: `${text.toTitleCase(resource.title)} ID or name`,
    type: 'string',
    required: true,
}},
dirname: __dirname};


const childIpDefaults = { ...childDefaults, url: () => 'ip'};

category.addChild(require('./create')(resource));

category.addChild(require('bin/generic/list')({ ...resource, url: args => `ip?network=${args.network}`}));

category.addChild(require('bin/generic/service')(childIpDefaults));
category.addChild(require('bin/generic/tag')(childIpDefaults));

module.exports = category;
