'use strict';

const Cli = require('structured-cli');

const options = {
    size: {
        description: 'New size'
      , type: 'int'
      , required: true
    }
};

const params = {
    id: {
        description: 'Resource id'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('resize', {
    description: 'Resource resize'
  , plugins: resource.plugins
  , params: params
  , options: options
  , handler: args => args.helpers.api
        .post(`${resource.url(args)}/${args.id}/actions`, {
            name: 'resize'
          , data: {
                size: args.size
            }
        })
        .then(result => args.helpers.sendOutput(args, result))
});
