'use strict';
const {get, set, unset} = require('./transform');

module.exports = (deviceInstance) => {
    const config = deviceInstance.configLoad() || {
        parameter: {
            location: {
                value: 'pl-waw-1',
            },
        },
    };

    const api = {};
    api.get = (key, defaultValue) => get(config, key, defaultValue);
    api.set = (key, value) => set(config, key, value);
    api.unset = key => unset(config, key);
    api.store = () => deviceInstance.configSave(config);
    api.all = () => config;
    return api;
};

