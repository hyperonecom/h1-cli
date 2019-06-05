'use strict';

const Cli = require('lib/cli');
const lodash = require('lodash');
module.exports = resource => {
    const options = lodash.pickBy(resource.schema, field => field.onCreate);
    const genericOptions = ['credentials'];
    if (!resource.skipTag) {
        genericOptions.push('tag');
    }
    return Cli.createCommand('create', {
        description: `Create ${resource.title}`,
        plugins: resource.plugins,
        genericOptions,
        priority: 25,
        dirname: `${resource.dirname}/create`,
        resource: resource,
        options: Object.assign({}, options, resource.options),
        handler: async args => {
            const body = {
                tag: require('lib/tags').createTagObject(args.tag),
                credential: await require('lib/credentials')
                    .getCredentialCreate(args, resource.credential_types),
            };
            Object.keys(options).forEach(name => {
                const dest = options[name].destBody || name;
                body[dest] = args[name];
            });

            return args.helpers.api
                .post(resource.url(args), body)
                .then(result => args.helpers.sendOutput(args, result));
        },
    });
};
