'use strict';

const cli = require('./index');
const complete = require('../lib/complete');
const Cli = require('lib/cli');

process.env.NODE_ENV = process.pkg ? 'production' : process.env.NODE_ENV;

complete.autocomplete(cli, () => cli.run()
    .then(result => {
        if (typeof result === 'object') {
            console.dir(result, { depth: null });
        } else if (result) {
            console.log(result);
        }
    })
    .catch(Cli.handleException)
);
