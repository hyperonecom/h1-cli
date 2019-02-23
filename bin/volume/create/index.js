'use strict';
const Cli = require('lib/cli');

const options = {
    name: {
        description: 'Disk name',
        type: 'string',
        required: true,
    },
    type: {
        description: 'Disk type ID or name',
        type: 'string',
        required: true,
    },
    size: {
        description: 'Disk size in GiB. Required if no source file is specified',
        type: 'int',
        required: true,
    },
};

module.exports = resource => Cli.createCommand('create', {
    description: `Create ${resource.title}`,
    genericOptions: ['tag' ],
    dirname: __dirname,
    plugins: resource.plugins,
    options: options,
    handler: async args => {
        const body = {
            name: args.name,
            service: args.type,
            size: args.size,
            tag: require('lib/tags').createTagObject(args.tag),
        };

        return args.helpers.api.post(resource.url(args), body).then(disk => args.helpers.sendOutput(args, disk));
    },
});
