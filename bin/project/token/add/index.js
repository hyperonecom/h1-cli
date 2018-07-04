'use strict';

const Cli = require('lib/cli');

const options = {
    name: {
        description: 'Name',
        type: 'string',
        required: true,
    },
};

module.exports = resource => Cli.createCommand('add', {
    description: `Add ${resource.title}`,
    resource: resource,
    dirname: __dirname,
    options: Object.assign({}, resource.options, options),
    handler: args => args.helpers.api
        .post(args.$node.parent.config.url(args), { name: args.name })
        .then(result => args.helpers.sendOutput(args, result)),
});
