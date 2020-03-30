'use strict';
const fs = require('fs');
const auth = require('lib/auth');
const request = require('lib/http');
const Cli = require('lib/cli');
const text = require('lib/text');
const tags = require('lib/tags');
const { Transform } = require('stream');
const readlineTransform = require('readline-transform');
const qs = require('qs');
const format = require('../format');
const ms = require('ms');

const relativeTime = (value) => {
    const parsed = ms(value);
    if (parsed) {
        return new Date(new Date() - parsed).toISOString();
    }
    return value;
};

module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
        since: {
            description: 'Show logs since timestamp (YYYY-MM-DD or ISO 8601) or relative (e.g. 13m for 13 minutes ago).',
            type: relativeTime,
        },
        until: {
            description: 'Show logs before a timestamp (YYYY-MM-DD or ISO 8601) or relative (e.g. 13m for 13 minutes ago).',
            type: relativeTime,
        },
        tail: {
            description: 'Number of lines to show from the end of the logs. All if skipped.',
            type: 'int',
        },
        follow: {
            description: 'Output current messages in real time as they arrive',
            type: 'boolean',
            defaultValue: false,
        },
        head: {
            description: 'Maximum number of lines to show. All if skipped.',
            type: 'int',
        },
        'jsonl-file': {
            description: 'Path of output .jsonl file (disables all format option; default: stdout)',
            type: path => fs.createWriteStream(path),
        },
    };

    const cmd = Cli.createCommand('stream', {
        description: `Stream or read messages of ${resource.title}`,
        dirname: __dirname,
        genericOptions: ['tag'],
        plugins: [
            require('bin/_plugins/loginRequired'),
            require('bin/_plugins/api'),
            require('bin/_plugins/projectRequired'),
            require('bin/_plugins/locationRequired'),
        ],
        options: options,
        handler: async args => {
            const query = {
                follow: args.follow,
            };
            ['since', 'until', 'tail'].forEach(name => {
                if (args[name]) {
                    query[name] = args[name];
                }
            });

            if (args.tag) {
                query.tag = tags.createTagObject(args.tag);
            }
            const formatter = format.formatter(args);
            formatter.print_header();
            const log = await args.helpers.api.get(`${resource.url(args)}/${args[resource.name]}`);
            let count = 0;
            const token = await auth.getToken(log.fqdn);

            const req = request.get(`https://${log.fqdn}/log`)
                .query(qs.stringify(query))
                .auth(token, {type: 'bearer'})
                .buffer(false)
                .pipe(new readlineTransform())
                .pipe(new Transform({
                    objectMode: true,
                    transform(line, encoding, callback) {
                        try {
                            return callback(null, JSON.parse(line.toString('utf-8')));
                        } catch (err) {
                            return callback(err);
                        }
                    },
                }));

            req.on('data', jsonl => {
                if (formatter.print_jsonl(jsonl)) {
                    count += 1;
                }
                if (args.head && count >= args.head) {
                    req.end();
                }
            });

            return new Promise((resolve, reject) => req
                .on('end', resolve)
                .on('error', reject)
            );
        },
    });

    cmd.addOptionGroup('Output options', format.outputOptions);

    return cmd;
};
