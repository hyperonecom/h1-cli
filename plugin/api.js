'use strict';
const http = require('../lib/http');
const api = require('../lib/api');
const auth = require('../lib/auth');

module.exports = {
    name: __filename.split('/').pop(),
    beforeParseArgv: (cmd) => cmd.options.push(
        {
            name: 'passport-file',
            typeLabel: 'path',
            description: 'Passport file. Defaults to ~/.h1/passport.json.',
            group: ['global'],
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
        opts.http = http(cmd.device, opts.logger);
        let passport;
        if (optsAll['passport-file']) {
            passport = await cmd.device.readPassportFile(optsAll['passport-file']);
        } else {
            passport = await cmd.device.readDefaultPassport();
        }
        opts.auth = auth({
            http: opts.http,
            config: cmd.config,
            logger: opts.logger,
            passport,
            as: optsAll.as,
            audience: opts.openapi.getUrl(''),
        });
        opts.api = api(opts.http, opts.auth);
    },
};
