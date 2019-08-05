'use strict';

const genericResource = require('bin/generic');
const defaults = require('bin/generic/defaults');

module.exports = (parent) => {
    const options = {
        [parent.name]: {
            description: `${parent.title} ID`,
            type: 'string',
            required: true,
        },
    };

    const resource = {
        name: 'ip',
        defaultQuery: '[].{id:_id,address:address,mac:mac,ptrRecord:ptrRecord,network:network,fip:associated.fip,state:state}',
        url: args => `${parent.url(args)}/${args[parent.name]}/ip`,
        plugins: defaults.plugins,
        options: Object.assign({}, parent.options, options),
        commands: ['list', 'delete'],
        transform: data => data.ip || data,
        title: `IP address of ${parent.title}`,
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
    return category;
};
