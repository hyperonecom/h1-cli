'use strict';

const path = require('path');
const os = require('os');
const fs = require('fs');
const {get, unset, set} = require('./transform');

const logger = require('./logger');

const plugins = [];
let config;

if (!process.env.SCOPE_NAME) {
    throw new Error('The environment variable SCOPE_NAME is missing.');
}

exports.scope = () => process.env.SCOPE_NAME.toUpperCase();
exports.getEnv = (name) => process.env[`${process.env.SCOPE_FULL_NAME.toUpperCase()}_${name.toUpperCase()}`];
exports.getTokenEnv = () => exports.getEnv('ACCESS_TOKEN_SECRET');
exports.getProjectEnv = () => exports.getEnv('PROJECT');
exports.isEarlyAdopters = () => !!exports.getEnv('EARLY_ADOPTERS');

const configPath = exports.getEnv('CONFIG_PATH') || path.join(os.userInfo().homedir, `.${process.env.SCOPE_NAME}-cli`);

const configFilePath = path.join(configPath, 'conf.json');
const pluginsPath = path.join(configPath, 'plugins');

const store = () => {
    const data = JSON.stringify(config, null, 2);
    fs.writeFileSync(configFilePath, data, 'utf8');
};

if (!fs.existsSync(configPath)) {
    fs.mkdirSync(configPath);
}

if (fs.existsSync(configFilePath)) {
    config = require(configFilePath);
} else {
    logger('warn', 'Config file not found. Creating one in your home directory.');
    config = {};
    store();
}

if (fs.existsSync(pluginsPath)) {
    fs.readdirSync(pluginsPath).forEach(name => {
        plugins.push(require(path.join(pluginsPath, name)));
    });
}

exports.get = (key, defaultValue) => get(config, key, defaultValue);
exports.set = (key, value) => set(config, key, value);
exports.unset = key => unset(config, key);
exports.plugins = plugins;
exports.get_active_project = () => exports.getProjectEnv() || exports.get('profile.project._id');
exports.store = store;
