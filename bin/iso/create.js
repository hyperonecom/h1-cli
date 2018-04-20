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
  , source: {
        description: 'Source for ISO import (eg: url, file)'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('create', {
    description: 'ISO import'
  , plugins: resource.plugins
  , options: options
  , handler: async args => {

        let iso;

        if (args.source.match('^http(s)?://')) {
            iso = await args.helpers.api.post(resource.url(args), { name: args.name, source: args.source });
        } else {
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
