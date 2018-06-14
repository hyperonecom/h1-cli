'use strict';

const Cli = require('lib/cli');

const websocketStream = require('lib/websocketStream');
const text = require('lib/text');

module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
        'source-file': {
            description: 'Path to .vhdx file to import',
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('resume', {
        description: `Resume create upload of ${resource.title}`,
        // , dirname: __dirname
        plugins: resource.plugins,
        options: Object.assign({}, resource.options, options),
        params: resource.params,
        handler: async args => {

            let r = await args.helpers.api.get(`${resource.url(args)}/${args[resource.name]}`);

            const ws = await args.helpers.api.wsUpload(`${resource.url(args)}/${r._id}/upload`);

            await websocketStream.upload(ws, args['source-file']);

            r = await args.helpers.api.get(`${resource.url(args)}/${r._id}`);

            return args.helpers.sendOutput(args, r);
        },
    });
};

