'use strict';

const os = require('os');
const readline = require('readline');
const request = require('superagent');
const Cli = require('lib/cli');
const text = require('lib/text');
const format = require('../format');

const promise_readline = (options, on_line) => new Promise((resolve, reject) => {
    const lineReader = readline.createInterface(options);
    lineReader.on('line', on_line);
    lineReader.once('error', reject);
    lineReader.on('end', resolve);
});

module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
        token: {
            description: `Token entitling to write to ${resource.title}. Can be set also via environment variable H1_LOG_TOKEN.`,
            type: 'string',
            required: !process.env.H1_LOG_TOKEN,
            defaultValue: process.env.H1_LOG_TOKEN,
        },
        hostname: {
            description: 'The name of the host recorded in the log',
            type: 'string',
            required: !os.hostname(),
            defaultValue: os.hostname(),
        },
    };


    const cmd = Cli.createCommand('logger', {
        description: `Log messages to ${resource.title}`,
        dirname: __dirname,
        plugins: [
            require('bin/_plugins/api'),
            require('bin/_plugins/projectRequired'),
            require('bin/_plugins/verbose'),
        ],
        options: options,
        handler: args => args.helpers.api
            .get(`${resource.url(args)}/${args[resource.name]}`)
            .then(async log => {
                const url = `http://${log._id}.log.pl-waw-1.hyperone.com/event`;
                const requests = new Set();

                await promise_readline({
                    input: process.stdin,
                }, line => {
                    const data = [
                        {
                            data: line,
                            hostname: args.hostname,
                        },
                    ];
                    requests.add(
                        request
                            .post(url, data)
                            .set('x-auth-password', args.token)
                            .then(resp => {
                                console.log(resp.text);
                            })
                    );
                });
                console.log('Requests', requests);
                return Promise.all(requests);
            }),
    });

    cmd.addOptionGroup('Output options', format.outputOptions);

    return cmd;
};
