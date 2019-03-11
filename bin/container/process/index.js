'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

module.exports = (parent) => {
    const resource = {
        name: 'process',
        defaultQuery: '[].{name:name, user:user, process_id:process_id, parent_process_id:parent_process_id}',
        url: args => `${parent.url(args)}/process`,
        plugins: genericDefaults.plugins,
        commands: ['list'],
        options: parent.options,
        earlyAdoptersOnly: true,
        title: 'process in container',
        context: {
            listParams: `--${parent.name} my-${parent.name}`,
        },
    };

    return genericResource(resource);
};
