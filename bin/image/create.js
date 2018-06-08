'use strict';

const Cli = require('structured-cli');

const options = {
    name: {
        description: 'Name of image'
      , type: 'string'
      , required: true
    }
  , description: {
        description: 'Description of image'
      , type: 'string'
    }
  , vm: {
        description: 'Virtual machine name or ID'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('create', {
    description: `Create ${resource.title}`
  , plugins: resource.plugins
  , options: options
  , handler: args => args.helpers.api
        .post('image', {
            name: args.name
          , vm: args.vm
          , description: args.description
        })
        .then(result => args.helpers.sendOutput(args, result))
});
