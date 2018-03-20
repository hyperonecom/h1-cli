'use strict';

const Cli = require('structured-cli');

const params = {
    id: {
        description: 'Resource identifier'
      , type: 'string'
      , required: true
    }
};

module.exports = resource => Cli.createCommand('disk', {
    description: 'List all disks'
  , plugins: resource.plugins
  , options: resource.options
  , params: Object.assign({}, resource.params, params)
  , handler: async args => {
        args.query = '[].{id:disk._id,name:disk.name,type:type,size:size}';

        const image = await args.helpers.api.get(`${resource.url(args)}/${args.id}`);

        return args.helpers.sendOutput(args, image.disks);
    }
});
