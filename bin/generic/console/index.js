'use strict';

const Cli = require('lib/cli');
const Open = require('opn');
const Chalk = require('chalk');
const text = require('lib/text');

module.exports = (resource, url_func) => {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('console', {
        dirname: __dirname,
        description: `Open ${resource.title} console in web-browser`,
        resource: resource,
        options: Object.assign({}, resource.options, options),
        handler: async args => {
            const instance = await args.helpers.api.get(`${resource.url(args)}/${args[resource.name]}`);
            const url = url_func(args, instance);

            console.log('Attempting to open the following url in your browser: ');
            console.log();
            console.log(Chalk.underline(url));
            console.log();
            console.log('If the console does not automatically open, please copy this address and paste it into your browser.');

            return Open(url).then(() => {});
        },
    });
};
