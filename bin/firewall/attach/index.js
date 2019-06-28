'use strict';

const Cli = require('lib/cli');
const text = require('lib/text');

module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
        network: {
            description: 'Network ID or name',
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('attach', {
        dirname: __dirname,
        description: `Attach ${resource.title}`,
        plugins: resource.plugins,
        options: Object.assign({}, resource.options, options),
        params: resource.params,
        handler: args => args.helpers.api
            .post(`firewall/${args.firewall}/actions/attach`, {
                network: args.network,
            })
            .then(result => args.helpers.sendOutput(args, result)),
    });
};
