'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

module.exports = (parent) => genericResource({
    name: 'process',
    defaultQuery: '[].{id:id, parent:parent, user:user, name:name}',
    url: args => `${parent.url(args)}/process`,
    plugins: genericDefaults.plugins,
    commands: ['list'],
    options: parent.options,
    earlyAdoptersOnly: true,
    title: 'process in container',
    context: {
        listParams: `--${parent.name} my-${parent.name}`,
    },
});
