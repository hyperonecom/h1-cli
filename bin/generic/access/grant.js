'use strict';

const Cli = require('structured-cli');

const genericDefaults = require('bin/generic/defaults');
const text = require('lib/text');


module.exports = function(resource) {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true
        },
        project: {
            description: 'Project name or ID',
            type: 'string',
            required: true
        }
    };

    return Cli.createCommand('grant', {
        description: `Grant access rights for ${resource.title}`,
        plugins: genericDefaults.plugins,
        params: resource.params,
        options: options,
        handler: handleAccessGrant(resource)
    });
};

function handleAccessGrant(resource) {
    return function(args) {
        return args.helpers.api.post(`${resource.name}/${args.id}/accessrights`, {
            identity: args.project
        })
        .then(result => args.helpers.sendOutput(args, result));
    };
}
