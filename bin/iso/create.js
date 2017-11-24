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

module.exports = Cli.createCommand('create', {
    description: 'ISO import'
  , plugins: [
        require('bin/_plugins/loginRequired')
      , require('bin/_plugins/tenantRequired')
      , require('bin/_plugins/outputFormat')
      , require('bin/_plugins/api')
    ]
  , options: options
  , handler: args => args.helpers.api
        .post('iso', { name: args.name, source: args.source })
        .then(result => args.helpers.sendOutput(args, result))
});
