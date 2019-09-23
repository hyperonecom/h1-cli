'use strict';

const Cli = require('lib/cli');
const {pickBy} = require('lib/transform');

module.exports = resource => {
    const options = pickBy(resource.schema, field => field.onCreate && !field.virtual);

    return Cli.createCommand('create', {
        description: `Create ${resource.title}`,
        plugins: resource.plugins,
        genericOptions: ['tag', 'credentials'],
        dirname: __dirname,
        priority: 25,
        resource: resource,
        options: { ...options, ...resource.options},
        handler: async args => {
            const body = {
                name: args.name,
                size: args.size,
                tag: require('lib/tags').createTagObject(args.tag),
                credential: await require('lib/credentials')
                    .getCredentialCreate(args, resource.credential_types),
            };

            if (args.snapshot) {
                body.snapshot = args.snapshot;
            }

            return args.helpers.api
                .post(resource.url(args), body)
                .then(result => args.helpers.sendOutput(args, result));
        },
    });
};
