'use strict';

const Cli = require('structured-cli');
const genericDefaults = require('bin/generic/defaults');

module.exports = Cli.createCommand('create', {
    description: 'IP create'
  , plugins: genericDefaults.plugins
  , handler: handler
});

function handler(args) {
    return args.helpers.api
        .post('ip', { })
        .then(result => args.helpers.sendOutput(args, result))
    ;
}
