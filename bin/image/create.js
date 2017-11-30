'use strict';

const Cli = require('structured-cli');

const options = {
    name: {
        description: 'IMAGE name'
      , type: 'string'
      , required: true
    }
  , description: {
        description: 'IMAGE description'
      , type: 'string'
    }
  , 'vm-id': {
        description: 'VM id'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('create', {
    description: 'IMAGE create'
  , plugins: resource.plugins
  , options: options
  , handler: args => args.helpers.api
        .post('image', {
            name: args.name
          , vm: args['vm-id']
          , description: args.description
        })
        .then(result => args.helpers.sendOutput(args, result))
});
