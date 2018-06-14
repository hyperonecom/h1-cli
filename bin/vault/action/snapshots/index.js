'use strict';

const Cli = require('lib/cli');

const options = {
    vault: {
        description: 'Vault ID or name'
      , type: 'string'
      , required: true
    },
    name: {
        description: 'Snapshot name'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('snapshot', {
        description: `Perform a snapshot of ${resource.title}`
        , dirname: __dirname
        , plugins: resource.plugins
        , options: Object.assign({}, resource.options, options)
        , params: resource.params
        , handler: args => args.helpers.api.post(`${resource.url(args)}/${args.vault}/actions/snapshot`, {
            data: {
                name: args.name
            }
        }).then(result => args.helpers.sendOutput(args, result))
    });
