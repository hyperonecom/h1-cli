'use strict';

const Chalk = require('chalk');

module.exports = (level, ...message) => {

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

    console.error(`${chalkLevel}: ${message.join('\n')}`);
};
