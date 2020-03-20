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

    return Cli.createCommand('check', {
        description: `Check access rights for ${resource.title}`,
        plugins: resource.plugins,
        params: resource.params,
        options: Object.assign({}, resource.options, options),
        dirname: __dirname,
        handler: async args => {
            args.$node.parent.config.defaultQuery = '[].{permission:@}';
            delete args.$node.parent.config.transform;
            const result = await args.helpers.api
                .get('/iam/auth/permission', {
                    resource: `/${resource.url(args)}/${args[resource.name]}`,
                });
            return args.helpers.sendOutput(args, result);
        },
    });
};
