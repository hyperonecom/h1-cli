'use strict';
const text = require('lib/text');
const Cli = require('lib/cli');

module.exports = (resource, action) => {
    const options = {
        [resource.name]: {
            description: 'Invitation ID',
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand(action, {
        description: `${text.toTitleCase(action)} ${resource.title}`,
        options: Object.assign({}, resource.options, options),
        dirname: __dirname,
        resource: resource,
        context: {
            actionTitle: text.toTitleCase(action),
        },
        handler: async args => {
            await args.helpers.api.post(`${resource.url(args)}/${args[resource.name]}/${action}`);
            console.error(`Successfully ${action}ed invitation.`);
        },
    });
};
