'use strict';

const Cli = require('lib/cli');

const options = {
    follow: {
        description: 'Follow log output',
        type: 'boolean',
        required: false,
    },
};

module.exports = resource => Cli.createCommand('logs', {
    description: `${resource.title} logs`,
    plugins: resource.plugins,
    options: Object.assign({}, resource.options, options),
    handler: args => new Promise((resolve, reject) => args.helpers.api
        .raw('get', `${resource.url(args)}/logs?follow=${args.follow}`)
        .pipe(process.stdout)
        .on('error', reject)
        .on('end', resolve)
    ),
});
