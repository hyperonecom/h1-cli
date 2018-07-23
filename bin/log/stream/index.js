'use strict';

const Cli = require('lib/cli');
const text = require('lib/text');
const format = require('./../format');
const EventEmitter = require('events');


module.exports = resource => {

    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
    };

    const cmd = Cli.createCommand('stream', {
        description: `Stream ${resource.title}`,
        dirname: __dirname,
        options: options,
        plugins: [
            require('bin/_plugins/loginRequired'),
            require('bin/_plugins/api'),
            require('bin/_plugins/projectRequired'),
        ],
        handler: async args => {
            const url = `${resource.url()}/${args[resource.name]}/stream`;

            const formatter = format.formatter(args);
            formatter.print_header();

            const emitter = new EventEmitter();

            emitter.on('jsonl', jsonl => formatter.print_jsonl(jsonl));

            await args.helpers.api.stream(url, {}, emitter);
            await new Promise(() => {});
        },
    });

    cmd.addOptionGroup('Output options', format.outputOptions);

    return cmd;
};
