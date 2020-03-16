'use strict';

const Cli = require('./cli');

const verifyTTY= (fn) => (...args) => {
    if (!process.stdin.isTTY) {
        return Promise.reject(Cli.error.cancelled('No access to tty. Interactive actions are not allowed.'));
    }
    return fn(...args);
};

module.exports.prompt = verifyTTY((message, options = {}) => {
    options = Object.assign({}, {
        type: 'input',
        name: 'value',
        message: `${message}:`,
        validate: input => input.length === 0 ? 'Incorrect input' : true,
    }, options);

    return require('inquirer').prompt(options);
});

module.exports.select = verifyTTY((message, choices, options = {}) => {
    options = Object.assign({}, {
        type: 'rawlist',
        name: 'value',
        message: `${message}:`,
        choices: choices,
        validate: input => input.length === 0 ? 'Incorrect input' : true,
    }, options);

    return require('inquirer').prompt(options);
});

module.exports.confirm = verifyTTY((message, options = {}) => {
    options = Object.assign({}, {
        type: 'confirm',
        name: 'value',
        message: `${message}:`,
        default: false,
    }, options);

    return require('inquirer').prompt(options);
});
