'use strict';

const Cli = require('lib/cli');

const options = {
    name: {
        description: 'Name'
      , type: 'string'
      , required: true
    }
  , password: {
        description: 'Password'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('add', {
    dirname: __dirname
  , description: 'Add password to Vault'
  , plugins: resource.plugins
  , params: resource.params
  , options: Object.assign({}, resource.options, options)
  , handler: args => args.helpers.api
        .post(args.$node.parent.config.url(args), {
            name: args.name
          , type: 'sha512'
          , value: args.password
        })
        .then(result => args.helpers.sendOutput(args, result))
});
