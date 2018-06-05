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
        description: 'Resource name or ID'
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

        let r = await args.helpers.api.get(`${resource.url(args)}/${args.id}`);

        const ws = await args.helpers.api.wsUpload(`${resource.url(args)}/${r._id}/upload`);

        await websocketStream.upload(ws, args.source);

        r = await args.helpers.api.get(`${resource.url(args)}/${r._id}`);

        return args.helpers.sendOutput(args, r);
    }
});
