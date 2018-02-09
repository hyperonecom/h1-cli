'use strict';

const Cli = require('structured-cli');

const websocketStream = require('websocket-stream/stream');
const fs = require('fs');

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
  , handler: args => {

        if (args.source.match('^http(s)?://')) {
            return args.helpers.api
                .post(resource.url(args), { name: args.name, source: args.source })
                .then(result => args.helpers.sendOutput(args, result));
        }

        return args.helpers.api
            .post(resource.url(args), {
                name: args.name
              , size: fs.statSync(args.source).size / 1024**3
            })
            .then(result => args.helpers.api
                .ws(`/iso/${result._id}/upload`)
                .then(ws => new Promise((resolve, reject) => {
                    console.log('waiting for the OK to upload');
                    ws.on('message', data => {
                        console.log('received', data);
                        if (data !== 'OK') {
                            return reject(data);
                        }

                        const stream = websocketStream(ws, { binary: true, perMessageDeflate: false });
                        stream.on('finish', () => resolve(result));

                        fs.createReadStream(args.source).pipe(stream).pipe(process.stdout);
                    });

                    ws.on('error', reject);
                }))
            )
            .then(result => args.helpers.sendOutput(args, result));
    }
});
