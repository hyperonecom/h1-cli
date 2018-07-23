'use strict';

const Cli = require('lib/cli');
const text = require('lib/text');
const dateformat = require('dateformat');
const range = require('../range');
const format = require('../format');

module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
        since: {
            description: 'Start of period for which you want to receive logs',
            type: 'string',
            defaultValue: dateformat(new Date(), 'yyyy-mm-dd'),
        },
        until: {
            description: 'End of period for which you want to receive logs',
            type: 'string',
            defaultValue: dateformat(new Date(), 'yyyy-mm-dd'),
        },
        tail: {
            description: 'Number of lines to show from the end of the logs. All if skipped.',
            type: 'int',
        },
    };


    const cmd = Cli.createCommand('read', {
        description: `Read ${resource.title}`,
        dirname: __dirname,
        plugins: [
            require('bin/_plugins/loginRequired'),
            require('bin/_plugins/api'),
            require('bin/_plugins/projectRequired'),
        ],
        options: options,
        handler: async args => {
            const query = {
                since: args.since,
                until: args.until,
            };
            const url = `${resource.url()}/${args[resource.name]}/events`;

            const formatter = format.formatter(args);

            formatter.print_header();

            if (args.tail) {
                const file_head = await args.helpers.api.head(url).query(query);
                const file_url = file_head.request.url;
                const file_size = parseInt(file_head.headers['content-length']);
                const lines = await range.fetch_lines(file_url, file_size, args.tail);

                lines.map(line => JSON.parse(line)).map(jsonl => {
                    formatter.print_jsonl(jsonl);
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
