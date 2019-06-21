'use strict';

const Cli = require('lib/cli');


module.exports = resource => {
    const options = {
        ['firewall']: Object.assign(
            {},
            {
                description: 'Firewall ID or name',
                required: true,
            },
        ),
    };

    return Cli.createCommand('add', {
        description: `Add firewall of ${resource.title}`,
        dirname: __dirname,
        plugins: resource.plugins,
        resource: resource,
        options: Object.assign({}, resource.options, options),
        handler: args => args.helpers.api
            .post(`${resource.url(args)}/actions/firewall_add`, {firewall: args.firewall})
            .then(result => args.helpers.sendOutput(args, result)),
    });
};
