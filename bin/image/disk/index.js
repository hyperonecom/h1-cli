'use strict';

const Cli = require('lib/cli');

const options = {
    image: {
        description: 'Image ID or name',
        type: 'string',
        required: true,
    },
};

module.exports = resource => Cli.createCommand('disk', {
    description: `List all disks of ${resource.title}`,
    dirname: __dirname,
    plugins: resource.plugins,
    options: Object.assign({}, resource.options, options),
    params: resource.params,
    handler: async args => {
        args.query = '[].{id:disk._id,name:disk.name,type:type,size:size}';

        const image = await args.helpers.api.get(`${resource.url(args)}/${args.image}`);

        return args.helpers.sendOutput(args, image.disks);
    },
});
