'use strict';

const Cli = require('structured-cli');

const options = {
    name: {
        description: 'IMAGE name',
        type: 'string',
        required: true
    },
    description: {
        description: 'IMAGE description',
        type: 'string'
    },
    'vm-id': {
        description: 'VM id',
        type: 'string',
        required: true
    }
};

module.exports = Cli.createCommand('create', {
    description: 'IMAGE create',
    plugins: [
        require('../_plugins/loginRequired'),
        require('../_plugins/tenantRequired'),
        require('../_plugins/outputFormat'),
        require('../_plugins/api'),
        require('../_plugins/interactiveOptions')
    ],
    options: options,
    handler: handleResourceCreate
});


function handleResourceCreate(args) {

    return args.helpers.api.post('image', {
        name: args.name
      , vm: args['vm-id']
      , description: args.description
    })
    .then(result => args.helpers.sendOutput(args, result));
};
