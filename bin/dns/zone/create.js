'use strict';

const Cli = require('structured-cli');

const options = {
    'zone-name': {
        description: 'Dns zone name',
        type: 'string',
        required: true
    }
};


module.exports = function(resource) {
    return Cli.createCommand('create', {
        description: 'Create dns zone',
        plugins: resource.plugins,
        options: Object.assign({}, options, resource.options),
        handler: handleCommand(resource)
    });
};

function handleCommand() {
    return function(args) {

        const url = `${args.$node.parent.config.url(args)}`;

        return args.helpers.api.post(url, {
            name: args['zone-name']
        })
        .then(result => args.helpers.sendOutput(args, result));
    };
}
