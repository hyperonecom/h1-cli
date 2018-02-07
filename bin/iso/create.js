'use strict';

const Cli = require('structured-cli');

const options = {
    name: {
        description: 'ISO name'
      , type: 'string'
      , required: true
    }
  , source: {
        description: 'Source for ISO import (eg: url)'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('create', {
    description: 'ISO import'
  , plugins: resource.plugins
  , options: options
  , handler: args => args.helpers.api
        .post(resource.url(args), { name: args.name, source: args.source })
        .then(result => args.helpers.sendOutput(args, result))
});
