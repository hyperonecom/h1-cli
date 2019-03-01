'use strict';
const fs = require('fs');

const Cli = require('lib/cli');
const text = require('lib/text');
const range = require('../range');
const format = require('../format');
const logger = require('lib/logger');

const current_date = () => {
    const now = new Date();
    const month = (now.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = now.getUTCDate().toString().padStart(2, '0');
    return `${now.getUTCFullYear()}-${month}-${day}`;
};

module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
        since: {
            description: 'Start of period for which you want to receive logs. Format: YYYY-MM-DD',
            type: 'string',
        },
        until: {
            description: 'End of period for which you want to receive logs. Format: YYYY-MM-DD',
            type: 'string',
        },
        tail: {
            description: 'Number of lines to show from the end of the logs. All if skipped.',
            type: 'int',
        },
        follow: {
            description: 'Output current messages in real time as they arrive',
            type: 'boolean',
        },
        'jsonl-file': {
            description: 'Path of output .jsonl file (disables all format option; default: stdout)',
            type: path => fs.createWriteStream(path),
        },
    };


    const cmd = Cli.createCommand('stream', {
        description: `Stream or read messages of ${resource.title}`,
        dirname: __dirname,
        plugins: [
            require('bin/_plugins/loginRequired'),
            require('bin/_plugins/api'),
            require('bin/_plugins/projectRequired'),
        ],
        options: options,
        handler: args => {
            const url = `${resource.url()}/${args[resource.name]}/stream`;

            if (args.follow && (args.since || args.until)) {
                throw Cli.error.cancelled('You can not show real and archived data at the same time.');
            }

            if (args.follow && args.tail) {
                throw Cli.error.cancelled('We can not determine the end of log for data in real time.');
            }

            const query = {
                since: args.since || current_date(),
                until: args.until || current_date(),
                follow: args.follow,
            };
            if (args.verbose) {
                logger('verbose', `query ${JSON.stringify(query)}`);
            }
            const formatter = format.formatter(args);

            formatter.print_header();

            if (args.tail) {
                args.helpers.api.head(url).query(query).then(file_head => {
                    const file_url = file_head.request.url;
                    if (args.verbose) {
                        logger('verbose', `Forwarded to ${file_url}`);
                    }
                    const file_size = parseInt(file_head.headers['content-length']);
                    range.fetch_lines(file_url, file_size, args.tail).then(lines => {
                        lines.map(line => JSON.parse(line)).map(jsonl => {
                            formatter.print_jsonl(jsonl);
                        });
                    });
                });
            } else {
                return new Promise((resolve, reject) => {
                    args.helpers.api.stream(url, query)
                        .on('jsonl', jsonl => formatter.print_jsonl(jsonl))
                        .once('error', reject)
                        .once('end', resolve);
                });
            }
        },
    });

    cmd.addOptionGroup('Output options', format.outputOptions);

    return cmd;
};
