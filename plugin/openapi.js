'use strict';
const openapi = require('../lib/openapi');

module.exports = {
    name: __filename.split('/').pop(),
    beforeCommandStart: (opts) => {
        opts.openapi = openapi;
    },
};
