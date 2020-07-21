import {openapi} from '../';

export default {
    name: __filename.split('/').pop(),
    beforeCommandStart: (opts) => {
        opts.openapi = openapi;
    },
};
