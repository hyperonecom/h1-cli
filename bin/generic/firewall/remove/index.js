'use strict';

const Cli = require('lib/cli');


module.exports = resource => Cli.createCommand('remove', {
    description: `Remove firewall from ${resource.title}`,
    dirname: __dirname,
    plugins: resource.plugins,
    resource: resource,
    options: resource.options,
    handler: args => args.helpers.api
        .post(`${resource.url(args)}/actions/firewall_remove`)
        .then(result => args.helpers.sendOutput(args, result)),
});
