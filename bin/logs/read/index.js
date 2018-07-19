'use strict';

const Cli = require('lib/cli');
const text = require('lib/text');
const dateformat = require('dateformat');

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
    };

    return Cli.createCommand('read', {
        description: `Read ${resource.title}`,
        dirname: __dirname,
        plugins: resource.plugins,
        options: options,
        handler: args => {
            const query = {
                since: args.since,
                until: args.until,
            };

            return args.helpers.api.stream(`${resource.url()}/${args[resource.name]}/events`, query)
                .then(emitter => new Promise((resolve, reject) => {
                    emitter.on('jsonl', jsonl => console.log(jsonl));
                    emitter.on('error', err => reject(err));
                }));
        },
    });
};
