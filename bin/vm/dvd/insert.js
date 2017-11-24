'use strict';

const Cli = require('structured-cli');

const options = {
    'iso': {
        description: 'ISO id',
        type: 'string',
        required: true
    }
};

const params = {
    'id': {
        description: 'DVD drive identifier',
        type: 'string',
        required: true
    }
};


module.exports = function(resource) {
    return Cli.createCommand('insert', {
        description: 'Insert ISO into DVD drive',
        plugins: resource.plugins,
        params: params,
        options: Object.assign({}, options, resource.options),
        handler: handleResourceInsert(resource)
    });
};

function handleResourceInsert() {
    return function(args) {

        const url = `${args.$node.parent.config.url(args)}/${args.id}`;

        return args.helpers.api.put(url, {
            iso: args.iso
        })
        .then(result => args.helpers.sendOutput(args, result));
    };
}
