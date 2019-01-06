'use strict';
const Cli = require('lib/cli');

module.exports = resource => Cli.createCommand('ps', {
    description: `Process list of ${resource.title}`,
    dirname: __dirname,
    plugins: resource.plugins,
    options: resource.options,
    handler: async args => {
        if (!args.query) {
            args.query = '[].{name:name, user:user, process_id:process_id, parent_process_id:parent_process_id}';
        }

        return args.helpers.api.get(`${resource.url(args)}/ps`)
            .then(resource => args.helpers.sendOutput(args, resource));
    },
});
