'use strict';

exports.toTitleCase = (str) => {
    return str.charAt(0).toUpperCase() + str.substr(1);
};

exports.deCamelCase = (text) => String(text)
    .replace(/([a-z])([A-Z])/, (m, a, b) => `${a}-${b}`)
    .toLowerCase();

exports.rmRight = (text, rm) => text.endsWith(rm) ? text.slice(0, text.length - rm.length) : text;
exports.rmLeft = (text, rm) => text.startsWith(rm) ? text.slice(rm.length, text.length) : text;
