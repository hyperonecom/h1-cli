const { get, set, unset } = require('./transform');

export default (device) => {
    const config = device.configLoad() || {
        parameter: {
            location: {
                value: 'pl-waw-1',
            },
        },
    };

    const api = {};
    api.get = async (key, defaultValue) => get(await config, key, defaultValue);
    api.set = async (key, value) => set(await config, key, value);
    api.unset = async key => unset(await config, key);
    api.store = async () => device.configSave(await config);
    api.all = () => config;
    return api;
};

