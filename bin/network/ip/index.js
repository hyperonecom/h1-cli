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
    url: args => `network/${args.network}/ip`,
    plugins: defaults.plugins,
    commands: ['list', 'show', 'delete', 'service'],
    options: options,
    title: 'IP address',
    context: {
        showParams: '--network my-network',
        deleteParams: '--network my-network',
    },
};

const category = genericResource(resource);

const childDefaults = Object.assign({}, resource, {
    options: Object.assign({}, options, {
        ip: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
    }),
    dirname: __dirname,
});


category.addChild(require('./create')(resource));
category.addChild(require('bin/generic/tag')(Object.assign({}, childDefaults, {
    url: () => 'ip',
})));

module.exports = category;
