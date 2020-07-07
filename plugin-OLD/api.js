'use strict';
const fetch = require('node-fetch');
const openapi = require('../lib/openapi');
const api = require('../lib/api');

module.exports = {
    name: __dirname.split('/').pop(),
    parameters: {
        'passport-file': {
            type: 'string',
            description: 'Passport file',
            required: true,
        },
    },
    beforeHandler: async (ctx) => {
        ctx.toolbox.fetch = fetch;
        ctx.toolbox.api = api(ctx.input.passportFile, openapi.getUrl(''));
    },
};
