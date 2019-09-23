'use strict';

const Cli = require('lib/cli');

const addTrailingDot = require('../../lib').addTrailingDot;
const recordOptions = require('../common').recordOptions;

const options = {
    name: {
        description: 'Record set name',
        type: 'string',
        required: true,
    },
    ttl: {
        description: 'Record set Time To Live (TTL)',
        type: 'int',
        defaultValue: 3600,
    },
};

module.exports = (resource, type) => Cli.createCommand('create', {
    dirname: __dirname,
    description: 'Create record set',
    plugins: resource.plugins,
    options: { ...options, ...resource.options, ...recordOptions},
    priority: 25,
    resource: resource,
    handler: args => {
        args.zone = addTrailingDot(args.zone);

        const data = {
            name: args.name,
            ttl: args.ttl,
            type: type.toUpperCase(),
            record: args.values.map(value => ({
                content: value,
                enabled: true,
            })),
        };

        return args.helpers.api
            .post(`${resource.url(args)}/recordset`, data)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
