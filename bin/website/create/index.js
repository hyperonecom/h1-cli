'use strict';

const Cli = require('lib/cli');
const {pickBy, set} = require('lib/transform');

module.exports = resource => {
    const options = pickBy(resource.schema, field => field.onCreate && !field.virtual);

    return Cli.createCommand('create', {
        description: `Create ${resource.title}`,
        genericOptions: ['credentials', 'tag'],
        dirname: __dirname,
        plugins: resource.plugins,
        priority: 25,
        resource: resource,
        options: Object.assign({}, resource.options, options),
        handler: async args => {
            Cli.mutually_inclusive_validate(args, 'website', 'snapshot');

            const body = {
                tag: require('lib/tags').createTagObject(args.tag),
                credential: await require('lib/credentials')
                    .getCredentialCreate(args, resource.credential_types),
            };

            Object.keys(options)
                .filter(name => args[name])
                .forEach(name => {
                    const dest = options[name].destBody || name;
                    set(body, dest, args[name], args[name]);
                });

            return args.helpers.api
                .post(resource.url(args), body)
                .then(result => args.helpers.sendOutput(args, result));
        },
    });
};
