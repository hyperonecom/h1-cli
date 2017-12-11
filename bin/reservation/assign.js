'use strict';

const Cli = require('structured-cli');

const options = {
    resource: {
        description: 'Resource to assign reservation id'
      , type: 'string'
      , required: true
    }
};

const params = {
    id: {
        description: 'Reservation Identifier'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('assign', {
    description: 'assign'
  , plugins: resource.plugins
  , params: Object.assign({}, params, resource.params)
  , options: Object.assign({}, options, resource.options)
  , handler: args => args.helpers.api
        .post(`${resource.url(args)}/${args.id}/actions`, { name: 'assign', data: { resource: args.resource } })
        .then(result => args.helpers.sendOutput(args, result))
});
