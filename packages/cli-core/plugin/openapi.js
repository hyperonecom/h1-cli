import { openapi } from '../index.js';

export default {
    name: 'openapi',
    beforeCommandStart: (opts) => {
        opts.openapi = openapi;
    },
};
