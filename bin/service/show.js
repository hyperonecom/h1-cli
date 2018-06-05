'use strict';

const Cli = require('structured-cli');
const genericDefaults = require('bin/generic/defaults');

const options = {};

const params = {
    'id': {
        description: 'Resource identifier',
        type: 'string',
        required: true
    }
};


module.exports = Cli.createCommand('show', {
    description: 'Resource show',
    plugins: genericDefaults.plugins,
    options: options,
    params: params,
    handler: handleResourceShow
});


function handleResourceShow(args) {

    return args.helpers.api.get(`service/${args.id}`)
    .then(result => args.helpers.sendOutput(args, result));
}
