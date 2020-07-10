'use strict';
const http = require('../lib/http');
const openapi = require('../lib/openapi');
const { api } = require('../lib/api');
const untildify = require('untildify');

const pathType = value => untildify(value);

module.exports = {
    name: __filename.split('/').pop(),
    beforeParseArgv: (cmd) => cmd.options.push(
        {
            name: 'passport-file',
            type: pathType,
            typeLabel: 'path',
            description: 'Passport file. Defaults to ~/.h1/passport.json.',
            group: ['global'],
            defaultValue: pathType('~/.h1/passport.json'),
        },
        {
            name: 'as',
            typeLabel: 'uri',
            description: 'Act as another actor eg. service account',
            group: ['global'],
        }
    ),
    beforeCommandStart: async (opts, cmd) => {
        const optsAll = opts._all || opts;
        opts.http = http(cmd.state.device, opts.logger);
        opts.api = api(opts.http, opts.logger, {
            passportFile: optsAll['passport-file'],
            as: optsAll.as,
            audience: openapi.getUrl(''),
            config: cmd.state.config,
        });
    },
};
