'use strict';

const Cli = require('structured-cli');

const options = {
    'zone-name': {
        description: 'DNS zone name',
        type: 'string',
        required: true
    }
};

const handle = (args) => {

    const url = `${args.$node.parent.config.url(args)}`;

    return args.helpers.api.post(url, {
        name: args['zone-name']
    }).then(result => args.helpers.sendOutput(args, result));
};

module.exports = (resource) => Cli.createCommand('create', {
    description: `Create ${resource.title}`,
    plugins: resource.plugins,
    options: Object.assign({}, options, resource.options),
    handler: handle
});
