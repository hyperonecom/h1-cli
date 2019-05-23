'use strict';
const Cli = require('lib/cli');
const text = require('lib/text');
const fs = require('fs');

module.exports = resource => {
    const options = {
        'log-file': {
            description: 'Path of output log file',
            type: path => fs.createWriteStream(path),
            defaultValue: process.stdout,
        },
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },

    };

    return Cli.createCommand('log', {
        description: `Live logs of ${resource.title}`,
        dirname: __dirname,
        plugins: resource.plugins,
        resource,
        options: Object.assign({}, options, resource.options),
        handler: async args => {
            const ws = await args.helpers.api.wsLogs(`${resource.url(args)}/${args[resource.name]}/log`);
            return new Promise((resolve, reject) => {
                ws.on('message', msg => args['log-file'].write(msg));
                ws.on('close', resolve);
                ws.on('error', reject);
            });
        },
    });
};
