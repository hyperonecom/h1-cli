'use strict';

const Cli = require('lib/cli');

const options = {
    limit: {
        description: 'New limit of credits',
        required: true,
    },
};

module.exports = resource => Cli.createCommand('add', {
    description: 'Add credits limits',
    dirname: __dirname,
    plugins: [
        require('bin/_plugins/loginRequired'),
        require('bin/_plugins/outputFormat'),
        require('bin/_plugins/api'),
    ],
    options: Object.assign({}, resource.options, options),
    handler: args => args.helpers.api
        .get(resource.url(args))
        .then(levels => [
            ...levels,
            args.limit,
        ])
        .then(levels => args.helpers.api.put(resource.url(args), levels))
        .then(result => args.helpers.sendOutput(args, result)),
});
