'use strict';

const Cli = require('structured-cli');

module.exports = resource => Cli.createCommand('create', {
    description: 'IP create'
  , plugins: [
        require('bin/_plugins/loginRequired')
      , require('bin/_plugins/tenantRequired')
      , require('bin/_plugins/outputFormat')
      , require('bin/_plugins/api')
    ]
  , options: resource.options
  , handler: handler
});

function handler(args) {
    return args.helpers.api
        .post(`network/${args['network-id']}/ip`, { })
        .then(result => args.helpers.sendOutput(args, result))
    ;
}
