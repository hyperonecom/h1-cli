'use strict';

const Cli = require('structured-cli');

const options = {
    name: {
        description: 'Disk name'
      , type: 'string'
      , required: true
    },
    type: {
        description: 'Disk type Id'
      , type: 'string'
      , required: true
    },
    size: {
        description: 'Disk size in GB'
      , type: 'int'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('create', {
    description: 'Disk create'
  , plugins: resource.plugins
  , options: options
  , handler: args => args.helpers.api
        .post(resource.url(args), {
            name: args.name
          , service: args.type
          , size: args.size
        })
        .then(result => args.helpers.sendOutput(args, result))
});
