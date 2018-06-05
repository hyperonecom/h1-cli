'use strict';

const Cli = require('structured-cli');

const options = {
    'new-name': {
        description: 'New name'
      , type: 'string'
      , required: true
    }
};

const params = {
    id: {
        description: 'Resource identifier'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('rename', {
    description: 'Resource rename'
  , plugins: resource.plugins
  , params: params
  , options: Object.assign({}, options, resource.options)
  , handler: args => args.helpers.api
        .patch(`${args.$node.parent.config.url(args)}/${args.id}`, {
            name: args['new-name']
        })
        .then(result => args.helpers.sendOutput(args, result))
});
