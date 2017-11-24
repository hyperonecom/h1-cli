'use strict';

const Cli = require('structured-cli');

const params = {
    id: {
        description: 'Resource identifier'
      , type: 'string'
      , required: true
    }
};

const options = {
    port: {
        description: 'Port to connect'
      , type: 'string'
      , defaultValue: '1'
    }
};

module.exports = resource => Cli.createCommand('log', {
    description: 'Log Serial Console buffer'
  , plugins: resource.plugins
  , params: params
  , options: Object.assign(options, resource.options)
  , handler: handler
});

const handler = args => args.helpers.api.get(`/vm/${args.id}/serialport/${args.port}`).then(data => console.log(data));
