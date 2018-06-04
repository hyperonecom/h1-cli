'use strict';

const Cli = require('structured-cli');

const path = require('path');
const fs = require('fs');

const options = {
    name: {
        description: 'Name'
        , type: 'string'
        , required: true
    }
    , 'sshkey-file': {
        description: 'Public SSH key filename'
        , type: 'string'
        , required: true
    }
};

module.exports = resource => Cli.createCommand('add', {
    description: 'Adding public SSH key'
  , plugins: resource.plugins
  , params: resource.params
  , options: options
  , handler: args => {

        const filename = path.resolve(args['sshkey-file']);

        if (!fs.existsSync(filename)) {
            throw Cli.error.notFound(`SSH key file not found: ${filename}`);
        }

        const body = {
            name: args.name
          , type: 'ssh'
          , value: fs.readFileSync(filename, 'utf8')
        };

        return args.helpers.api
            .post(args.$node.parent.config.url(args), body)
            .then(result => args.helpers.sendOutput(args, result))
        ;
    }
});
