'use strict';

const Cli = require('lib/cli');

module.exports = resource => {
    const options = {
        organisation: {
            description: 'New organisation',
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('transfer', {
        description: `Transfer ${resource.title} to other organisation`,
        dirname: __dirname,
        resource: resource,
        options: Object.assign({}, resource.options, options),
        handler: args => args.helpers.api
            .put(`${resource.url(args)}/transfer`, {
                organisation: args.organisation,
            })
            .then(result => args.helpers.sendOutput(args, result)),
    });
};
