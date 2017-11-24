'use strict';

const Cli = require('structured-cli');

const options = {};

const params = {
    'vm-id': {
        description: 'Resource identifier',
        type: 'string',
        required: true
    }
};

module.exports = Cli.createCommand('queue', {
    description: 'Resource history',
    plugins: [
        require('../_plugins/loginRequired'),
        require('../_plugins/tenantRequired'),
        require('../_plugins/outputFormat'),
        require('../_plugins/api')
    ],
    options: options,
    params: params,
    handler: handleResourceHistory
});


function handleResourceHistory(args) {

    args.$node.parent.config.displayFields = ['_id', 'name', 'createdBy', 'queued', 'state'];

    return args.helpers.api.get(`vm/${args['vm-id']}/queue`)
    .then(result => args.helpers.sendOutput(args, result));
}
