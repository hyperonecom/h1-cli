'use strict';

const Cli = require('lib/cli');

const defaults = require('bin/generic/defaults');
const addTrailingDot = require('../lib').addTrailingDot;
const recordTypes = require('../recordTypes');

const resource = {
    name: 'record-set',
    // eslint-disable-next-line quotes
    defaultQuery: "[].{id:id, name:name, type:type, ttl:ttl, record:join(',',record[].content)}",
    url: args => `zone/${addTrailingDot(args.zone)}`,
    options: {
        zone: {
            description: 'Zone name or ID',
            type: 'string',
            required: true,
        },
    },
    title: 'record set',
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

    category.addChild(require('bin/generic/list')(Object.assign({}, resource, {
        url: args => `zone/${addTrailingDot(args.zone)}/recordset`,
    })));

    return category;
};

const record = (type, parent) => {
    const category = Cli.createCategory(type, {
        description: `Manage record set type ${type.toUpperCase()}`,
        defaultQuery: `[?type=='${type.toUpperCase()}'][].{id:id, name:name, type:type, ttl:ttl, record:join(',',record[].content)}`,
    });

    const resource = Object.assign({}, parent, {
        title: `record ${type.toUpperCase()}`,
        url: args => `zone/${addTrailingDot(args.zone)}`,
        context: Object.assign({}, parent.context, {
            listParams: '--zone my-zone',
            dns_type: type,
            dns_value: recordTypes[type].value,
        }),
    });

    category.addChild(require('bin/generic/list')(Object.assign({}, resource, {
        url: args => `zone/${addTrailingDot(args.zone)}/recordset`,
    })));
    category.addChild(require('./createRecordSet')(resource, type));
    category.addChild(require('./deleteRecordSet')(resource, type));
    category.addChild(require('./upsertRecordSet')(resource, type));
    category.addChild(require('./addRecord')(resource, type));
    category.addChild(require('./deleteRecord')(resource, type));

    if (recordTypes[type].extraCommand) {
        recordTypes[type].extraCommand.forEach(
            cmd => category.addChild(require(`./${cmd}`)(resource))
        );
    }
    return category;
};

module.exports = category(resource);
