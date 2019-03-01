'use strict';
const Cli = require('lib/cli');

module.exports = resource => Cli.createCommand('log', {
    description: `Logs of ${resource.title}`,
    dirname: __dirname,
    plugins: resource.plugins,
    options: resource.options,
    handler: args => args.helpers.api.get(`${resource.url(args)}/log`)
        .then(resource => args.helpers.sendOutput(args, resource)),
});
