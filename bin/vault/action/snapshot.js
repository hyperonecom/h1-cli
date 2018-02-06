'use strict';

const Cli = require('structured-cli');

const options = {
    name: {
        description: 'Name'
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

module.exports = resource => Cli.createCommand('snapshot', {
    description: 'snapshot'
  , plugins: resource.plugins
  , options: Object.assign({}, resource.options, options)
  , params: Object.assign({}, resource.params, params)
  , handler: args => args.helpers.api.post(`${resource.url(args)}/${args.id}/actions`, {
        name: 'snapshot',
        data: {
            name: args.name
        }
    })
    .then(result => args.helpers.sendOutput(args, result))
});
