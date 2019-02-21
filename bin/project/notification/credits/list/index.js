'use strict';

const Cli = require('lib/cli');

module.exports = resource => Cli.createCommand('list', {
    description: 'List credits limits',
    dirname: __dirname,
    plugins: [
        require('bin/_plugins/loginRequired'),
        require('bin/_plugins/outputFormat'),
        require('bin/_plugins/api'),
    ],
    options: resource.options,
    handler: args => args.helpers.api
        .get(resource.url(args))
        .then(result => args.helpers.sendOutput(args, result)),
});
