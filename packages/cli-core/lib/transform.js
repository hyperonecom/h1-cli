
export const deCamelCase = (text) => String(text)
    .replace(/([a-z])([A-Z])/, (m, a, b) => `${a}-${b}`)
    .toLowerCase();

export const get = (obj, path, defaultValue) => {
    const result = String.prototype.split.call(path, /[,[\].]+?/)
        .filter(Boolean)
        .reduce((res, key) => res !== null && res !== undefined ? res[key] : res, obj);
    return result === undefined || result === obj ? defaultValue : result;
};

export const set = (obj, path, value) => {
    const keys = String.prototype.split.call(path, /[,[\].]+?/).filter(Boolean);
    let el = obj;
    for (const key of keys.slice(0, -1)) {
        if (el[key] === undefined) {
            el[key] = {};
        }
        el = el[key];
    }
    delete el[keys[keys.length - 1]];
    el[keys[keys.length - 1]] = value;
};
export const unset = (obj, path) => set(obj, path, undefined);
