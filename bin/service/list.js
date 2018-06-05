'use strict';

const Cli = require('structured-cli');
const genericDefaults = require('bin/generic/defaults');

const options = {};

module.exports = Cli.createCommand('list', {
    description: 'Resource list',
    plugins: genericDefaults.plugins,
    options: options,
    handler: handleResourceList
});


function handleResourceList(args) {

    return args.helpers.api.get('service')
    .then(result => args.helpers.sendOutput(args, result));

};
