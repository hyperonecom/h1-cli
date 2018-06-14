'use strict';

const Cli = require('lib/cli');

const common = require('../common');

module.exports = resource => Cli.createCommand('disable', {
    dirname: __dirname,
    description: 'Disable factor of authentication',
    options: common.options,
    plugins: resource.plugins,
    handler: async args => {
        const url = args.$node.parent.config.url(args);

        const passwords = await args.helpers.api.get(url);

        const password = passwords.find(p => p.type === args.type);

        if (password) {
            await args.helpers.api.delete(`${args.$node.parent.config.url(args)}/${password._id}`);
            console.log('Done');
        } else {
            console.log(`${args.type} not found`);
        }
    },
});
