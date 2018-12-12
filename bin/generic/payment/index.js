'use strict';

const genericResource = require('bin/generic/index');
const text = require('lib/text');

module.exports = parent => {
    const options = {
        [parent.name]: {
            description: `${text.toTitleCase(parent.title)} ID or name`,
            type: 'string',
            required: true,
        },
    };

    const resource = {
        name: 'payment',
        description: `Manage your payment for ${parent.title}`,
        defaultQuery: '[].{id:_id, creditsFree:creditsFree, credits:credits, channel:channel, type:type, createdOn:createdOn}',
        url: args => `${parent.url(args)}/${args[parent.name]}/payment`,
        params: parent.params,
        options: Object.assign({}, parent.options, options),
        commands: ['show', 'list'],
        plugins: parent.plugins,
        title: 'payment',
        // dirname: __dirname,
        context: {
            showParams: `--${parent.title} my-${parent.title}`,
            listParams: `--${parent.title} my-${parent.title}`,
        },
    };

    return genericResource(resource);
};

