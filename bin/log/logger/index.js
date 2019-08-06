'use strict';
const fs = require('fs');
const os = require('os');
const readline = require('readline');
const request = require('superagent');
const Cli = require('lib/cli');
const text = require('lib/text');
const format = require('../format');

module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
        token: Cli.richOption({
            description: `Token entitling to write to ${resource.title}`,
            type: 'string',
            env: 'LOG_TOKEN',
            required: true,
        }),
        hostname: {
            description: 'Name of the host recorded in the log',
            type: 'string',
            required: !os.hostname(),
            defaultValue: os.hostname(),
        },
        'log-file': {
            description: 'Path of the input text log file (default: stdin)',
            type: path => {
                try {
                    return fs.createReadStream(path);
                } catch (err) {
                    console.error(err);
                    throw err;
                }
            },
            required: false,
            defaultValue: process.stdin,
        },
    };


    const cmd = Cli.createCommand('logger', {
        description: `Log messages to ${resource.title}`,
        dirname: __dirname,
        plugins: [
            require('bin/_plugins/api'),
            require('bin/_plugins/projectRequired'),
            require('bin/_plugins/loginRequired'),
        ],
        options: options,
        handler: args => args.helpers.api
            .get(`${resource.url(args)}/${args[resource.name]}`)
            .then(log => new Promise((resolve, reject) => {
                const url = `https://${log.fqdn}/event`;
                const requests = new Set();
                let count = 0;
                const lineReader = readline.createInterface({
                    input: args['log-file'],
                });
                lineReader.on('line', line => {
                    const req = request
                        .post(url, [
                            {
                                data: line,
                                hostname: args.hostname,
                            },
                        ])
                        .set('x-auth-password', args.token)
                        .then(() => {
                            count+=1;
                            requests.delete(req);
                            if (args.verbose) {
                                console.error(`Queue size is ${requests.size}`);
                            }
                            if (lineReader.paused && requests.size < 500) {
                                lineReader.resume();
                                if (args.verbose) {
                                    console.error('lineReader resumed');
                                }
                            }
                        });
                    requests.add(req);
                    if (args.verbose) {
                        console.error(`Queue size is ${requests.size}`);
                    }
                    if (!lineReader.paused && requests.size > 2000) {
                        lineReader.pause();
                        if (args.verbose) {
                            console.error('lineReader paused.');
                        }
                    }
                });
                lineReader.once('error', reject);
                lineReader.on('close', () => Promise
                    .resolve(requests)
                    .then(() => count)
                    .then(resolve));
            })),
    });

    cmd.addOptionGroup('Output options', format.outputOptions);

    return cmd;
}
;
