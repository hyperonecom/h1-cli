'use strict';

const Cli = require('structured-cli');

const options = {
    name: {
        description: 'Vault name'
      , type: 'string'
      , required: true
    }
  , size: {
        description: 'Vault size in GB'
      , type: 'float'
      , required: true
    }
  , ssh: {
        description: 'SSH key ID or name that allows access'
      , type: 'string'
      , required: false
      , action: 'append'
      , defaultValue: []
    }
  , password: {
        description: 'Password to access Vault. Recommend using SSH keys'
      , type: 'string'
      , required: false
    }
};


module.exports = resource => Cli.createCommand('create', {
    description: `Create ${resource.title}`
  , plugins: resource.plugins
  , options: Object.assign({}, options, resource.options)
  , handler: args => {

        const passwords = [{
            name: 'initial-cli'
            , type: 'sha512'
            , value: args.password
        }];

        const certificates = args.ssh.map(x => ({
                name: x
                , type: 'ssh'
                , value: x
            }));

        const body = {
            name: args.name
          , size: args.size
          , credential: {
                password: passwords,
                certificate: certificates
            }
        };

        return args.helpers.api
            .post(resource.url(args), body)
            .then(result => args.helpers.sendOutput(args, result));
    }
});
