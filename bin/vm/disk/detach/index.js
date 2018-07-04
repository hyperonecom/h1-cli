'use strict';

const Cli = require('lib/cli');

const defaults = require('bin/generic/defaults');


module.exports = resource => Cli.createCommand('detach', {
    description: `Detach disk from ${resource.title}`,
    plugins: defaults.plugins,
    options: resource.options,
    dirname: __dirname,
    handler: args => args.helpers.api.delete(`vm/${args.vm}/hdd/${args.disk}`)
        .then(result => args.helpers.sendOutput(args, result)),
});
