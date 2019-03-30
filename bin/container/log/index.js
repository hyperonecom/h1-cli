'use strict';
const Cli = require('lib/cli');
const fs = require('fs');
const request = require('superagent');

const options = {
    follow: {
        description: 'Output current messages in real time as they arrive',
        type: 'boolean',
    },
    'log-file': {
        description: 'Path of output log file',
        type: path => fs.createWriteStream(path),
        defaultValue: process.stdout,
    },
};

module.exports = resource => Cli.createCommand('log', {
    description: `Logs of ${resource.title}`,
    dirname: __dirname,
    plugins: resource.plugins,
    options: Object.assign({}, options, resource.options),
    handler: async args => {
        if (args.follow) {
            const url = await args.helpers.api
                .redirect_url(`${resource.url(args)}/log`, {ws: 1});
            const ws = await args.helpers.api.getWS(url, '');
            return new Promise((resolve, reject) => {
                ws.on('message', msg => args['log-file'].write(msg));
                ws.on('close', resolve);
                ws.on('error', reject);
            });
        }
        const url = await args.helpers.api
            .redirect_url(`${resource.url(args)}/log`);
        await new Promise((resolve, reject) => request
            .get(url)
            .buffer(false)
            .on('end', resolve)
            .on('error', reject)
            .pipe(args['log-file']));
    },
});
