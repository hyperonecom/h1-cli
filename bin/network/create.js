'use strict';

const Cli = require('structured-cli');

const options = {
    name: {
        description: 'Name',
        type: 'string',
        required: true
    }
};

module.exports = Cli.createCommand('create', {
    description: 'Network create'
  , plugins: [
        require('bin/_plugins/loginRequired')
      , require('bin/_plugins/tenantRequired')
      , require('bin/_plugins/outputFormat')
      , require('bin/_plugins/api')
    ]
  , options: options
  , handler: handler
});

function handler(args) {
    return args.helpers.api
        .post('network', { name: args.name })
        .then(result => args.helpers.sendOutput(args, result))
    ;
}
