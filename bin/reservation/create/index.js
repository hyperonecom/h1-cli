'use strict';

const Cli = require('lib/cli');

const options = {
    name: {
        description: 'Name',
        type: 'string',
        required: true,
    },
    type: {
        description: 'Type',
        type: 'string',
        required: true,
    },
};

module.exports = resource => Cli.createCommand('create', {
    description: `Create ${resource.title}`,
    plugins: resource.plugins,
    options: Object.assign({}, options, resource.options),
    genericOptions: ['tag'],
    handler: args => args.helpers.api
        .post(resource.url(args), {
            name: args.name,
            tag: require('lib/tags').createTagObject(args.tag),
            service: args.type,
        })
        .then(result => args.helpers.sendOutput(args, result)),
});
