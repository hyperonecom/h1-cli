'use strict';

const Cli = require('structured-cli');

const websocketStream = require('lib/websocketStream');

const options = {
    source: {
        description: 'import disk path'
      , type: 'string'
      , required: true
    }
};

const params = {
    id: {
        description: 'Resource identifier'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('resume', {
    description: 'Resume Create Upload'
  , plugins: resource.plugins
  , options: options
  , params: params
  , handler: async args => {

        const disk = await args.helpers.api.get(`${resource.url(args)}/${args.id}`);

        const ws = await args.helpers.api.wsUpload(`/disk/${disk._id}/upload`);

        await websocketStream.upload(ws, args.source);

        return args.helpers.sendOutput(args, disk);
    }
});
