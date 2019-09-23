'use strict';

const Cli = require('lib/cli');


module.exports = resource => {
    const options = {
        firewall: {

            description: 'Firewall ID or name',
            required: true,
        },
    };

    return Cli.createCommand('add', {
        description: `Add firewall to ${resource.title}`,
        dirname: __dirname,
        plugins: resource.plugins,
        resource: resource,
        options: { ...options, ...resource.options},
        handler: args => args.helpers.api
            .post(`${resource.url(args)}/actions/firewall_add`, {firewall: args.firewall})
            .then(result => args.helpers.sendOutput(args, result)),
    });
};
