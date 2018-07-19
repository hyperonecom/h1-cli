'use strict';

const Cli = require('lib/cli');
const text = require('lib/text');


module.exports = resource => {

    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('stream', {
        description: `Stream ${resource.title}`,
        dirname: __dirname,
        plugins: resource.plugins,
        options: options,
        handler: args => {
            return args.helpers.api.stream(`${resource.url()}/${args[resource.name]}/stream`)
                .then(emitter => new Promise((resolve, reject) => {
                    emitter.on('jsonl', jsonl => console.log(jsonl));
                    emitter.on('error', err => reject(err));
                }));
        },
    });
};
