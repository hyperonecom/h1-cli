'use strict';

const Cli = require('structured-cli');
const Open = require('opn');
const Chalk = require('chalk');

const params = {
    'vm-id': {
        description: 'VM id',
        type: 'string',
        required: true
    }
};


module.exports = Cli.createCommand('console', {
    description: 'Open VM console in webbrowser',
    plugins: [
        require('../_plugins/loginRequired'),
        require('../_plugins/tenantRequired'),
        require('../_plugins/outputFormat'),
        require('../_plugins/api')
    ],
    params: params,
    handler: handleVMConsole
});


function handleVMConsole(args) {

    const url = `https://console.hyperone.com/console/#/?scope=h1&username=${args['vm-id']}&password=${args.apiKey}&billingTenant=${args.profile.tenant._id}`;

    console.log('Attempting to open the following url in your browser: ');
    console.log();
    console.log(Chalk.underline(url));
    console.log();
    console.log('If the console does not automatically open, please copy this address and paste it into your browser.');

    return Open(url);
}
