'use strict';
const fs = require('fs');
const os = require('os');
const readlineTransform = require('readline-transform');
const superagent = require('superagent');
const Cli = require('lib/cli');
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
        genericOptions: ['tag'],
        plugins: [
            require('bin/_plugins/api'),
            require('bin/_plugins/projectRequired'),
            require('bin/_plugins/loginRequired'),
        ],
        options: options,
        handler: args => args.helpers.api
            .get(`${resource.url(args)}/${args[resource.name]}`)
            .then(log => new Promise((resolve, reject) => args['log-file']
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
                .pipe(superagent.
                    post(`http://${log.fqdn}/resource/${log.id}/log`).
                    set('x-auth-password', args.token).
                    once('error', reject)
                )
                .once('error', reject)
                .once('end', resolve)
            )),
    });

    cmd.addOptionGroup('Output options', format.outputOptions);

    return cmd;
};
