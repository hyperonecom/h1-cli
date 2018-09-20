'use strict';


const websocketStream = require('lib/websocketStream');
const vhdx = require('rbx-vhdx');
const util = require('util');
const path = require('path');
const fs = require('fs');

const Cli = require('lib/cli');

const options = {
    name: {
        description: 'Disk name',
        type: 'string',
        required: true,
    },
    type: {
        description: 'Disk type ID or name',
        type: 'string',
        required: true,
    },
    size: {
        description: 'Disk size in GiB. Required if no source file is specified',
        type: 'int',
    },
    'source-file': {
        description: 'Path to .vhdx file to import',
        type: 'string',
        required: false,
    },
    'no-progress': {
        description: 'Disable progress bar',
        type: 'boolean',
    },
};


module.exports = resource => Cli.createCommand('create', {
    description: `Create ${resource.title}`,
    genericOptions: ['tag' ],
    dirname: __dirname,
    plugins: resource.plugins,
    options: options,
    handler: async args => {
        const body = {
            name: args.name,
            service: args.type,
            size: args.size, // GiB
            tag: require('lib/tags').createTagObject(args.tag),
        };

        if (args.size === null && !args['source-file']) {
            throw Cli.error.cancelled('The \'--size\' parameter is required if no source file is specified');
        }

        if (args['source-file']) {
            const vhdxInfo = await util.promisify(vhdx.info)(args['source-file']);

            if (body.size === null) {
                body.size = Math.ceil(vhdxInfo.size / 1024**3); // B -> GiB
            }

            body.metadata = {
                source: {
                    filename: path.basename(args['source-file']),
                    size: fs.statSync(args['source-file']).size,
                },
            };

            if (vhdxInfo.type !== 'dynamic') {
                throw Cli.error.cancelled('<source-file> vhdx should be dynamic');
            }

            if (args.size !== null && vhdxInfo.size > body.size * 1024**3) { // B > (GB -> B)
                // (B -> GiB); GiB
                throw Cli.error.cancelled(`<source-file> ${Math.ceil(vhdxInfo.size/1024 **3)}GiB is bigger than ${body.size}GiB`);
            }
        }

        let disk = await args.helpers.api.post(resource.url(args), body);

        if (args['source-file']) {

            const ws = await args.helpers.api.wsUpload(`disk/${disk._id}/upload`);

            await websocketStream.upload(ws, args['source-file'], {progress: !args['no-progress']});

            disk = await args.helpers.api.get(`${resource.url(args)}/${disk._id}`);
        }

        return args.helpers.sendOutput(args, disk);
    },
});
