'use strict';

const Cli = require('lib/cli');

const text = require('lib/text');

module.exports = (resource, action) => {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
    };
    return Cli.createCommand(action, {
        description: `${text.toTitleCase(action)} ${resource.title}`,
        dirname: __dirname,
        resource: resource,
        options: Object.assign({}, options, resource.options),
        handler: args => args.helpers.api
            .post(`${resource.url(args)}/${args[resource.name]}/actions/${action}`, {})
            .then(result => args.helpers.sendOutput(args, result)),
    });
};
