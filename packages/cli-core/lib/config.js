export default (device) => {
    const api = {};
    api.get = (key, defaultValue) => device.configGet(key, defaultValue);
    api.set = (key, value) => device.configSet(key, value);
    api.unset = key => device.configUnset(key);
    api.store = () => device.configStore();
    api.all = () => device.configLoad();
    return api;
};

