'use strict';

const Chalk = require('chalk');
let verbose = false;

module.exports.setVerbose = (value) => {
    verbose = value;
};

module.exports.log = (level, ...message) => {

    let chalkLevel = level;

    switch (level) {
    case 'verbose':
        chalkLevel = Chalk.yellow(level);
        break;
    case 'info':
        chalkLevel = Chalk.blue(level);
        break;
    case 'error':
        chalkLevel = Chalk.red(level);
        break;
    }

    if (verbose || level !== 'verbose') {
        console.error(`${chalkLevel}: ${message.join('\n')}`);
    }
};
