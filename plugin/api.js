'use strict';
const fetch = require('node-fetch');
const openapi = require('../lib/openapi');
const { api } = require('../lib/api');
const untildify = require('untildify');

const pathType = value => untildify(value);

module.exports = {
    name: __filename.split('/').pop(),
    options: [
        {
            name: 'passport-file',
            type: pathType,
            typeLabel: 'path',
            description: 'Passport file. Defaults to ~/.h1/passport.json.',
            group: ['authentication'],
            defaultValue: pathType('~/.h1/passport.json'),
        },
    ],
    beforeCommandStart: async (opts) => {
        opts.fetch = fetch;
        opts.api = api(opts._all['passport-file'], openapi.getUrl(''));
    },
};
