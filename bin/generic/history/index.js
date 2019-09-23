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

    return Cli.createCommand('history', {
        description: `History of ${resource.title}`,
        dirname: __dirname,
        options: { ...options, ...resource.options},
        resource: resource,
        handler: args => {
            args.query = '[].{id:id,name:name,createdBy:createdBy,queued:queued,state:state}';

            return args.helpers.api
                .get(`${resource.url(args)}/${args[resource.name]}/queue`)
                .then(result => args.helpers.sendOutput(args, result));
        },
    });
};
