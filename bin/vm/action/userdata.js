'use strict';

const Cli = require('structured-cli');
const fs = require('lib/fs');

const options = {
    'userdata-file': {
        description: 'Read userdata from file'
        , type: 'string'
        , required: true
    }
};

const params = {
    id: {
        description: 'VM name or ID'
        , type: 'string'
        , required: true
    }
};

module.exports = Cli.createCommand('userdata', {
    description: 'Userdata for VM'
    , plugins: [
        require('bin/_plugins/loginRequired')
        , require('bin/_plugins/tenantRequired')
        , require('bin/_plugins/outputFormat')
        , require('bin/_plugins/api')
    ]
    , options: options
    , params: params
    , handler: args => fs.getFileContent(args['userdata-file'])
        .then(content => args.helpers.api.patch(`vm/${args.id}`, {
            userMetadata: content.toString('base64')
        }))
        .then(result => args.helpers.sendOutput(args, result))
});
