'use strict';
const { Category, Command } = require('h1-cli-framework');

module.exports = ({
    name: require('./package.json').name,
    version: require('./package.json').version,
    load: async (parent) => parent.loadHook.push(() => {
        const cmd = new Category({
            name: 'extension',
            summary: 'Manage extensions of CLI',
        });
    
        parent.addCommand(cmd);
        cmd.addCommand(() => new Command({
            name: 'list',
            summary: 'List available and installed extensions',
            handler: async (opts) => {
                

                return 'Extensions successfully installed.';
            },
        }));
    })
})