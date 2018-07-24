'use strict';

const Cli = require('lib/cli');

const options = {
    tag: {
        description: 'New tag',
        type: 'string',
        action: 'append',
        required: true,
    },
};

const handler = args => {
    const body = {};
    args.tag.forEach(tag => {
        const [ key, value ] = tag.split('=');
        body[key] = value || '';
    });

    return args.helpers.api
        .patch(args.$node.parent.config.url(args), body)
        .then(result => args.helpers.sendOutput(args, result));
};

module.exports = (resource, subresource) => Cli.createCommand('add', {
    description: `Add a tag to ${resource.title}`,
    plugins: subresource.plugins,
    params: subresource.params,
    dirname: __dirname,
    options: Object.assign({}, subresource.options, options),
    handler: handler,
});
