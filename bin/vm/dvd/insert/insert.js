'use strict';

const Cli = require('lib/cli');

const options = {
    iso: {
        description: 'ISO name or ID',
        type: 'string',
        required: true,
    },
};

module.exports = resource => Cli.createCommand('insert', {
    description: `Insert ISO into DVD drive of ${resource.title}`,
    plugins: resource.plugins,
    params: resource.params,
    options: Object.assign({}, resource.options, options),
    dirname: __dirname,
    handler: args => args.helpers.api
        .put(args.$node.parent.config.url(args), { iso: args.iso })
        .then(result => args.helpers.sendOutput(args, result)),
});
