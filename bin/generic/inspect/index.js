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

    return Cli.createCommand('inspect', {
        description: `Inspect of ${resource.title}`,
        dirname: __dirname,
        plugins: [
            require('bin/_plugins/loginRequired'),
            require('bin/_plugins/projectRequired'),
            // require('bin/_plugins/outputFormat'),
            require('bin/_plugins/api'),
        ],
        resource: resource,
        options: Object.assign({}, resource.options, options),
        handler: async args => args.helpers.api
            .get(`${resource.url(args)}/${args[resource.name]}/inspect`),
    });
};

