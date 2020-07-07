'use strict';

module.exports = {
    name: __dirname.split('/').pop(),
    error: async (ctx, err) => {
        console.log(err);
    },
};
