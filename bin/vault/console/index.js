'use strict';

const genericConsole = require('bin/generic/console');

module.exports = resource => genericConsole(resource,
    (args, vault) => `https://panel.hyperone.com/console/vault/${vault._id}?project=${args.profile.project._id}&scope=${process.env.SCOPE_NAME}`
);
