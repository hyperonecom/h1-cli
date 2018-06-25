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
    };

    return Cli.createCommand('show', {
        description: `Show ${resource.title}`,
        // , dirname: __dirname
        plugins: resource.plugins,
        params: resource.params,
        options: Object.assign({}, resource.options, options),
        handler: args => args.helpers.api
            .get(`${resource.url(args)}/${args[resource.name]}`)
            .then(result => args.helpers.sendOutput(args, result)),
    });
};
