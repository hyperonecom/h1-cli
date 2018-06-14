'use strict';

const Cli = require('lib/cli');

const genericDefaults = require('bin/generic/defaults');
const text = require('lib/text');

module.exports = function(resource) {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('list', {
        // dirname: __dirname,
        description: `List of access rights for ${resource.title}`,
        plugins: genericDefaults.plugins,
        options: Object.assign({}, resource.options, options),
        handler: handleAccessList(resource),
    });
};

function handleAccessList(resource) {

    return function(args) {

        return args.helpers.api.get(`${resource.url(args)}/${args[resource.name]}/accessrights`)
            .then(result => args.helpers.sendOutput(args, result));
    };
};
