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
  , expose: {
        description: 'Expose container to the world using http/https'
      , type: 'boolean'
      , required: false
    }
  , env: {
        description: 'Add enviroment variable'
      , type: 'string'
      , action: 'append'
      , defaultValue: []
      , required: false
    }
};

module.exports = resource => Cli.createCommand('create', {
    description: `${resource.title} create`
  , plugins: resource.plugins
  , options: Object.assign({}, options, resource.options)
  , handler: args => {

        const env = {};
        args.env.forEach(value => {
            const [k, v] = value.split('=');
            env[k] = v;
        });

        const body = {
            name: args.name
          , image: args.image
          , service: args.type
          , expose: args.expose
          , env: env
        };

        return args.helpers.api
            .post(resource.url(args), body)
            .then(result => args.helpers.sendOutput(args, result));
    }
});
