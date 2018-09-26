'use strict';

const genericResource = require('bin/generic');
const defaults = require('bin/generic/defaults');

const options = {
    vm: {
        description: 'Virtual machine name or ID',
        type: 'string',
        required: true,
    },
    nic: {
        description: 'Network adapter ID',
        type: 'string',
        required: true,
    },
};

const resource = {
    name: 'ip',
    defaultQuery: '[].{id:_id,address:address,mac:mac,ptrRecord:ptrRecord,network:network,fip:associated.fip,state:state}',
    url: args => `vm/${args.vm}/netadp/${args.nic}/ip`,
    plugins: defaults.plugins,
    options: Object.assign({}, defaults.options, options),
    commands: [ 'list', 'delete' ],
    transform: data => data.ip || data,
    title: 'IP address of network adapter',
    context: {
        deleteParams: '--vm my-vm --nic nic-of-vm --ip 123.0.0.50',
        listParams: '--vm my-vm --nic nic-of-vm',
    },
};


const category = genericResource(resource);

category.addChild(require('./add')(resource));
category.addChild(require('./replace')(resource));
category.addChild(require('./persistent')(resource));

category.addChild(require('bin/generic/show')(Object.assign({}, resource, {
    url: () => 'ip',
})));

module.exports = category;

