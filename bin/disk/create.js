'use strict';

const Cli = require('structured-cli');

const websocketStream = require('lib/websocketStream');
const vhdx = require('rbx-vhdx');
const util = require('util');
const path = require('path');
const fs = require('fs');

const options = {
    name: {
        description: 'Disk name'
      , type: 'string'
      , required: true
    }
  , type: {
        description: 'Disk type Id'
      , type: 'string'
      , required: true
    }
  , size: {
        description: 'Disk size in GB'
      , type: 'int'
      , required: true
    }
  , 'source-file': {
        description: 'import disk path'
      , type: 'string'
      , required: false
    }
};

module.exports = resource => Cli.createCommand('create', {
    description: 'Disk create'
  , plugins: resource.plugins
  , options: options
  , handler: async args => {

        const body = {
            name: args.name
          , service: args.type
          , size: args.size
        };

        if (args['source-file']) {
            body.metadata = {
                source: {
                    filename: path.basename(args['source-file'])
                  , size: fs.statSync(args['source-file']).size
                }
            };
            const vhdxInfo = await util.promisify(vhdx.info)(args['source-file']);

            if (vhdxInfo.type !== 'dynamic') {
                throw Cli.error.cancelled('<source-file> vhdx should be dynamic');
            }

            if (vhdxInfo.size > args.size * 1024**3) {
                throw Cli.error.cancelled(`<source-file> ${Math.ceil(vhdxInfo.size/1024 **3)}GB is bigger than ${args.size}GB`);
            }
        }

        let disk = await args.helpers.api.post(resource.url(args), body);

        if (args['source-file']) {
            const ws = await args.helpers.api.wsUpload(`disk/${disk._id}/upload`);

            await websocketStream.upload(ws, args['source-file']);

            disk = await args.helpers.api.get(`${resource.url(args)}/${disk._id}`);
        }

        return args.helpers.sendOutput(args, disk);
    }
});
