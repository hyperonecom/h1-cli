'use strict';

const pickBy = (obj, predicate) => Object.assign({}, ...Object.entries(obj || {})
    .filter(([, value]) => predicate(value))
    .map(([key, value]) => ({[key]: value})));

const get = (obj, path, defaultValue) => {
    const result = String.prototype.split.call(path, /[,[\].]+?/)
        .filter(Boolean)
        .reduce((res, key) => res !== null && res !== undefined ? res[key] : res, obj);
    return result === undefined || result === obj ? defaultValue : result;
};

const set = (obj, path, value) => {
    const keys = String.prototype.split.call(path, /[,[\].]+?/).filter(Boolean);
    let el = obj;
    for (const key of keys.slice(0, keys.length - 1)) {
        console.log({el, key, value: el[key]});
        if (el[key] === undefined) {
            el[key] = {};
        }
        el = el[key];
    }
    el[keys[keys.length - 1]] = value;
};
const unset = (obj, path) => set(obj, path, undefined);
module.exports = {
    pickBy,
    get,
    set,
    unset,
};
