'use strict';

const Cli = require('structured-cli');

const path = require('path');
const fs = require('fs');

const websocketStream = require('lib/websocketStream');

const options = {
    name: {
        description: 'ISO name'
      , type: 'string'
      , required: true
    }
  , ['source-url']: {
        description: 'Source url for ISO import. Required if source-url is not specified.'
        , type: 'string'
    }
  , ['source-file']: {
        description: 'Source file for ISO import.'
        , type: 'string'
  }
};

module.exports = resource => Cli.createCommand('create', {
    description: 'ISO import'
  , plugins: resource.plugins
  , options: options
  , handler: async args => {

        let iso;

        if (!args['source-url'] && !args['source-file']) {
            throw Cli.error.cancelled('Providing either source-file or source-url is required.');
        }
        if (args['source-url'] && args['source-file']) {
            throw Cli.error.cancelled('Providing either source-file or source-url is required.');
        }

        if (args['source-url']) {
            iso = await args.helpers.api.post(resource.url(args), { name: args.name, source: args['source-url'] });
        } else if (args['source-file']) {
            const fileSize = fs.statSync(args.source).size;

            iso = await args.helpers.api.post(resource.url(args), {
                name: args.name
              , size: fileSize / 1024**3
              , metadata: {
                    source: {
                        filename: path.basename(args.source)
                      , size: fileSize
                    }
                }
            });

            const ws = await args.helpers.api.wsUpload(`iso/${iso._id}/upload`);

            await websocketStream.upload(ws, args.source);

            iso = await args.helpers.api.get(`${resource.url(args)}/${iso._id}`);
        }

        return args.helpers.sendOutput(args, iso);
    }
});
