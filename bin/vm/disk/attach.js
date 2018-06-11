'use strict';

const Cli = require('structured-cli');

const defaults = require('bin/generic/defaults');


module.exports = resource => {
    return Cli.createCommand('attach', {
        description: `Attach disk to ${resource.title}`,
        plugins: defaults.plugins,
        options: resource.options,
        handler: (args) => args.helpers.api.post(`vm/${args.vm}/hdd`, {
            disk: args.disk
        }).then(result => args.helpers.sendOutput(args, result))
    });
};
