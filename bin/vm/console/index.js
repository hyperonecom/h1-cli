'use strict';

const genericConsole = require('bin/generic/console');

module.exports = resource => genericConsole(resource,
    (args, vm) => `https://console.hyperone.com/console/#/?scope=h1&username=${vm.id}&password=${args.apiKey}&billingTenant=${args.profile.project.id}`
);
