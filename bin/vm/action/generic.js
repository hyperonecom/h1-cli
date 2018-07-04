'use strict';

const Cli = require('lib/cli');

const text = require('lib/text');

module.exports = (resource, action) => Cli.createCommand(action, {
    description: `${text.toTitleCase(action)} ${resource.title}`,
    plugins: resource.plugins,
    options: resource.options,
    params: resource.params,
    handler: genericVMAction(action),
    dirname: `${__dirname}/${action}`,
});

function genericVMAction(action) {

    return function (args) {
        return args.helpers.api.post(`vm/${args.id}/actions`, {
            name: action,
        })
            .then(result => args.helpers.sendOutput(args, result));
    };
}
