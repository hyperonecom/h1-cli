'use strict';

const genericConsole = require('bin/generic/console');

module.exports = resource => genericConsole(resource,
    (args) => args.helpers.api.redirect_url(`${resource.url(args)}/console`),
);
