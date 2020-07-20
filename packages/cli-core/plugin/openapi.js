const {openapi} = require('../');

export default {
    name: __filename.split('/').pop(),
    beforeCommandStart: (opts) => {
        opts.openapi = openapi;
    },
};
