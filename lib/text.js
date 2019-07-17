'use strict';

exports.toTitleCase = (str) => {
    return str.charAt(0).toUpperCase() + str.substr(1);
};

exports.deCamelCase = (text) => String(text)
    .replace(/([a-z])([A-Z])/, (m, a, b) => `${a  }-${  b}`)
    .toLowerCase();
