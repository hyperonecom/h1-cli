'use strict';

const genericResource = require('bin/generic');
const defaults = require('bin/generic/defaults');

const options = {
    vm: {
        description: 'Virtual machine name or ID',
        type: 'string',
        required: true,
    },
};

const resource = {
    name: 'nic',
    // eslint-disable-next-line quotes
    defaultQuery: "[].{id:_id,mac:macaddress,speed:speed,ipaddress:join(',',ip[].address),processing:processing}",
    url: args => `vm/${args.vm}/netadp`,
    options: options,
    plugins: defaults.plugins,
    title: 'network adapter',
    commands: ['list', 'show', 'delete'],
    dirname: __dirname,
    context: {
        listParams: '--vm test-vm',
        historyParams: '--vm test-vm',
        deleteParams: '--vm test-vm',
    },
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));

category.addChild(require('bin/generic/history')(Object.assign({}, resource, {
    url: () => 'netadp',
})));

category.addChild(require('./ip'));

module.exports = category;
