'use strict';

const Cli = require('lib/cli');

const defaults = require('bin/generic/defaults');

const resource = {
    name: 'record-set',
    // eslint-disable-next-line quotes
    defaultQuery: "[].rrsets[].{name:name, type:type, ttl:ttl, records:join(',',records[].content)}",
    url: args => `dns/zone/${args.zone}`,
    options: {
        zone: {
            description: 'DNS zone name',
            type: 'string',
            required: true,
        },
    },
    title: 'Record set',
};

const recordTypes = {
    a: {
        value: '8.8.3.3',
    },
    cname: {
        value: 'cname-example.com',
    },
    txt: {
        value: '"some-text-value"',
    },
    mx: {
        value: '10 mail.example.com',
    },
    ns: {
        value: 'ns1.example.com',
    },
    srv: {
        value: '10 5 11 s1.example.com.',
    },
};

const category = (resource) => {

    const resourceDefaults = {
        url: () => resource.name,
    };

    resource = Object.assign({}, defaults, resourceDefaults, resource);

    const category = Cli.createCategory(resource.name, {
        description: `Manage your ${resource.name}`,
        defaultQuery: resource.defaultQuery,
        url: resource.url,
    });

    Object.keys(recordTypes).forEach(type => category.addChild(record(type, resource)));

    category.addChild(require('bin/generic/list')(resource));

    return category;
};

const record = (type, resource) => {
    const category = Cli.createCategory(type, {
        description: `Manage record set type ${type.toUpperCase()}`,
        defaultQuery: `[?type=='${type.toUpperCase()}'][].{name:name, type:type, ttl:ttl, records:join(',',records[].content)}`,
        url: args => `${resource.url(args)}/rrsets/${type.toUpperCase()}`,
    });

    resource = Object.assign({}, resource, {
        title: `Record ${type.toUpperCase()}`,
        context: Object.assign({}, resource.context, {
            listParams: '--zone my-zone',
            dns_type: type,
            dns_value: recordTypes[type].value,
        }),
    });

    category.addChild(require('bin/generic/list')(resource));
    category.addChild(require('./createRecordSet')(resource));
    category.addChild(require('./deleteRecordSet')(resource));
    category.addChild(require('./addRecord')(resource));
    category.addChild(require('./deleteRecord')(resource));

    return category;
};

module.exports = category(resource);
