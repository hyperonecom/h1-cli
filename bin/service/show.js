'use strict';

const Cli = require('structured-cli');

const options = {};

const params = {
    'id': {
        description: 'Resource identifier'
        , type: 'string'
        , required: true
    }
};


module.exports = Cli.createCommand('show', {
    description: 'Resource show'
    , plugins: [
        require('bin/_plugins/loginRequired')
        , require('bin/_plugins/tenantRequired')
        , require('bin/_plugins/outputFormat')
        , require('bin/_plugins/api')
    ]
    , options: options
    , params: params
    , handler: handleResourceShow
});


function handleResourceShow(args) {

    return args.helpers.api.get(`service/${args.id}`)
    .then(result => args.helpers.sendOutput(args, result));
}
