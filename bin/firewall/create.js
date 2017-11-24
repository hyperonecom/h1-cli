'use strict';

const Cli = require('structured-cli');

const options = {
    name: {
        description: 'Name',
        type: 'string',
        required: true
    }
};

const handler = args => args.helpers.api.post('firewall', { name: args.name }).then(result => args.helpers.sendOutput(args, result));

module.exports = resource => Cli.createCommand('create', {
    description: 'Create'
  , options: options
  , plugins: resource.plugins
  , handler: handler
});
