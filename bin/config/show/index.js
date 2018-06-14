'use strict';

const Cli = require('lib/cli');
const config = require('lib/config');

module.exports = Cli.createCommand('show', {
    dirname: __dirname
    , description: 'Show config'
    , handler: () => {
        const defaults = config.get('defaults');
        console.log(JSON.stringify(defaults || {}, null, 2));
    }
});
