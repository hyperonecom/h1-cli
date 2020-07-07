'use strict';

exports.deCamelCase = (text) => String(text)
    .replace(/([a-z])([A-Z])/, (m, a, b) => `${a}-${b}`)
    .toLowerCase();
