'use strict';

const Cli = require('structured-cli');

const websocketStream = require('lib/websocketStream');
const text = require('lib/text');

module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`
          , type: 'string'
          , required: true
          , dest: 'id'
        },
        'source-file': {
            description: 'Path to .vhdx file to import'
          , type: 'string'
          , required: true
        }
    };

    return Cli.createCommand('resume', {
        description: `Resume create upload of ${resource.title}`
        , plugins: resource.plugins
        , options: Object.assign({}, resource.options, options)
        , params: resource.params
        , handler: async args => {

            let r = await args.helpers.api.get(`${resource.url(args)}/${args.id}`);

            const ws = await args.helpers.api.wsUpload(`${resource.url(args)}/${r._id}/upload`);

            await websocketStream.upload(ws, args['source-file']);

            r = await args.helpers.api.get(`${resource.url(args)}/${r._id}`);

            return args.helpers.sendOutput(args, r);
        }
    });
};

