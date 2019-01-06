'use strict';
const Cli = require('lib/cli');

const options = {
    name: {
        description: 'Disk name',
        type: 'string',
        required: true,
    },
    image: {
        description: 'Container image',
        type: 'string',
        required: true,
    },
    expose: {
        description: 'Port exposed publicly',
        type: 'string',
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
            image: args.image,
            expose: args.expose,
            tag: require('lib/tags').createTagObject(args.tag),
        };

        return args.helpers.api.post(resource.url(args), body)
            .then(resource => args.helpers.sendOutput(args, resource));
    },
});
