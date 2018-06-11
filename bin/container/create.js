'use strict';

const Cli = require('structured-cli');

const options = {
    name: {
        description: 'Name'
      , type: 'string'
      , required: true
    }
  , image: {
        description: 'Image'
      , type: 'string'
      , required: true
    }
  , type: {
        description: 'Type'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('create', {
    description: `${resource.title} create`
  , plugins: resource.plugins
  , options: Object.assign({}, options, resource.options)
  , handler: args => {

        const body = {
            name: args.name
          , image: args.image
          , service: args.type
        };

        return args.helpers.api
            .post(resource.url(args), body)
            .then(result => args.helpers.sendOutput(args, result));
    }
});
