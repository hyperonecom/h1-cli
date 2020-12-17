import http from '../lib/http';
import api from '../lib/api';
import auth from '../lib/auth';

export default {
    name: __filename.split('/').pop(),
    beforeParseArgv: (cmd) => cmd.options.push(
        {
            name: 'passport-file',
            typeLabel: 'path',
            description: 'Passport file. Default value is ~/.h1/passport.json, if available.',
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
            defaultAudience: opts.openapi.getUrl(''),
        });
        opts.api = api(opts.http, opts.auth);
    },
};
