'use strict';

const Cli = require('structured-cli');

const options = {};

module.exports = Cli.createCommand('list', {
    description: 'Resource list'
    , plugins: [
        require('bin/_plugins/loginRequired')
        , require('bin/_plugins/tenantRequired')
        , require('bin/_plugins/outputFormat')
        , require('bin/_plugins/api')
    ]
    , options: options
    , handler: handleResourceList
});


function handleResourceList(args) {

    return args.helpers.api.get('service')
    .then(result => args.helpers.sendOutput(args, result));

};
