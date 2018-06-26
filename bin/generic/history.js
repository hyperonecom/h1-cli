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
        plugins: resource.plugins,
        options: Object.assign({}, options, resource.options),
        params: resource.params,
        handler: args => {

            args.query = '[].{id:_id,name:name,createdBy:createdBy,queued:queued,state:state}';

            return args.helpers.api
                .get(`${args.$node.parent.config.url(args)}/${args[resource.name]}/queue`)
                .then(result => args.helpers.sendOutput(args, result));
        },
    });
};
