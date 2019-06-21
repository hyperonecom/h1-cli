'use strict';

const Cli = require('lib/cli');


module.exports = resource => {
    return Cli.createCommand('remove', {
        description: `Remove firewall of ${resource.title}`,
        dirname: __dirname,
        plugins: resource.plugins,
        resource: resource,
        options: resource.options,
        handler: args => args.helpers.api
            .post(`${resource.url(args)}/actions/firewall_remove`)
            .then(result => args.helpers.sendOutput(args, result)),
    });
};
