'use strict';
const fs = require('fs');
const os = require('os');
const readlineTransform = require('readline-transform');
const request = require('lib/http');
const Cli = require('lib/cli');
const auth = require('lib/auth');
const text = require('lib/text');
const format = require('../format');
const { Transform } = require('stream');
const tags = require('lib/tags');

module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
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

    const handler = async args => {
        const log = await args.helpers.api
            .get(`${resource.url(args)}/${args[resource.name]}`);
        const token = await auth.getToken(log.fqdn);
        return new Promise((resolve, reject) => args['log-file']
            .once('error', reject)
            .pipe(new readlineTransform())
            .pipe(new Transform({
                transform(line, encoding, callback) {
                    this.push(JSON.stringify({
                        host: args.hostname,
                        message: line.toString('utf-8'),
                        tag: tags.createTagObject(args.tag) || {},
                    }));
                    this.push('\n');
                    return callback(null);
                },
            }))
            .pipe(request.
                post(`http://${log.fqdn}/log`).
                auth(token, { type: 'bearer' }).
                once('error', reject).
                once('response', res => {
                    if (res.error) {
                        const err = new Error(
                            res.statusText || res.text || 'Unsuccessful HTTP response'
                        );
                        err.response = res;
                        err.status = res.status;
                        return reject(err);
                    }
                    return resolve(res);
                })
            )
        );
    };

    const cmd = Cli.createCommand('logger', {
        description: `Log messages to ${resource.title}`,
        dirname: __dirname,
        genericOptions: ['tag'],
        plugins: [
            require('bin/_plugins/api'),
            require('bin/_plugins/projectRequired'),
            require('bin/_plugins/loginRequired'),
            require('bin/_plugins/locationRequired'),
        ],
        options: options,
        handler,
    });

    cmd.addOptionGroup('Output options', format.outputOptions);

    return cmd;
};
