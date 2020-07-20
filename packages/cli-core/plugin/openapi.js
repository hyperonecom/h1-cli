'use strict';
const {openapi} = require('../');

module.exports = {
    name: __filename.split('/').pop(),
    beforeCommandStart: (opts) => {
        opts.openapi = openapi;
    },
};
