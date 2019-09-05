'use strict';

const genericConsole = require('bin/generic/console');

module.exports = resource => genericConsole(resource,
    (args, vault) => `https://panel.hyperone.com/console/vault/${vault.id}?project=${args.profile.project.id}&scope=${process.env.SCOPE_NAME}`
);
