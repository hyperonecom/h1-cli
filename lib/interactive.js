'use strict';

const inquirer = require('inquirer');
const _ = require('lodash');


module.exports.prompt = function(message, options={}) {

    options = _.defaults(options, {
        type: 'input'
        ,name: 'value'
        ,message: `${message}:`
        ,validate: input =>_.isEmpty(input) ? 'Incorrect input' : true
    });

    return inquirer.prompt(options);
};

module.exports.select = function(message, choices, options={}) {

    options = _.defaults(options, {
        type: 'rawlist'
        ,name: 'value'
        ,message: `${message}:`
        ,choices: choices
        ,validate: input =>_.isEmpty(input) ? 'Incorrect input' : true
    });

    return inquirer.prompt(options);
};

module.exports.confirm = function(message, options={}) {

    options = _.defaults(options, {
        type: 'confirm'
        ,name: 'value'
        ,message: `${message}:`
        ,default: false
    });

    return inquirer.prompt(options);
};
