'use strict';

const Cli = require('structured-cli');
const genericDefaults = require('bin/generic/defaults');

const options = {
    name: {
        description: 'Name',
        type: 'string',
        required: true
    }
};

module.exports = Cli.createCommand('create', {
    description: 'Network create'
  , plugins: genericDefaults.plugins
  , options: options
  , handler: handler
});

function handler(args) {
    return args.helpers.api
        .post('network', { name: args.name })
        .then(result => args.helpers.sendOutput(args, result))
    ;
}
