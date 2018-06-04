'use strict';

const Cli = require('structured-cli');

const options = {
    name: {
        description: 'Name'
        ,type: 'string'
        ,required: true
    }
};

module.exports = resource => Cli.createCommand('add', {
    description: 'Add'
  , plugins: resource.plugins
  , params: resource.params
  , options: options
  , handler: args => args.helpers.api
        .post(args.$node.parent.config.url(args), { name: args.name })
        .then(result => args.helpers.sendOutput(args, result))
});
