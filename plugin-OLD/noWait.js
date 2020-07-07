'use strict';

const api = (passportFile, audience) => {

};

module.exports = {
    name: __dirname.split('/').pop(),
    parameters: {
        'no-wait': {
            type: 'boolean',
            description: 'In case of queued event do not wait for completion',
        },
    },
    beforeHandler: async (ctx) => {
        const prefer_async = 'no-wait' in ctx.input;
        const prefer_value = prefer_async ? 'respond-async,wait=0' : `respond-async,wait=${60 * 60 * 24}`;
        ctx.toolbox.api.setHeaders({
            Prefer: prefer_value,
        });
    },
};
