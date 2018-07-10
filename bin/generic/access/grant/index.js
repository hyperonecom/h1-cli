'use strict';

const Cli = require('lib/cli');

const genericDefaults = require('bin/generic/defaults');
const text = require('lib/text');


module.exports = function(resource) {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
        project: {
            description: 'Project name or ID',
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('grant', {
        dirname: __dirname,
        description: `Grant access rights for ${resource.title}`,
        plugins: genericDefaults.plugins,
        options: options,
        resource: resource,
        handler: args => args.helpers.api
            .post(`${resource.name}/${args[resource.name]}/accessrights`, { identity: args.project })
            .then(result => args.helpers.sendOutput(args, result)),
    });
};
