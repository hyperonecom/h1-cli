'use strict';

const Cli = require('structured-cli');
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
  , handler: args => {

        if (args.source.match('^http(s)?://')) {
            return args.helpers.api
                .post(resource.url(args), { name: args.name, source: args.source })
                .then(result => args.helpers.sendOutput(args, result));
        }

        const fileSize = fs.statSync(args.source).size;

        return args.helpers.api
            .post(resource.url(args), { name: args.name, size: fileSize/1024**3 })
            .then(result => args.helpers.api
                .ws(`/iso/${result._id}/upload`)
                .then(ws => new Promise((resolve, reject) => {
                    console.log('waiting for the OK to upload');
                    ws.on('message', data => {
                        console.log('received', data);

                        if (data !== 'OK') {
                            return reject(data);
                        }

                        const stream = websocketStream.upload(ws, args.source);
                        stream.on('finish', () => resolve(result));
                    });

                    ws.on('error', reject);
                }))
            )
            .then(result => args.helpers.sendOutput(args, result));
    }
});
