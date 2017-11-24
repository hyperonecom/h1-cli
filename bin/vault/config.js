'use strict';

const Cli = require('structured-cli');

const path = require('path');
const fs = require('fs');

const params = {
    id: {
        description: 'Resource identifier'
      , type: 'string'
      , required: true
    }
};

const options = {
    'file-keys': {
        description: 'SSH authorized keys'
      , type: 'string'
      , required: false
    }
  , 'file-shadow': {
        description: 'SSH password shadow'
      , type: 'string'
      , required: false
    }
};

module.exports = resource => Cli.createCommand('config', {
    description: 'Set SSH keys access'
  , plugins: resource.plugins
  , options: options
  , params: params
  , handler: args => {

        const config = {};

        if (args['file-keys']) {
            const filename = path.resolve(args['file-keys']);
            if (!fs.existsSync(filename)) {
                throw Cli.error.notFound(`file not found: ${filename}`);
            }

            config.keys = fs.readFileSync(filename, 'utf8');
        }

        if (args['file-shadow']) {
            const filename = path.resolve(args['file-shadow']);
            if (!fs.existsSync(filename)) {
                throw Cli.error.notFound(`file not found: ${filename}`);
            }

            config.shadow = fs.readFileSync(filename, 'utf8');
        }

        return args.helpers.api
            .post(`${resource.url(args)}/${args.id}/config`, config)
            .then(result => args.helpers.sendOutput(args, result));
    }
});
