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
    defaultQuery: "[].{id:_id,mac:macaddress,speed:speed,firewall:firewall,ipaddress:join(',',ip[].address),tags:join(',',keys(tag || `{}`) )}",
    url: args => `vm/${args.vm}/netadp`,
    options: options,
    plugins: defaults.plugins,
    title: 'network adapter',
    commands: ['list', 'delete'],
    dirname: __dirname,
    context: {
        listParams: '--vm test-vm',
        historyParams: '--vm test-vm',
        deleteParams: '--vm test-vm',
        addFirewallParams: '--vm test-vm --nic my-nic',
        removeFirewallParams: '--vm test-vm --nic my-nic',
    },
};

const rootChildResource = Object.assign({}, resource, {
    url: () => 'netadp',
});

const category = genericResource(resource);

category.addChild(require('./create')(resource));

category.addChild(require('bin/generic/show')(rootChildResource));
category.addChild(require('bin/generic/firewall')(rootChildResource));
category.addChild(require('bin/generic/history')(rootChildResource));
category.addChild(require('bin/generic/tag')(rootChildResource));

category.addChild(require('./ip'));

module.exports = category;
