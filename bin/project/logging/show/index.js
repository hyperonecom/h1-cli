'use strict';

const Cli = require('lib/cli');

module.exports = resource => Cli.createCommand('show', {
    description: `Show ${resource.title}`,
    dirname: __dirname,
    plugins: resource.plugins,
    options: resource.options,
    handler: args => args.helpers.api
        .get(resource.url(args))
        .then(result => args.helpers.sendOutput(args, result)),
});
