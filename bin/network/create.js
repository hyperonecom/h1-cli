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


module.exports = resource => Cli.createCommand('create', {
    description: `Create ${resource.title}`
  , plugins: genericDefaults.plugins
  , options: options
  , handler: (args) => args.helpers.api
        .post('network', { name: args.name })
        .then(result => args.helpers.sendOutput(args, result))
});

