'use strict';
const fs = require('fs');

const Cli = require('lib/cli');
const text = require('lib/text');
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
        ],
        options: options,
        handler: async args => {
            const query = {
                follow: args.follow,
            };
            ['since', 'until', ' tag', 'tail'].forEach(name => {
                if (args[name]) {
                    query[name] = args[name];
                }
            });

            const formatter = format.formatter(args);
            formatter.print_header();
            const url = `${resource.url(args)}/${args[resource.name]}/log?${qs.stringify(query)}`;
            // const ws = await args.helpers.api.wsLogs(url);
            // const stream = WebSocket.createWebSocketStream(ws);
            let count = 0;
            const stream = args.helpers.api.stream(url);
            return new Promise((resolve, reject) => stream
                .on('data', jsonl => {
                    if (formatter.print_jsonl(jsonl)) {
                        count += 1;
                    }
                    if (args.head && count >= args.head) {
                        stream.end();
                    }
                })
                .on('error', reject)
                .on('end', resolve)
                .resume()
            );
        },
    });

    cmd.addOptionGroup('Output options', format.outputOptions);

    return cmd;
};
