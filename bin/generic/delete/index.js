'use strict';

const Cli = require('lib/cli');

const interactive = require('lib/interactive');
const text = require('lib/text');

module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('delete', {
        description: `Delete ${resource.title}`,
        dirname: __dirname,
        plugins: [
            ...resource.plugins,
            require('bin/_plugins/confirmYes'),
        ],
        resource: resource,
        options: Object.assign({}, options, resource.options),
        handler: async args => {
            if (!args.yes) {
                const answer = await interactive.confirm(`Are you sure you want to delete resource "${args[resource.name]}"?`);
                if (answer.value !== true) {
                    throw Cli.error.cancelled('Canceled', undefined);
                }
            }

            const result = await args.helpers.api.delete(`${resource.url(args)}/${args[resource.name]}`, args.helpers.body || {});

            return args.helpers.sendOutput(args, result);
        },
    });
};
