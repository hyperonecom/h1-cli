'use strict';

const Cli = require('lib/cli');

const options = {
    name: {
        description: 'Name',
        type: 'string',
        required: true,
    },
    type: {
        description: 'Type of rule',
        type: 'string',
        choices: ['geo', 'subnet'],
        required: true,
    },
    value: {
        description: 'Value of the rule that is appropriate for the type selected',
        type: 'string',
        required: true,
    },
};

module.exports = resource => Cli.createCommand('add', {
    description: `Add access rule for ${resource.title}`,
    dirname: __dirname,
    plugins: resource.plugins,
    params: resource.params,
    options: Object.assign({}, resource.options, options),
    handler: args => {
        let value = args.value;
        if (args.type === 'subnet' && !value.includes('/')) {
            value = `${value}/32`;
        }

        return args.helpers.api
            .post(resource.url(args), {
                name: args.name,
                type: args.type,
                value: value,
            }).then(result => args.helpers.sendOutput(args, result));
    },
});
