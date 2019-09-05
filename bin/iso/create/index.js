'use strict';

const Cli = require('lib/cli');

const path = require('path');
const fs = require('fs');

const websocketStream = require('lib/websocketStream');

const options = {
    name: {
        description: 'ISO name',
        type: 'string',
        required: true,
    },
    'source-file': {
        description: 'Source file for ISO import.',
        type: 'string',
    },
    'source-url': {
        description: 'Source url for ISO import. Required if source-file is not specified.',
        type: 'string',
    },

};

module.exports = resource => Cli.createCommand('create', {
    description: 'ISO import',
    genericOptions: ['tag'],
    dirname: __dirname,
    plugins: resource.plugins,
    options: options,
    handler: async args => {

        Cli.mutually_exclusive_validate(args, 'source-url', 'source-file');

        let iso;

        if (args['source-url']) {
            iso = await args.helpers.api.post(resource.url(args), {
                name: args.name,
                source: args['source-url'],
                tag: require('lib/tags').createTagObject(args.tag),
            });
        }

        if (args['source-file']) {
            const fileSize = fs.statSync(args['source-file']).size;

            iso = await args.helpers.api.post(resource.url(args), {
                name: args.name,
                size: fileSize / 1024 ** 3,
                tag: require('lib/tags').createTagObject(args.tag),
                metadata: {
                    source: {
                        filename: path.basename(args['source-file']),
                        size: fileSize,
                    },
                },
            });

            const ws = await args.helpers.api.wsUpload(`iso/${iso.id}/upload`);

            await websocketStream.upload(ws, args['source-file']);

            iso = await args.helpers.api.get(`${resource.url(args)}/${iso.id}`);
        }

        return args.helpers.sendOutput(args, iso);
    },
});
