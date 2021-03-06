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
        options: Object.assign({}, resource.options, options),
        handler: async args => {
            const prefetch = resource.prefetch_delete ? await args.helpers.api.get(`${resource.url(args)}/${args[resource.name]}`) : undefined;

            const label = prefetch ? prefetch.name || args[resource.name]: args[resource.name];

            if (!args.yes) {
                const answer = await interactive.confirm(`Are you sure you want to delete ${resource.title} "${label}"?`);
                if (answer.value !== true) {
                    throw Cli.error.cancelled('Canceled', undefined);
                }
            }

            const result = await args.helpers.api.delete(`${resource.url(args)}/${args[resource.name]}`, args.helpers.body || {});

            return args.helpers.sendOutput(args, prefetch || result);
        },
    });
};
